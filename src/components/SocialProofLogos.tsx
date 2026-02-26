const logos = ["Verizon", "HubSpot", "Shopify", "Salesforce", "Slack", "Zoom"];

export default function SocialProofLogos() {
  return (
    <section className="py-10 sm:py-14 border-y border-border/50 bg-surface overflow-hidden">
      <div className="container-max px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted by industry leaders worldwide
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee w-max">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="mx-8 sm:mx-12 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-primary select-none whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
