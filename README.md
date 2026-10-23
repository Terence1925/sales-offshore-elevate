# Sales Offshore: Company Website

The marketing and lead-generation website for **Sales Offshore**, an outsourced sales-staffing agency in the Philippines that serves U.S. businesses. The page has one job: turn a visitor into a booked strategy call.

**Live site:** https://www.salesoffshoreph.com

**Stack:** React · TypeScript · Vite · Tailwind CSS · Radix UI · Vitest

![Sales Offshore home page](docs/screenshot.jpg)

## What is on the page

| Section | What it does |
|---|---|
| **Hero** | States the offer in one line, with two calls to action: book a strategy call, or get a custom quote. |
| **Why choose us** | Six short benefits: experience, cost savings, fast setup, flexibility, a sales-only focus, and top talent. |
| **Services** | What the agency does, from lead generation to closing deals and customer success. |
| **How we work** | A five-step process, from sharing job requirements to launching the team. |
| **Social proof** | A "trusted by" strip, a testimonial and animated number counters. |
| **FAQ** | An accordion that answers the common questions about setup time, quality and pricing. |
| **Contact** | Office hours, address, phone, email and the booking call to action. |

The layout is fully responsive, and the page links to a Privacy Policy and Terms.

## Run it locally

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build in dist/
npm test         # run the tests (Vitest)
```

## Project layout

```
src/components   one file per page section (HeroSection, WhyChooseUs, ServicesSection, HowWeWork, ...)
src/components/ui  shared interface pieces (buttons, accordion, dialogs)
src/pages        the pages of the site
src/test         tests
public/          static files
```

Built by [Terence](https://github.com/Terence1925). Hosted on Hostinger.
