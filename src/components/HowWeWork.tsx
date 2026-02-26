import { ClipboardText, UsersThree, UserPlus, Gear, TrendUp, RocketLaunch } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { icon: ClipboardText, title: "Share Your Requirements", num: "01" },
  { icon: UsersThree, title: "We Source & Recruit Top Talent", num: "02" },
  { icon: UserPlus, title: "Onboard Your Dedicated Sales Team", num: "03" },
  { icon: Gear, title: "We Manage Operations", num: "04" },
  { icon: TrendUp, title: "Scale & Optimize", num: "05" },
  { icon: RocketLaunch, title: "Launch & Drive Results", num: "06" },
];

export default function HowWeWork() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-we-work" className="section-padding-lg bg-background">
      <div ref={ref} className={`container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">Process</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Our Proven 6-Step Process
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground mb-5 group-hover:bg-secondary transition-colors duration-300">
                <s.icon size={28} />
              </div>
              <span className="block text-xs font-bold text-secondary mb-2">{s.num}</span>
              <h3 className="text-base font-semibold text-primary">{s.title}</h3>
              {/* Connecting line for desktop */}
              {i < steps.length - 1 && i % 3 !== 2 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
