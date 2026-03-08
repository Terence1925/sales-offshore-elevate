const logos = ["Verizon", "HubSpot", "Shopify", "Salesforce", "Slack", "Zoom"];

export default function SocialProofLogos() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 overflow-hidden bg-background relative">
      <div className="luxury-divider mb-10 sm:mb-14" />

      <div className="container-max px-5 sm:px-6 lg:px-8 mb-8 sm:mb-10">
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
            {[...logos, ...logos].map((name, i) => (
              <span
                key={i}
                className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-primary opacity-25 select-none"
              >
                {name}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-12 sm:gap-16 lg:gap-20 animate-marquee whitespace-nowrap" aria-hidden>
            {[...logos, ...logos].map((name, i) => (
              <span
                key={i}
                className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-primary opacity-25 select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="luxury-divider mt-10 sm:mt-14" />
    </section>
  );
}
