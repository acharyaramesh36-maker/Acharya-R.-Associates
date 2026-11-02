# Acharya R. & Associates — website

Static site. No build step, no framework.

## Deploy (GitHub → Vercel)
1. Replace the repository contents with everything in this folder (keep `vercel.json` and `.gitignore` at the root).
2. Delete the old `.dc.html` pages and any `.github/workflows` from the repository.
3. Vercel → Project → Settings → Build & Development: Framework **Other**, Build Command **empty**, Output Directory **empty / `.`**.
4. Push. Vercel deploys automatically.

## URLs
- /due-diligence-and-agreed-upon-procedures  ←  Due Diligence and Agreed-Upon Procedures
- /accounting-and-financial-reporting  ←  Accounting and Financial Reporting
- /technology-and-digital-businesses  ←  Technology and Digital Businesses
- /internal-audit-and-risk-advisory  ←  Internal Audit and Risk Advisory
- /cooperatives-and-microfinance  ←  Cooperatives and Microfinance
- /taxation-and-tax-compliance  ←  Taxation and Tax Compliance
- /smes-and-family-businesses  ←  SMEs and Family Businesses
- /manufacturing-and-trading  ←  Manufacturing and Trading
- /students-and-internships  ←  Students and Internships
- /hospitality-and-tourism  ←  Hospitality and Tourism
- /qualified-professionals  ←  Qualified Professionals
- /healthcare-and-medical  ←  Healthcare and Medical
- /audit-and-assurance  ←  Audit and Assurance
- /articled-trainees  ←  Articled Trainees
- /business-advisory  ←  Business Advisory
- /  ←  Acharya Homepage
- /our-commitments  ←  Our Commitments
- /career-enquiry  ←  Career Enquiry
- /contact-us  ←  Contact Us
- /education-and-institutions  ←  Education
- /about-us  ←  About Us
- /our-team  ←  Our Team
- /careers  ←  Careers
- /gallery  ←  Gallery

Old `.dc.html` addresses redirect permanently (301) to the new ones via `vercel.json`.

## Notes
- `MobileNav.dc.html` is the phone/tablet header menu. Keep its exact filename.
- Team photos live in `assets/photos/` and are mapped in `image-slots.json`.
- `AdvertisingRibbon.dc.html` is a component loaded by the homepage, not a page. Keep its exact filename.
- `support.js` must stay at the root next to the pages.
- Links are root-relative (`/about-us`). Preview locally with a server, e.g. `npx serve .`, not by double-clicking files.
