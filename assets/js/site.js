/* ==========================================================================
   iTxRe — shared layout + interactions
   Header, mega menus, mobile nav and footer are rendered here so they live
   in ONE place. Edit SITE / MENU / INDUSTRIES below and every page updates.
   ========================================================================== */

/* ---------- Firm details (edit me) ---------- */
const SITE = {
  name: "iTxRe",
  phone: "770.642.9855",
  phoneHref: "tel:+17706429855",
  email: "info@itxre.com",
  street: "120 Bulloch Avenue",
  city: "Roswell, GA 30075",
  hours: "Mon–Fri, 9:00 a.m.–5:00 p.m.",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=120%20Bulloch%20Avenue%2C%20Roswell%2C%20GA%2030075",
  // Replace with the firm's real portal links before launch
  portalUrl: "#client-portal",
  uploadUrl: "#secure-upload",
  payUrl: "#pay-online",
  linkedin: "https://www.linkedin.com/",
  consult: "contact.html",
};

/* ---------- Icon set (24px line icons) ---------- */
const ICONS = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  chevron: '<path d="M6 9l6 6 6-6"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0112 2.5a7 7 0 017 7C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/>',
  shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  trend: '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
  calc: '<rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M8 6.5h8M8 11h.01M12 11h.01M16 11h.01M8 14.5h.01M12 14.5h.01M16 14.5h.01M8 18h.01M12 18h4"/>',
  doc: '<path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0113 0M16 4.5a3.5 3.5 0 010 7M21.5 20a6.5 6.5 0 00-4-6"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18"/>',
  building: '<path d="M4 21V5a2 2 0 012-2h8a2 2 0 012 2v16M16 9h2a2 2 0 012 2v10M2 21h20M8 7h4M8 11h4M8 15h4"/>',
  home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10M10 20v-6h4v6"/>',
  medical: '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>',
  scale: '<path d="M12 3v18M7 21h10M5 7h14M5 7l-3 7a4 4 0 006 0L5 7zM19 7l-3 7a4 4 0 006 0l-3-7z"/>',
  hardhat: '<path d="M2 18h20M4 18v-3a8 8 0 0116 0v3M10 7V5h4v2M12 7v5"/>',
  film: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/>',
  cpu: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/><rect x="10" y="10" width="4" height="4"/>',
  store: '<path d="M3 9l2-5h14l2 5M3 9h18v2a3 3 0 01-6 0 3 3 0 01-6 0 3 3 0 01-6 0V9zM5 13v8h14v-8M10 21v-5h4v5"/>',
  utensils: '<path d="M7 2v9M4 2v6a3 3 0 006 0V2M7 11v11M17 2c-2 2-3 5-3 8h3v12"/>',
  factory: '<path d="M2 21V10l6 4V10l6 4V6l8 4v11H2z"/><path d="M6 17h2M11 17h2M16 17h2"/>',
  truck: '<path d="M2 6h12v10H2zM14 10h4l3 3v3h-7"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>',
  spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v3a2 2 0 002 2h12a2 2 0 002-2v-3"/>',
  card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  refresh: '<path d="M20 11a8 8 0 00-14.5-4.5L4 8M4 4v4h4M4 13a8 8 0 0014.5 4.5L20 16M20 20v-4h-4"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3M14 9l2 2"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>',
  heart: '<path d="M12 20s-8-4.8-8-10.5A4.5 4.5 0 0112 7a4.5 4.5 0 018 2.5C20 15.2 12 20 12 20z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  coins: '<ellipse cx="9" cy="7" rx="6" ry="3"/><path d="M3 7v4c0 1.7 2.7 3 6 3s6-1.3 6-3V7M3 11v4c0 1.7 2.7 3 6 3 1 0 2-.1 2.8-.4"/><circle cx="17" cy="16" r="5"/>',
  family: '<circle cx="7" cy="7" r="3"/><circle cx="17" cy="7" r="3"/><circle cx="12" cy="14" r="2.5"/><path d="M2 20a5 5 0 0110 0M12 20a5 5 0 0110 0"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 014 0v4M12 10v7"/>',
  network: '<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M12 7.5v4M12 11.5L6.5 17M12 11.5l5.5 5.5"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>',
};
const icon = (name, cls = "") =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;

/* ---------- Industries (mega menu + homepage grid) ---------- */
const INDUSTRIES = [
  { slug: "real-estate", icon: "home", name: "Real Estate & Investors", blurb: "Cost segregation, 1031s, and entity strategy for portfolios of every size." },
  { slug: "medical-dental", icon: "medical", name: "Medical & Dental Practices", blurb: "Owner compensation, practice entities, and buy-in planning for physicians." },
  { slug: "law-firms", icon: "scale", name: "Law Firms", blurb: "Partner draws, multi-state allocations, and K-1 planning for attorneys." },
  { slug: "construction", icon: "hardhat", name: "Construction & Trades", blurb: "Revenue recognition, equipment strategy, and job-level tax planning." },
  { slug: "film-entertainment", icon: "film", name: "Film & Entertainment", blurb: "Georgia production credits, loan-outs, and income for creative pros." },
  { slug: "technology", icon: "cpu", name: "Technology & Startups", blurb: "R&D credits, QSBS, equity compensation, and founder exit planning." },
  { slug: "professional-services", icon: "briefcase", name: "Professional Services", blurb: "Agencies, consultants, and advisors who bill on retainer or by project." },
  { slug: "hospitality", icon: "utensils", name: "Restaurants & Hospitality", blurb: "Tip credits, multi-unit structures, and cash-flow-aware tax planning." },
  { slug: "ecommerce-retail", icon: "store", name: "Ecommerce & Retail", blurb: "Sales-tax nexus, inventory methods, and marketplace seller compliance." },
  { slug: "manufacturing", icon: "factory", name: "Manufacturing & Distribution", blurb: "Inventory costing, bonus depreciation, and credits for producers." },
  { slug: "transportation", icon: "truck", name: "Transportation & Logistics", blurb: "Fleet depreciation, per diem, and multi-state filings for carriers." },
  { slug: "family-offices", icon: "layers", name: "Family Offices & Multi-Entity", blurb: "One coordinated tax model across every entity, trust, and return." },
];

/* ---------- Mega menu content ---------- */
const MENU = [
  {
    label: "Solutions", href: "services.html", type: "solutions",
    groups: [
      { icon: "briefcase", title: "Business Owners", sub: "Turn your largest unknown expense into a plan.", href: "services.html#business",
        links: [
          ["Tax Modeling & Planning", "A living model of this year's liability.", "services.html#tax-modeling"],
          ["Entity & Compensation Strategy", "S-corp, partnership, and owner pay design.", "services.html#entity-strategy"],
          ["Business Return Preparation", "1120, 1120-S, and 1065 filed on time.", "services.html#business-returns"],
          ["Multi-State & Nexus", "Apportionment, PTET elections, and filings.", "services.html#multi-state"],
        ] },
      { icon: "family", title: "Individuals & Families", sub: "Advisory for high-net-worth households.", href: "services.html#individuals",
        links: [
          ["Personal Tax Modeling", "Know your number before you file.", "services.html#personal-modeling"],
          ["Income Tax Return Preparation", "Accurate, automated, and stress-free.", "services.html#return-prep"],
          ["Life-Event Planning", "Sales, moves, marriages, and windfalls.", "services.html#life-events"],
          ["Equity & Investment Income", "RSUs, ISOs, K-1s, and capital gains.", "services.html#equity"],
        ] },
      { icon: "network", title: "Staffing & Recruiting", sub: "Talent solutions that scale with you.", href: "staffing.html",
        links: [
          ["Accounting & Finance Talent", "Controllers, CFOs, and tax professionals.", "staffing.html#accounting"],
          ["Technology Talent", "CIO/CTO, cloud, security, and ERP roles.", "staffing.html#technology"],
          ["Executive Search", "Confidential searches for leadership.", "staffing.html#models"],
        ] },
    ],
    feature: { eyebrow: "The iTxRe Difference", title: "Your tax model, reviewed twice a year.", text: "Business owners and high-net-worth clients meet with us at least twice a year to review a custom tax model — so you're informed before your return is ever filed.", cta: "See how it works", href: "index.html#rhythm" },
  },
  {
    label: "Industries", href: "industries.html", type: "industries",
  },
  {
    label: "Our Firm", href: "about.html", type: "list",
    links: [
      ["users", "Meet the Team", "The CPAs, EAs, and client managers behind your model.", "about.html#team"],
      ["compass", "Our Approach", "Simple process. Better outcomes. Proactive results.", "about.html#approach"],
      ["shield", "Security & Privacy", "How we protect your data and documents.", "about.html#security"],
      ["mail", "Contact Us", "Roswell office, phone, and email.", "contact.html"],
    ],
    feature: { eyebrow: "Who are your bean counters?", title: "Experienced guidance. Familiar faces.", text: "Licensed CPAs, a CFA, and Enrolled Agents — led by partners who know your file.", cta: "Meet the team", href: "about.html#team" },
  },
  {
    label: "Client Center", href: "client-center.html", type: "list",
    links: [
      ["lock", "Client Portal", "Sign in to review documents and returns.", SITE.portalUrl],
      ["upload", "Secure File Upload", "Send tax documents through an encrypted portal.", SITE.uploadUrl],
      ["card", "Make a Payment", "Pay your invoice online, securely.", SITE.payUrl],
      ["calendar", "Key Tax Dates", "Deadlines and estimated payment reminders.", "client-center.html#dates"],
    ],
    feature: { eyebrow: "Existing clients", title: "Everything in one place.", text: "Upload documents, pay invoices, and check what's due next — without a single email attachment.", cta: "Open the client center", href: "client-center.html" },
  },
];

/* ---------- Chalkboard formulas (brand motif from the iTxRe mark) ---------- */
function chalk(seed = 1, density = 1) {
  const f = [
    "TI = AGI − max(Σd, SD)", "Σ (Qᵢ × rᵢ)", "ΔT = T₀ − T*", "∫ cash flow dt", "f(x) = Σ aₙ x ⁿ",
    "Basis + Δ = Gain", "1040 · 1120-S · 1065", "QBI × 20%", "§ 199A", "§ 1031", "§ 179",
    "AGI − ded = TI", "Σ K-1", "√(risk)", "r = 37% → 24%", "ETR ↓", "T* = min T(x)", "PTET", "§ 1202",
  ];
  let s = seed; const rnd = () => (s = (s * 9301 + 49297) % 233280) / 233280;
  const n = Math.round(22 * density);
  let out = "";
  for (let i = 0; i < n; i++) {
    const x = Math.round(rnd() * 1400), y = Math.round(rnd() * 800);
    const size = Math.round(18 + rnd() * 30), rot = Math.round(rnd() * 16 - 8);
    out += `<text x="${x}" y="${y}" font-size="${size}" transform="rotate(${rot} ${x} ${y})">${f[i % f.length]}</text>`;
  }
  return `<svg class="chalk" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${out}</svg>`;
}

/* ---------- Wordmark ---------- */
const wordmark = (cls = "") => `<span class="wordmark ${cls}" aria-label="iTxRe"><span class="i">I</span>T<sup>x</sup>R<sup>e</sup></span>`;

/* ---------- Render header ---------- */
function renderHeader() {
  const here = location.pathname.split("/").pop() || "index.html";
  const isCurrent = (href) => href.split("#")[0] === here ? ' aria-current="page"' : "";

  const megaFor = (m, i) => {
    let main = "";
    if (m.type === "solutions") {
      main = `<div class="mega__cols">${m.groups.map((g) => `
        <div>
          <a class="mega__group-head" href="${g.href}">
            <span class="mega__group-icon">${icon(g.icon)}</span>
            <span><span class="mega__group-title">${g.title}</span><span class="mega__group-sub">${g.sub}</span></span>
          </a>
          ${g.links.map(([t, d, h]) => `<a class="mega__link" href="${h}"><strong>${t}</strong><span>${d}</span></a>`).join("")}
        </div>`).join("")}</div>`;
    } else if (m.type === "industries") {
      main = `<div class="mega__grid">${INDUSTRIES.map((ind) => `
        <a class="mega__link" href="industries.html#${ind.slug}"><i>${icon(ind.icon)}</i><span><strong>${ind.name}</strong><span>${ind.blurb}</span></span></a>`).join("")}</div>
        <div class="mega__foot"><span>Industry expertise — explore the full range of industries iTxRe supports.</span><a class="link-arrow" href="industries.html">Explore all industries ${icon("arrow")}</a></div>`;
    } else {
      main = `<div class="mega__list grid-2 grid" style="gap:6px 30px">${m.links.map(([ic, t, d, h]) => `
        <a class="mega__link" href="${h}"><i>${icon(ic)}</i><span><strong>${t}</strong><span>${d}</span></span></a>`).join("")}</div>`;
    }
    const feat = m.feature || {
      eyebrow: "Industry expertise", title: "Fluent in how your business makes money.",
      text: "Industry-specific tax modeling that reflects how you're paid, how you grow, and how you'll eventually exit.", cta: "Talk to a CPA", href: SITE.consult,
    };
    return `<div class="mega" id="mega-${i}" role="region" aria-label="${m.label}">
      <div class="mega__inner">
        <div class="mega__main">${main}</div>
        <div class="mega__feature">${chalk(i + 3, .5)}
          <span class="eyebrow">${feat.eyebrow}</span><h3>${feat.title}</h3><p>${feat.text}</p>
          <a class="btn btn--sm" href="${feat.href}">${feat.cta} ${icon("arrow")}</a>
        </div>
      </div></div>`;
  };

  const html = `
  <a class="skip-link" href="#main">Skip to main content</a>
  <div class="utility">
    <div class="container">
      <div class="utility__left">
        <a href="${SITE.phoneHref}">${icon("phone")} ${SITE.phone}</a>
        <a href="mailto:${SITE.email}">${icon("mail")} ${SITE.email}</a>
        <a href="${SITE.mapsUrl}" target="_blank" rel="noopener">${icon("pin")} Roswell, Georgia</a>
      </div>
      <div class="utility__right">
        <a href="${SITE.uploadUrl}">${icon("upload")} Upload Files</a>
        <a href="${SITE.payUrl}">${icon("card")} Pay Online</a>
        <a href="${SITE.portalUrl}">${icon("lock")} Client Portal</a>
      </div>
    </div>
  </div>
  <header class="site-header" id="top">
    <div class="container">
      <a class="brand" href="index.html" aria-label="iTxRe home">${wordmark()}<span class="brand__tag">Tax Consulting<br>Planning &amp; Compliance</span></a>
      <nav class="nav" aria-label="Primary">
        ${MENU.map((m, i) => `
          <div class="nav__item" data-mega>
            <button class="nav__link" aria-expanded="false" aria-controls="mega-${i}"${isCurrent(m.href)}>${m.label} ${icon("chevron")}</button>
            ${megaFor(m, i)}
          </div>`).join("")}
        <div class="nav__item"><a class="nav__link" href="staffing.html"${isCurrent("staffing.html")}>Staffing</a></div>
      </nav>
      <a class="btn btn--sm header-cta" href="${SITE.consult}">Schedule a Consultation ${icon("arrow")}</a>
      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav"><span></span></button>
    </div>
  </header>
  <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile">
    <details><summary>Solutions ${icon("chevron")}</summary><ul>
      ${MENU[0].groups.map((g) => `<li><a href="${g.href}"><b>${g.title}</b></a></li>${g.links.map(([t, , h]) => `<li><a href="${h}">— ${t}</a></li>`).join("")}`).join("")}
    </ul></details>
    <details><summary>Industries ${icon("chevron")}</summary><ul>
      ${INDUSTRIES.map((ind) => `<li><a href="industries.html#${ind.slug}">${ind.name}</a></li>`).join("")}
      <li><a href="industries.html"><b>All industries →</b></a></li>
    </ul></details>
    <details><summary>Our Firm ${icon("chevron")}</summary><ul>
      ${MENU[2].links.map(([, t, , h]) => `<li><a href="${h}">${t}</a></li>`).join("")}
    </ul></details>
    <details><summary>Client Center ${icon("chevron")}</summary><ul>
      ${MENU[3].links.map(([, t, , h]) => `<li><a href="${h}">${t}</a></li>`).join("")}
    </ul></details>
    <a class="m-link" href="staffing.html">Staffing &amp; Recruiting</a>
    <a class="btn" href="${SITE.consult}">Schedule a Consultation ${icon("arrow")}</a>
    <div class="mobile-nav__meta"><a href="${SITE.phoneHref}">${SITE.phone}</a><a href="mailto:${SITE.email}">${SITE.email}</a></div>
  </nav>`;
  document.getElementById("site-header").outerHTML = html;
}

/* ---------- Render footer ---------- */
function renderFooter() {
  const year = new Date().getFullYear();
  const html = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          ${wordmark()}
          <p>Income tax consulting, planning, and compliance — simplified. Redefining what it means to be a CPA firm.</p>
          <div class="socials">
            <a href="${SITE.linkedin}" aria-label="LinkedIn" target="_blank" rel="noopener">${icon("linkedin")}</a>
            <a href="mailto:${SITE.email}" aria-label="Email">${icon("mail")}</a>
            <a href="${SITE.phoneHref}" aria-label="Call">${icon("phone")}</a>
          </div>
        </div>
        <div class="footer-col"><h4>Solutions</h4><ul>
          <li><a href="services.html#tax-modeling">Tax Modeling &amp; Planning</a></li>
          <li><a href="services.html#return-prep">Return Preparation</a></li>
          <li><a href="services.html#entity-strategy">Entity Strategy</a></li>
          <li><a href="services.html#life-events">Life-Event Planning</a></li>
          <li><a href="staffing.html">Staffing &amp; Recruiting</a></li>
        </ul></div>
        <div class="footer-col"><h4>Industries</h4><ul>
          ${INDUSTRIES.slice(0, 6).map((i) => `<li><a href="industries.html#${i.slug}">${i.name}</a></li>`).join("")}
        </ul></div>
        <div class="footer-col"><h4>Clients</h4><ul>
          <li><a href="${SITE.portalUrl}">Client Portal</a></li>
          <li><a href="${SITE.uploadUrl}">Upload Files</a></li>
          <li><a href="${SITE.payUrl}">Make a Payment</a></li>
          <li><a href="client-center.html#dates">Key Tax Dates</a></li>
          <li><a href="about.html#team">Meet the Team</a></li>
        </ul></div>
        <div class="footer-col"><h4>Visit</h4><div class="footer-contact">
          <a href="${SITE.mapsUrl}" target="_blank" rel="noopener">${icon("pin")}<span>${SITE.street}<br>${SITE.city}</span></a>
          <a href="${SITE.phoneHref}">${icon("phone")}<span>${SITE.phone}</span></a>
          <a href="mailto:${SITE.email}">${icon("mail")}<span>${SITE.email}</span></a>
          <div>${icon("clock")}<span>${SITE.hours}</span></div>
        </div></div>
      </div>
      <div class="footer-legal">
        <p><strong>Data security.</strong> Client documents are exchanged through encrypted portals. We do not sell, rent, or share client information or mobile numbers with third parties for marketing purposes.</p>
        <p><strong>IRS Circular 230 notice.</strong> Information on this website is for general educational purposes and is not intended or written to be used, and cannot be used, for the purpose of avoiding penalties under the Internal Revenue Code or promoting, marketing, or recommending any transaction or matter. Viewing this site does not create a client relationship.</p>
        <div class="footer-bottom"><span>© ${year} iTxRe. All rights reserved.</span><span><a href="privacy.html">Privacy Policy</a> &nbsp;·&nbsp; <a href="#top">Back to top ↑</a></span></div>
      </div>
    </div>
    <div class="footer-giant" aria-hidden="true">iT<sup>x</sup>R<sup>e</sup></div>
  </footer>`;
  document.getElementById("site-footer").outerHTML = html;
}

/* ---------- Behaviours ---------- */
function initMegaMenus() {
  const items = [...document.querySelectorAll("[data-mega]")];
  const close = (except) => items.forEach((it) => {
    if (it === except) return;
    it.classList.remove("is-open");
    it.querySelector(".nav__link").setAttribute("aria-expanded", "false");
  });
  items.forEach((it) => {
    const btn = it.querySelector(".nav__link");
    let t, openedAt = 0;
    const open = () => { clearTimeout(t); close(it); if (!it.classList.contains("is-open")) openedAt = Date.now(); it.classList.add("is-open"); btn.setAttribute("aria-expanded", "true"); };
    const shut = () => { t = setTimeout(() => { it.classList.remove("is-open"); btn.setAttribute("aria-expanded", "false"); }, 160); };
    it.addEventListener("mouseenter", () => matchMedia("(hover: hover)").matches && open());
    it.addEventListener("mouseleave", () => matchMedia("(hover: hover)").matches && shut());
    // A click right after hover-open shouldn't immediately close the menu
    btn.addEventListener("click", () => (it.classList.contains("is-open") && Date.now() - openedAt > 400 ? (clearTimeout(t), close()) : open()));
    it.addEventListener("focusout", (e) => { if (!it.contains(e.relatedTarget)) shut(); });
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  let lastY = scrollY;
  addEventListener("scroll", () => { if (Math.abs(scrollY - lastY) > 120) { close(); lastY = scrollY; } }, { passive: true });
  addEventListener("scrollend", () => (lastY = scrollY));
  document.addEventListener("click", (e) => { if (!e.target.closest("[data-mega]")) close(); });
}

function initMobileNav() {
  const btn = document.querySelector(".nav-toggle");
  if (!btn) return;
  const panel = document.getElementById("mobile-nav");
  btn.addEventListener("click", () => {
    // Start the panel under the header, whether or not the utility bar is still on screen
    panel.style.top = document.querySelector(".site-header").getBoundingClientRect().bottom + "px";
    const open = document.body.classList.toggle("nav-open");
    btn.setAttribute("aria-expanded", open);
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  document.querySelectorAll(".mobile-nav a").forEach((a) => a.addEventListener("click", () => document.body.classList.remove("nav-open")));
}

function initHeaderScroll() {
  const h = document.querySelector(".site-header");
  const on = () => h.classList.toggle("is-scrolled", scrollY > 50);
  on(); addEventListener("scroll", on, { passive: true });
}

function initReveal() {
  const els = document.querySelectorAll(".reveal, [data-animate]");
  if (!("IntersectionObserver" in window)) return els.forEach((e) => e.classList.add("is-visible"));
  // Anything inside the hero animates in on load instead of waiting for the observer
  requestAnimationFrame(() => document.querySelectorAll(".hero .reveal, .hero [data-animate], .page-hero .reveal").forEach((e) => e.classList.add("is-visible")));
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
  }), { threshold: .12, rootMargin: "0px 0px -40px 0px" });
  els.forEach((e) => io.observe(e));
}

function initLexicon() {
  const defs = [...document.querySelectorAll(".lexicon__def")];
  if (defs.length < 2) return;
  let i = 0;
  setInterval(() => {
    const cur = defs[i]; i = (i + 1) % defs.length; const next = defs[i];
    cur.classList.remove("is-active"); cur.classList.add("is-leaving");
    next.classList.add("is-active");
    setTimeout(() => cur.classList.remove("is-leaving"), 600);
  }, 3000);
}

function initAccordions() {
  document.querySelectorAll(".acc__btn").forEach((b) => b.addEventListener("click", () => {
    b.setAttribute("aria-expanded", b.getAttribute("aria-expanded") !== "true");
  }));
}

function initTabs() {
  document.querySelectorAll("[data-tabs]").forEach((wrap) => {
    const tabs = [...wrap.querySelectorAll('[role="tab"]')];
    const select = (tab) => {
      tabs.forEach((t) => { t.setAttribute("aria-selected", t === tab); t.tabIndex = t === tab ? 0 : -1; document.getElementById(t.getAttribute("aria-controls")).hidden = t !== tab; });
    };
    tabs.forEach((t, idx) => {
      t.addEventListener("click", () => select(t));
      t.addEventListener("keydown", (e) => {
        const k = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
        if (k) { e.preventDefault(); const n = tabs[(idx + k + tabs.length) % tabs.length]; n.focus(); select(n); }
      });
    });
  });
}

function initFilter() {
  document.querySelectorAll("[data-filter]").forEach((wrap) => {
    const grid = document.querySelector(wrap.dataset.filter);
    wrap.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
      wrap.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x === b));
      grid.querySelectorAll("[data-group]").forEach((p) => { p.hidden = b.dataset.value !== "all" && p.dataset.group !== b.dataset.value; });
    }));
  });
}

function initJumpNav() {
  const nav = document.querySelector(".jumpnav");
  if (!nav) return;
  const links = [...nav.querySelectorAll("a")];
  const targets = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (!en.isIntersecting) return;
    links.forEach((a) => {
      const on = a.getAttribute("href") === "#" + en.target.id;
      a.classList.toggle("is-active", on);
      if (on) a.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    });
  }), { rootMargin: "-45% 0px -50% 0px" });
  targets.forEach((t) => io.observe(t));
}

function initForms() {
  document.querySelectorAll("form[data-form]").forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const card = form.closest(".form-card");
      // Until a real endpoint is set (e.g. Formspree), show the success state only.
      if (!form.action.includes("YOUR_FORM_ID")) {
        try { await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } }); } catch (_) {}
      }
      card.classList.add("is-sent");
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
}

/* Fill [data-icon] placeholders and [data-chalk] backgrounds used inside page markup */
function hydrate() {
  document.querySelectorAll("[data-icon]").forEach((el) => { el.innerHTML = icon(el.dataset.icon) + el.innerHTML; });
  document.querySelectorAll("[data-chalk]").forEach((el) => el.insertAdjacentHTML("afterbegin", chalk(+el.dataset.chalk || 1, +el.dataset.density || 1)));
  document.querySelectorAll("[data-industries]").forEach((el) => {
    el.innerHTML = INDUSTRIES.map((ind, i) => `
      <a class="industry reveal" data-delay="${i % 4}" href="industries.html#${ind.slug}">
        <i>${icon(ind.icon)}</i>${icon("arrow", "arrow")}
        <h3>${ind.name}</h3><p>${ind.blurb}</p>
      </a>`).join("");
  });
  document.querySelectorAll("[data-year-next]").forEach((el) => el.textContent = new Date().getFullYear() + 1);
}

/* ---------- Boot ---------- */
renderHeader();
renderFooter();
hydrate();
initMegaMenus();
initMobileNav();
initHeaderScroll();
initReveal();
initLexicon();
initAccordions();
initTabs();
initFilter();
initJumpNav();
initForms();
