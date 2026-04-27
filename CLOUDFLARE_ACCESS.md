# Cloudflare Access Setup for the IHS Plan

The production site includes two IHS routes:

- Public or lightly shared overview: `/IHS`
- Protected plan: `/IHS-120-Day-Plan`

Use Cloudflare Access to protect only the detailed plan route.

## Recommended Policy

1. Open Cloudflare Dashboard.
2. Go to **Zero Trust**.
3. Go to **Access** > **Applications**.
4. Add an application.
5. Choose **Self-hosted**.
6. Application name: `Steve Hill IHS 120-Day Plan`.
7. Public hostname:
   - Domain: `stevehill.work`
   - Path: `/IHS-120-Day-Plan`
8. Add an allow policy.
9. Use one of these rules:
   - Specific allowed emails for the interview panel.
   - One-time PIN to approved email addresses.
   - Google identity for approved email addresses.
10. Save and test in an incognito browser before sharing the link.

## Sharing Guidance

Share the protected URL only after the Access policy is active:

`https://stevehill.work/IHS-120-Day-Plan`

Keep the broader portfolio public:

`https://stevehill.work/`

## Rollback

If the Access rule is misconfigured, temporarily remove the custom-domain path policy or change the protected route back to the previous Pages project. The site code does not contain passwords; access is enforced at Cloudflare.
