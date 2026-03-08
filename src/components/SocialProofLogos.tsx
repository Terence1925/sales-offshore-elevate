const logos = [
  {
    name: "Verizon",
    svg: (
      <svg viewBox="0 0 120 30" className="h-6 sm:h-7 w-auto" fill="currentColor">
        <path d="M18.2 0L9.1 18.2 4.6 9.1H0l9.1 18.2L27.3 0h-9.1z" />
        <text x="32" y="22" fontSize="18" fontWeight="700" fontFamily="Arial, sans-serif">verizon</text>
      </svg>
    ),
  },
  {
    name: "HubSpot",
    svg: (
      <svg viewBox="0 0 100 30" className="h-6 sm:h-7 w-auto" fill="currentColor">
        <circle cx="12" cy="15" r="8" fillOpacity="0.8" />
        <text x="24" y="22" fontSize="18" fontWeight="700" fontFamily="Arial, sans-serif">HubSpot</text>
      </svg>
    ),
  },
  {
    name: "Shopify",
    svg: (
      <svg viewBox="0 0 100 30" className="h-6 sm:h-7 w-auto" fill="currentColor">
        <path d="M12 2l3 8h8l-6.5 5 2.5 8L12 18l-7 5 2.5-8L1 10h8z" />
        <text x="24" y="22" fontSize="18" fontWeight="700" fontFamily="Arial, sans-serif">Shopify</text>
      </svg>
    ),
  },
  {
    name: "Salesforce",
    svg: (
      <svg viewBox="0 0 120 30" className="h-6 sm:h-7 w-auto" fill="currentColor">
        <path d="M6 18c0-5 4-9 9-9 3 0 5.5 1.5 7 3.5 1.2-1 2.8-1.5 4.5-1.5 4 0 7 3 7 7s-3 7-7 7H10c-4 0-7-3-7-7h3z" fillOpacity="0.8" />
        <text x="38" y="22" fontSize="14" fontWeight="700" fontFamily="Arial, sans-serif">salesforce</text>
      </svg>
    ),
  },
  {
    name: "Slack",
    svg: (
      <svg viewBox="0 0 80 30" className="h-6 sm:h-7 w-auto" fill="currentColor">
        <rect x="2" y="10" width="6" height="6" rx="2" fillOpacity="0.9" />
        <rect x="10" y="10" width="6" height="6" rx="2" fillOpacity="0.7" />
        <rect x="2" y="18" width="6" height="6" rx="2" fillOpacity="0.7" />
        <rect x="10" y="18" width="6" height="6" rx="2" fillOpacity="0.9" />
        <text x="22" y="22" fontSize="18" fontWeight="700" fontFamily="Arial, sans-serif">Slack</text>
      </svg>
    ),
  },
  {
    name: "Zoom",
    svg: (
      <svg viewBox="0 0 80 30" className="h-6 sm:h-7 w-auto" fill="currentColor">
        <rect x="2" y="8" width="16" height="14" rx="3" fillOpacity="0.8" />
        <path d="M20 11l6-3v14l-6-3z" fillOpacity="0.8" />
        <text x="30" y="22" fontSize="18" fontWeight="700" fontFamily="Arial, sans-serif">Zoom</text>
      </svg>
    ),
  },
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
              <div key={i} className="flex items-center opacity-25 hover:opacity-50 transition-opacity text-primary">
                {l.svg}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-12 sm:gap-16 lg:gap-20 animate-marquee whitespace-nowrap" aria-hidden>
            {[...logos, ...logos].map((l, i) => (
              <div key={i} className="flex items-center opacity-25 hover:opacity-50 transition-opacity text-primary">
                {l.svg}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="luxury-divider mt-8 sm:mt-10" />
    </section>
  );
}
