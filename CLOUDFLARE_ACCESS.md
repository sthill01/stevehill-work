# Cloudflare Access Setup for the IHS Plan

The production site includes these IHS routes:

- Public or lightly shared overview: `/IHS`
- Protected plan: `/IHS/120-day-plan`
- Legacy plan redirects: `/IHS-120-Day-Plan` and `/IHS-120-Day-Plan.html`
- Protected one-pager: `/IHS-120-Day-OnePager` and `/IHS-120-Day-OnePager.html`
- Protected live presentation: `/IHS-Round3-Presentation` and `/IHS-Round3-Presentation.html`

Use Cloudflare Access to protect the detailed plan and live presentation routes.

## Recommended Policy

1. Open Cloudflare Dashboard.
2. Go to **Zero Trust**.
3. Go to **Access** > **Applications**.
4. Add an application.
5. Choose **Self-hosted**.
6. Application name: `Steve Hill IHS 120-Day Plan`.
7. Public hostname:
   - Domain: `stevehill.work`
   - Path: `/IHS/120-day-plan`
8. Add an allow policy.
9. Use one of these rules:
   - Specific allowed emails for the interview panel.
   - One-time PIN to approved email addresses.
   - Google identity for approved email addresses.
10. Save and test in an incognito browser before sharing the link.

Repeat the same setup for the presentation route:

- Application name: `Steve Hill IHS Round 3 Presentation`
- Domain: `stevehill.work`
- Path: `/IHS-Round3-Presentation`

Repeat the same setup for the one-pager route:

- Application name: `Steve Hill IHS 120-Day One-Pager`
- Domain: `stevehill.work`
- Path: `/IHS-120-Day-OnePager`

Also protect the legacy and direct routes if your Access setup does not support wildcard paths:

- `/IHS/120-day-plan`
- `/IHS-120-Day-Plan`
- `/IHS-120-Day-Plan.html`
- `/IHS-120-Day-OnePager.html`
- `/IHS-Round3-Presentation.html`

## Sharing Guidance

Share the protected URL only after the Access policy is active:

`https://stevehill.work/IHS/120-day-plan`
`https://stevehill.work/IHS-120-Day-Plan` redirects to the canonical plan route.
`https://stevehill.work/IHS-120-Day-OnePager`
`https://stevehill.work/IHS-Round3-Presentation`

Keep the broader portfolio public:

`https://stevehill.work/`

## Rollback

If the Access rule is misconfigured, temporarily remove the custom-domain path policy or change the protected route back to the previous Pages project. The site code does not contain passwords; access is enforced at Cloudflare.
