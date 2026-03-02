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
    <section id="why-us" className="relative overflow-hidden py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ background: "hsl(163 98% 29%)" }}>
      <div ref={ref} className={`container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Why Choose Us?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="text-center group"
            >
              <div className="w-24 h-24 rounded-full border-2 border-white/30 flex items-center justify-center mx-auto mb-6 transition-all duration-400 group-hover:border-white/60 group-hover:scale-105">
                <r.icon size={40} className="text-white" weight="light" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{r.title}</h3>
              <p className="text-sm text-white/75 leading-relaxed font-light max-w-xs mx-auto">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
