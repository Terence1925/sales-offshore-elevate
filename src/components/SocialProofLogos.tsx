const logos = ["Verizon", "HubSpot", "Shopify", "Salesforce", "Slack", "Zoom"];

export default function SocialProofLogos() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 overflow-hidden bg-background relative">
      <div className="luxury-divider mb-10 sm:mb-14" />

      {/* #1 Badge */}
      <div className="container-max px-5 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-secondary/30 bg-secondary/5">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-[10px] sm:text-xs font-semibold text-secondary tracking-wide">
              #1 Outsourced Sales Agency in the Philippines
            </span>
          </div>
        </div>
      </div>

      <div className="container-max px-5 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <p className="text-center text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
          Trusted by teams at
        </p>
      </div>

      {/* Logo grid instead of marquee */}
      <div className="container-max px-5 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {logos.map((name, i) => (
            <div
              key={i}
              className="flex items-center justify-center opacity-25 hover:opacity-60 transition-all duration-500"
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
