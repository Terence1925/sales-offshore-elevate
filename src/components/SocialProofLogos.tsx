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
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee w-max">
          {[...logos, ...logos, ...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="mx-6 sm:mx-10 lg:mx-16 flex items-center justify-center opacity-20 hover:opacity-60 transition-all duration-500"
            >
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-primary select-none whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="luxury-divider mt-10 sm:mt-14" />
    </section>
  );
}
