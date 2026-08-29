import { ArticleData, articlesPillar1To3 } from "./data/articlesPillar1To3";
import { articlesPillar4To6 } from "./data/articlesPillar4To6";
import { articlesPillar7To8 } from "./data/articlesPillar7To8";
import { articlesPillar9To10 } from "./data/articlesPillar9To10";

export type { ArticleData };

export const full50Articles: ArticleData[] = [
  ...articlesPillar1To3,
  ...articlesPillar4To6,
  ...articlesPillar7To8,
  ...articlesPillar9To10
];

export default full50Articles;
