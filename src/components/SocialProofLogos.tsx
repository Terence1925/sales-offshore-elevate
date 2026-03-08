const logos = [
  { name: "Verizon", svg: "M15.5 3l-7 14L5 10.5" },
  { name: "HubSpot", svg: null },
  { name: "Shopify", svg: null },
  { name: "Salesforce", svg: null },
  { name: "Slack", svg: null },
  { name: "Zoom", svg: null },
];

export default function SocialProofLogos() {
  return (
    <section className="py-10 sm:py-14 lg:py-16 overflow-hidden bg-background relative">
      <div className="luxury-divider mb-8 sm:mb-10" />

      <div className="container-max px-5 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <p className="text-center text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
          Trusted by teams at
        </p>
      </div>

      {/* Marquee logos */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex overflow-hidden">
          <div className="flex items-center gap-12 sm:gap-16 lg:gap-20 animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((l, i) => (
              <div key={i} className="flex items-center gap-2 opacity-30 hover:opacity-60 transition-opacity">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l3 3 5-5" />
                </svg>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-primary select-none">
                  {l.name}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-12 sm:gap-16 lg:gap-20 animate-marquee whitespace-nowrap" aria-hidden>
            {[...logos, ...logos].map((l, i) => (
              <div key={i} className="flex items-center gap-2 opacity-30 hover:opacity-60 transition-opacity">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l3 3 5-5" />
                </svg>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-primary select-none">
                  {l.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="luxury-divider mt-8 sm:mt-10" />
    </section>
  );
}
