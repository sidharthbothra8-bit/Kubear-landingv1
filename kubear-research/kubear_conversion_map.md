# Kubear conversion and app-handoff map

Kubear now has two real product destinations. The marketing site should present them as a confident choice based on device and visitor intent, not as competing calls to action. The web app is the default action when a visitor is ready to start in a browser. The Google Play route is the default action for an Android visitor who wants the native app.

| Placement | Desktop label | Android/mobile label | URL | Behaviour | Measurement event |
| --- | --- | --- | --- | --- | --- |
| Header | Open Kubear | Get Kubear | `https://kubear.kuberos.in` on desktop; Google Play on confirmed Android | Same-tab app handoff; standard Play link handoff. | `marketing_open_app` / `marketing_open_play` |
| Hero primary | Open Kubear | Get it on Google Play | Device-specific as above. | The primary button is visually dominant. | `hero_primary_cta` |
| Hero secondary | Get the Android app | Open web app | The other valid destination. | Secondary outlined button. | `hero_secondary_cta` |
| Salary plan section | Open Kubear | Open Kubear | `https://kubear.kuberos.in` | Same tab, because the visitor has already understood the product. | `plan_scene_open_app` |
| Home-money section | Use Kubear for home money | Use Kubear for home money | `https://kubear.kuberos.in` | Same tab. | `home_scene_open_app` |
| Goal scene | Get it on Google Play | Get it on Google Play | `https://play.google.com/store/apps/details?id=in.kuberos.kubear&pcampaignid=web_share` | New tab only on desktop. | `goal_scene_play` |
| Final handoff | Use the web app / Get it on Google Play | Get it on Google Play / Open web app | Both valid routes, shown as a direct device choice. | Web app same tab; Play link as above. | `final_web_app` / `final_play` |
| Footer | Open Kubear | Get it on Google Play | Device-specific. | Text link, no clutter. | `footer_app_handoff` |

## Desktop app-handoff module

The final CTA section should show a real Kubear app screen inside a dark ink “week complete” frame. Beside it, present two labelled actions: **Use the web app** and **Get it on Google Play**. Under the Android action, show a real QR code generated from the exact Google Play URL. Add one concise line: “Use Kubear on web or Android.” Do not place a fake Apple App Store badge or imply iOS support.

## Mobile app-handoff module

On Android-width screens, the first primary CTA should resolve directly to the Google Play URL. A second text action should say “Open web app” and point to `https://kubear.kuberos.in`. No QR code is needed on a mobile screen. The bottom CTA repeats the same choice without an aggressive modal or interrupting download prompt.

## Link quality and legal guardrails

Track every handoff so Kubear can compare web-app and Android conversion by entry point. The Play Store description says that Kubear requires sign-in for account-backed features and is intended for adults aged 18 and above; if either point is placed on the website, it must use an approved current wording and link to the current terms.[1] The site can say “Kubear does not hold or move money” because the provided Play Store listing says so, but it must not add banking integrations, return outcomes or advice claims beyond approved product materials.[1]

## Reference

[1]: https://play.google.com/store/apps/details?id=in.kuberos.kubear&pcampaignid=web_share “Kubear: Money Manager, Google Play”
