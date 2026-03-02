import { Trophy, CurrencyDollar, Lightning, ArrowsOutSimple, Crosshair, Star } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import whyChooseImg from "@/assets/why-choose.png";

const reasons = [
  {
    icon: Star,
    title: "Proven Experience",
    desc: "15+ years of industry experience with innovative sales strategies and effective solutions.",
  },
  {
    icon: CurrencyDollar,
    title: "Cost-Effective",
    desc: "Save up to 70% on operational costs compared to hiring a U.S.-based team.",
  },
  {
    icon: Lightning,
    title: "Quick Turnaround",
    desc: "Get your remote sales team up and running in days, not weeks.",
  },
  {
    icon: ArrowsOutSimple,
    title: "Scalable & Flexible",
    desc: "Customizable services from cold calling to lead generation to meet your needs.",
  },
  {
    icon: Crosshair,
    title: "Sales-Only Expertise",
    desc: "The only outsourcing company that specializes exclusively in sales.",
  },
  {
    icon: Trophy,
    title: "Top Talent",
    desc: "Highly skilled, results-driven remote sales professionals selected for performance.",
  },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="why-us" className="relative overflow-hidden py-16 sm:py-24 lg:py-32 px-5 sm:px-6 lg:px-8 bg-background">
      <div ref={ref} className={`container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="section-label">Why Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Why Choose Sales Offshore?
          </h2>
        </div>

        {/* Bento-style layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {/* Large image card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:row-span-2 rounded-2xl sm:rounded-3xl overflow-hidden relative group"
          >
            <img
              src={whyChooseImg}
              alt="Professional sales team collaborating"
              className="w-full h-full object-cover min-h-[300px] lg:min-h-full transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-4xl sm:text-5xl font-extrabold text-primary-foreground mb-1">15+</p>
                <p className="text-sm text-primary-foreground/70 font-medium">Years of Industry Experience</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Reason cards */}
          {reasons.slice(0, 2).map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (i + 1), duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="card-luxury p-6 sm:p-8 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 transition-all duration-400 group-hover:bg-secondary/20 group-hover:scale-110">
                <r.icon size={24} className="text-secondary" weight="duotone" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 tracking-tight">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{r.desc}</p>
            </motion.div>
          ))}

          {/* Remaining 4 cards */}
          {reasons.slice(2).map((r, i) => (
            <motion.div
              key={i + 2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (i + 3), duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="card-luxury p-6 sm:p-8 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 transition-all duration-400 group-hover:bg-secondary/20 group-hover:scale-110">
                <r.icon size={24} className="text-secondary" weight="duotone" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 tracking-tight">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
