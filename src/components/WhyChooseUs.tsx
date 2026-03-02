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
    <section id="why-us" className="relative overflow-hidden py-16 sm:py-24 lg:py-32 px-5 sm:px-6 lg:px-8" style={{ background: "hsl(163 98% 29%)" }}>
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-[0.08]" style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }} />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }} />

      <div ref={ref} className={`container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={whyChooseImg}
                alt="Our professional sales team collaborating"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-primary">15+</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground font-medium">Years Experience</p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-8 sm:mb-12">
              Why Choose Us?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 sm:gap-y-10">
              {reasons.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ x: 6 }}
                  className="group cursor-default"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-4 transition-all duration-400 group-hover:bg-white/20 group-hover:scale-110 group-hover:rotate-3">
                    <r.icon size={24} className="text-white sm:hidden" weight="duotone" />
                    <r.icon size={28} className="text-white hidden sm:block" weight="duotone" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2 tracking-tight">{r.title}</h3>
                  <p className="text-sm sm:text-[15px] text-white/70 leading-relaxed font-light">{r.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
