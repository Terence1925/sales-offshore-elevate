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
    desc: "Fast setup. Get your remote sales team up and running in days, not weeks, so you can focus on scaling while we handle the heavy lifting fast, flawlessly, and built for results.",
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
    <section
      id="why-us"
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32 px-5 sm:px-6 lg:px-8"
      style={{ background: "#F3F5F74C" }}
    >
      <div ref={ref} className={`container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black">Why Choose Us?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="flex flex-col items-center text-center cursor-default group"
            >
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mb-5 sm:mb-6 transition-all duration-400 group-hover:scale-110"
                style={{ border: "2px solid hsl(0 0% 100% / 0.3)", background: "hsl(0 0% 100% / 0.08)" }}
              >
                <r.icon size={36} className="sm:hidden" weight="thin" style={{ color: "hsl(0 0% 100%)" }} />
                <r.icon size={44} className="hidden sm:block" weight="thin" style={{ color: "hsl(0 0% 100%)" }} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 tracking-tight" style={{ color: "hsl(0 0% 100%)" }}>
                {r.title}
              </h3>
              <p
                className="text-sm sm:text-[15px] leading-relaxed font-light max-w-xs"
                style={{ color: "hsl(0 0% 100% / 0.8)" }}
              >
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
