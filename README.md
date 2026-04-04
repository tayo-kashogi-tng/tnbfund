# The Nigerian Bridge Fund

Static React + Vite site for The Nigerian Bridge Fund, deployed on Vercel.

## Security hardening

This project now includes a Vercel header configuration in [vercel.json](./vercel.json) with:

- `Content-Security-Policy`
- `Strict-Transport-Security`
- `Referrer-Policy`
- `X-Content-Type-Options`
- `X-Frame-Options`
- `Permissions-Policy`
- `Cross-Origin-Opener-Policy`
- long-term caching for built assets in `/assets`

### CSP notes

The site loads a third-party GoFundMe embed, so the CSP intentionally allows GoFundMe for:

- `script-src`
- `style-src`
- `connect-src`
- `frame-src`

If you later add another external service such as a form provider, analytics tool, or image CDN, you will likely need to update the CSP to allow that domain explicitly.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Vercel deployment checklist

Use this checklist whenever you update the live site:

1. Confirm the correct production domain is attached in Vercel.
2. Confirm HTTPS is active on the production domain.
3. Turn on MFA for:
   GitHub
   Vercel
   Google account used for the application form
   domain registrar
4. Verify the Google Form and linked Sheet are only accessible to the minimum required admins.
5. Deploy the latest commit to Vercel.
6. After deployment, check the homepage and confirm:
   the GoFundMe widget still loads
   the Google Form link opens correctly
   email links still open correctly
   the FAQ, contact, and donation sections render normally
7. Confirm response headers in production. For example:

```bash
curl -I https://your-domain.example
```

Check for these headers:

- `content-security-policy`
- `strict-transport-security`
- `referrer-policy`
- `x-content-type-options`
- `x-frame-options`
- `permissions-policy`

8. If the GoFundMe widget stops rendering after a security change, review `Content-Security-Policy` first.
9. Avoid adding inline scripts, custom backend endpoints, or new third-party embeds without reviewing the CSP.
10. Keep dependencies updated intentionally and deploy from the lockfile-backed install.

## Operational recommendations

- Use a dedicated shared inbox or aliases like `contact@...` and `support@...` if you move to a custom domain email setup.
- If you replace the public email with a contact form later, choose a provider with built-in anti-spam protection.
- If you collect more sensitive applicant data in the future, reconsider Google Forms and move to a workflow with stronger privacy and access controls.
