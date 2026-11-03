# iTxRe — Website

Marketing site for **iTxRe**, an income tax consulting, planning, and compliance firm at 120 Bulloch Avenue, Roswell, GA.

It's plain HTML, CSS, and JavaScript, so there's no build step, framework, or `npm install`. It runs on any static host, including GitHub Pages, Netlify, Cloudflare Pages, and Vercel.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home: animated hero with a sample "tax model", trust bar, pillars, solutions, year-round rhythm tabs, industries grid, process, comparison table, team preview, FAQ, CTA |
| `services.html` | Solutions for business owners and individuals, with a sticky jump nav |
| `industries.html` | Industries hub with 12 industry sections (problem → solution) |
| `about.html` | Firm story, approach, filterable team grid, security |
| `staffing.html` | Staffing & Recruiting practice |
| `client-center.html` | Portal, upload, and payment links, plus auto-updating federal tax deadlines and a document checklist |
| `contact.html` | Consultation form, contact cards, map |
| `privacy.html` | Privacy policy (template, to be reviewed by counsel) |
| `404.html` | Not-found page |

```
assets/
  css/styles.css   Design system and all components
  js/site.js       Shared header, mega menus, footer, and interactions
  img/favicon.svg
```

## Editing the site

**Firm details, menus, and industries are set in one place.** Open `assets/js/site.js`:

- `SITE` holds the phone, email, address, hours, and the **client portal, upload, and payment URLs**.
- `MENU` holds the content of the mega menus (Solutions, Our Firm, Client Center).
- `INDUSTRIES` holds the 12 industries that feed the Industries mega menu, the homepage grid, and the footer.

The header and footer render from these on every page, so a change there updates the whole site.

**Brand colors and fonts** are CSS variables at the top of `assets/css/styles.css`. Burnt orange `--ember: #e0602c` was taken from the iTxRe logo. The fonts are Cormorant Garamond (display) and Manrope (body), both from Google Fonts.

**Team headshots:** add the photos to `assets/img/team/`. In `about.html` (and the preview on `index.html`), replace the monogram, for example:

```html
<div class="person__photo"><img src="assets/img/team/seth-peabody.jpg" alt="T. Seth Peabody"></div>
```

## Preview locally

From this folder, run either command:

```bash
python3 -m http.server 8000
```

```bash
ruby -run -e httpd . -p 8000
```

Then open http://localhost:8000.

## Deploy with GitHub Pages

1. Create a repository and push these files to the `main` branch, with `index.html` at the root.
2. In the repo, go to **Settings → Pages → Build and deployment**, set **Source: Deploy from a branch**, then choose **Branch: main** and **/ (root)**.
3. For a custom domain, add a file named `CNAME` containing `www.itxre.com` and point DNS at GitHub Pages.

`.nojekyll` is included so GitHub serves the files as-is.

## Before launch

- [ ] Set the real **Client Portal**, **Upload Files**, and **Pay Online** URLs in `SITE` (they are `#` placeholders now)
- [ ] Create a free form at formspree.io and replace `YOUR_FORM_ID` in `contact.html`. Until then, the form only shows its success message and sends nothing.
- [ ] Confirm **office hours** in `SITE.hours`. The current value is a placeholder.
- [ ] Add the real **LinkedIn** URL in `SITE.linkedin`
- [ ] Confirm the expanded service lines (entity strategy, multi-state, equity compensation, and so on) and the 12 industries match what the firm wants to promote
- [ ] Add team headshots and confirm every name and title
- [ ] Have counsel review `privacy.html` and the Circular 230 footer text
- [ ] Update `sitemap.xml` if the domain is not `www.itxre.com`
