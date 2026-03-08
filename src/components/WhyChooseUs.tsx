import { Trophy, CurrencyDollar, Lightning, ArrowsOutSimple, Crosshair, Star } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Star,
    title: "Proven Experience",
    desc: "Our founders bring over 15+ years of industry experience, providing you with innovative sales strategies and effective solutions that are tested, refined, and proven to work.",
  },
  {
    icon: CurrencyDollar,
    title: "Cost-Effective",
    desc: "High ROI. Save up to 70% on operational costs compared to hiring a U.S.-based team, while maintaining the highest standards of quality and performance.",
  },
  {
    icon: Lightning,
    title: "Quick Turnaround",
    desc: "Fast setup. Get your remote sales team up and running in days, not weeks, so you can focus on scaling while we handle the heavy lifting.",
  },
  {
    icon: ArrowsOutSimple,
    title: "Scalable & Flexible",
    desc: "From cold calling to lead generation, our scalable services can be customized to meet your unique business needs, adapting as your company grows.",
  },
  {
    icon: Crosshair,
    title: "Sales-Only Expertise",
    desc: "We are the only outsourcing company that specializes exclusively in sales, ensuring a deep focus on driving results and growth for your business.",
  },
  {
    icon: Trophy,
    title: "Top Talent",
    desc: "Access a pool of highly skilled, results-driven remote sales professionals from the Philippines, selected for their ability to deliver exceptional sales performance.",
  },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="why-us" className="relative overflow-hidden py-16 sm:py-24 lg:py-32 px-5 sm:px-6 lg:px-8 bg-primary">
      <div ref={ref} className={`container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary-foreground">
            Why Choose Us?
          </h2>
          <p className="text-sm sm:text-base text-primary-foreground/70 max-w-md lg:text-right leading-relaxed">
            We offer comprehensive, reliable, and professional sales solutions for every business — ensuring efficiency, scalability, and long-lasting performance.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 * i, duration: 0.5 }}
              className="group rounded-2xl p-6 sm:p-8 flex flex-col cursor-default transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "hsl(0 0% 100% / 0.07)",
                border: "1px solid hsl(0 0% 100% / 0.1)",
              }}
            >
              {/* Icon area */}
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                style={{
                  background: "hsl(0 0% 100% / 0.08)",
                  border: "1px solid hsl(0 0% 100% / 0.12)",
                }}
              >
                <r.icon size={28} className="sm:hidden" weight="light" style={{ color: "hsl(var(--secondary))" }} />
                <r.icon size={32} className="hidden sm:block" weight="light" style={{ color: "hsl(var(--secondary))" }} />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold mb-3 tracking-tight text-primary-foreground">
                {r.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-primary-foreground/65 flex-1">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
