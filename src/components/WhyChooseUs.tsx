import { Trophy, CurrencyDollar, Rocket, ArrowsOutSimple, Crosshair, Star } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
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
    <section id="why-us" className="section-padding-lg bg-surface">
      <div ref={ref} className={`container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
            <img src={whyImg} alt="Sales Offshore professional" className="w-full h-auto object-cover aspect-[4/3]" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">Why Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-10">
              Why Leading Companies Choose Sales Offshore
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((r, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <r.icon size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary mb-1">{r.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
