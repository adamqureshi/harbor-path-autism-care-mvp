# Harbor Path Autism Care MVP Landing Page

Static landing page for the Harbor Path early-access MVP.

## Recommended repo name

`harbor-path-autism-care-mvp`

Other good options:

- `harbor-path-virtual-autism-care`
- `harbor-path-care`
- `harbor-path-landing`

Avoid `harbor-health` for now because it sounds broader than the autism care wedge and may create naming confusion.

## How to deploy on Vercel

1. Create a new GitHub repository.
2. Upload these files to the root of the repository.
3. In Vercel, click **Add New Project**.
4. Import the GitHub repo.
5. Framework preset: **Other** or **Static**.
6. Build command: leave blank.
7. Output directory: leave blank or use `/`.
8. Deploy.
9. After deploy, go to **Project → Settings → Domains** and add your custom domain.
10. Update DNS at your registrar using the records Vercel gives you.

## Before launch

Open `script.js` and replace:

```js
const CONTACT_EMAIL = "hello@harborpathcare.com";
```

with the email you want family and clinician leads to go to.

The forms currently open a pre-filled email. This is simple for MVP testing but not ideal for collecting protected health information. Keep the public forms lightweight and do not ask families to submit diagnosis details, treatment history, or sensitive medical information.

## Suggested next upgrade

Replace the mailto form with one of these:

- Tally form embedded on the page
- Typeform
- HIPAA-compliant form vendor with a BAA if collecting PHI
- Custom backend connected to a secure database

## Positioning

Primary tagline:

> Virtual autism care for New York families.

Core message:

> Harbor Path helps New York families start virtual ABA support from home through licensed clinicians, caregiver coaching, and AI-assisted progress tools.

## Important compliance note

Use clinician-led language. Avoid saying AI diagnoses, treats, prescribes, or independently creates treatment plans. For New York, make sure ABA services are delivered by appropriately licensed/certified professionals.
