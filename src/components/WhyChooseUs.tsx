import { Trophy, CurrencyDollar, Lightning, ArrowsOutSimple, Crosshair, Star } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Star,
    title: "Proven Experience",
    desc: "Our founders bring over 15+ years of industry experience, providing you with innovative sales strategies and effective solutions.",
  },
  {
    icon: CurrencyDollar,
    title: "Cost-Effective",
    desc: "Save up to 70% on operational costs compared to hiring a U.S.-based team, while maintaining the highest standards.",
  },
  {
    icon: Lightning,
    title: "Quick Turnaround",
    desc: "Get your remote sales team up and running in days, not weeks, so you can focus on scaling your business.",
  },
  {
    icon: ArrowsOutSimple,
    title: "Scalable & Flexible",
    desc: "Our scalable services can be customized to meet your unique business needs, adapting as your company grows.",
  },
  {
    icon: Crosshair,
    title: "Sales-Only Expertise",
    desc: "We specialize exclusively in sales, ensuring a deep focus on driving results and growth for your business.",
  },
  {
    icon: Trophy,
    title: "Top Talent",
    desc: "Access highly skilled, results-driven remote sales professionals selected for exceptional sales performance.",
  },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="why-us" className="relative overflow-hidden py-16 sm:py-24 lg:py-32 px-5 sm:px-6 lg:px-8 bg-background">
      <div ref={ref} className={`container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
        {/* Header with description */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12 sm:mb-16 lg:mb-20">
          <div>
            <span className="section-label">Why Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
              Why Choose Us?
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm sm:text-base font-light leading-relaxed lg:text-right">
            We offer comprehensive, reliable, and professional outsourced sales solutions — ensuring quality, efficiency, and long-lasting performance.
          </p>
        </div>

        {/* Card grid - electrician style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.5 }}
              className="group rounded-2xl border border-border/50 bg-card p-6 sm:p-8 transition-all duration-400 hover:border-secondary/30 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-muted flex items-center justify-center mb-5 sm:mb-6 transition-all duration-300 group-hover:bg-secondary/10">
                <r.icon size={28} className="text-secondary sm:hidden" weight="light" />
                <r.icon size={32} className="text-secondary hidden sm:block" weight="light" />
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-primary mb-2.5 tracking-tight">{r.title}</h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
