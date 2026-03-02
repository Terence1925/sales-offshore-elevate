import { Trophy, CurrencyDollar, Lightning, ArrowsOutSimple, Crosshair, Star } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import whyChooseImg from "@/assets/why-choose.png";

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
    desc: "Get your remote sales team up and running in days, not weeks, so you can focus on scaling.",
  },
  {
    icon: ArrowsOutSimple,
    title: "Scalable & Flexible",
    desc: "From cold calling to lead generation, our scalable services can be customized to meet your unique business needs.",
  },
  {
    icon: Crosshair,
    title: "Sales-Only Expertise",
    desc: "We are the only outsourcing company that specializes exclusively in sales, ensuring deep focus on results.",
  },
  {
    icon: Trophy,
    title: "Top Talent",
    desc: "Access highly skilled, results-driven remote sales professionals selected for exceptional performance.",
  },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="why-us" className="relative overflow-hidden py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ background: "hsl(163 98% 29%)" }}>
      <div ref={ref} className={`container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={whyChooseImg}
                alt="Our professional sales team collaborating"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-14">
              Why Choose Us?
            </h2>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
              {reasons.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group"
                >
                  <div className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center mb-4 transition-all duration-400 group-hover:border-white/60 group-hover:scale-105">
                    <r.icon size={28} className="text-white" weight="light" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{r.title}</h3>
                  <p className="text-[15px] text-white/70 leading-relaxed font-light">{r.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
