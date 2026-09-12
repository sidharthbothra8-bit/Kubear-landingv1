import { COOKIE_NAME } from "@shared/const";
import { parse as parseCookie } from "cookie";
import { z } from "zod";
import { getSessionCookieOptions } from "./_core/cookies";
import { createHeartbeatJob, updateHeartbeatJob } from "./_core/heartbeat";
import { systemRouter } from "./_core/systemRouter";
import { adminProcedure, publicProcedure, router } from "./_core/trpc";
import { applyPublicationAction, getLearnHub, getPublicArticle, getPublicTopic, getStudioData } from "./learn";

const getSessionToken = (headers: { cookie?: string; authorization?: string }) => {
  const cookieToken = parseCookie(headers.cookie ?? "")[COOKIE_NAME];
  if (cookieToken) return cookieToken;
  return headers.authorization?.startsWith("Bearer ") ? headers.authorization.slice(7) : "";
};

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),
  learn: router({
    hub: publicProcedure.query(() => getLearnHub()),
    article: publicProcedure.input(z.object({ slug: z.string().min(1).max(180) })).query(({ input }) => getPublicArticle(input.slug)),
    topic: publicProcedure.input(z.object({ topic: z.string().min(1).max(80) })).query(({ input }) => getPublicTopic(input.topic)),
    studio: publicProcedure.query(() => getStudioData()),
    articleAction: publicProcedure.input(z.object({ id: z.number().int().positive(), action: z.enum(["mark_review", "approve_schedule", "pause", "publish_now"]) })).mutation(async ({ ctx, input }) => {
      return applyPublicationAction(input.id, input.action, ctx.user?.name ?? "Kubear Editorial Team");
    }),
    activateWeeklyPublishing: publicProcedure.mutation(async ({ ctx }) => {
      const data = await getStudioData();
      if (!data.schedule) throw new Error("The Learn schedule record has not been seeded yet.");
      const sessionToken = getSessionToken(ctx.req.headers);
      if (!sessionToken) throw new Error("A signed-in session is required to activate weekly publishing.");
      let taskUid = data.schedule.scheduleCronTaskUid;
      if (taskUid) {
        await updateHeartbeatJob(taskUid, { enable: true }, sessionToken);
      } else {
        const job = await createHeartbeatJob({ name: "kubear-learn-tuesday", cron: data.schedule.cronExpression, path: "/api/scheduled/publish-learn", description: "Publish Kubear Learn articles that are reviewed, approved and due." }, sessionToken);
        taskUid = job.taskUid;
      }
      const { getDb } = await import("./db");
      const { learnPublicationSchedules } = await import("../drizzle/schema");
      const { eq } = await import("drizzle-orm");
      const db = await getDb();
      if (!db) throw new Error("The Learn editorial database is not available.");
      await db.update(learnPublicationSchedules).set({ scheduleCronTaskUid: taskUid, isEnabled: true }).where(eq(learnPublicationSchedules.id, data.schedule.id));
      return { taskUid };
    }),
  }),
});

export type AppRouter = typeof appRouter;
