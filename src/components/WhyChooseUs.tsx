import { Trophy, CurrencyDollar, Rocket, ArrowsOutSimple, Crosshair, Star } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import whyImg from "@/assets/why-choose.png";

const reasons = [
  { icon: Trophy, title: "Proven Experience", desc: "15+ years of combined industry expertise delivering tested and refined sales systems." },
  { icon: CurrencyDollar, title: "Cost-Effective, High ROI", desc: "Save up to 70% compared to U.S.-based teams while maintaining elite standards." },
  { icon: Rocket, title: "Fast Deployment", desc: "Your remote sales team operational in days, not weeks." },
  { icon: ArrowsOutSimple, title: "Scalable & Flexible", desc: "Easily scale up or down based on growth and demand." },
  { icon: Crosshair, title: "Sales-Only Expertise", desc: "We specialize exclusively in sales outsourcing — nothing else." },
  { icon: Star, title: "Top Filipino Talent", desc: "Highly skilled, performance-driven professionals selected for results." },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="why-us" className="section-padding-lg bg-surface relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03]" style={{ background: "radial-gradient(circle, hsl(163 98% 29%) 0%, transparent 70%)" }} />

      <div ref={ref} className={`container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]">
              <img src={whyImg} alt="Sales Offshore professional" className="w-full h-auto object-cover aspect-[4/3]" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl border-2 border-secondary/20 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-secondary/10 -z-10" />
          </motion.div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="section-label">Why Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-12 tracking-tight leading-tight">
              Why Leading Companies
              <br className="hidden sm:block" />
              Choose <span className="text-gradient">Sales Offshore</span>
            </h2>
            <div className="space-y-6">
              {reasons.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-secondary/8 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-secondary/15 group-hover:scale-105">
                    <r.icon size={20} className="text-secondary" weight="duotone" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary mb-1 tracking-tight">{r.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
