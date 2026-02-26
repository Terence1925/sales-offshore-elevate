import { ClipboardText, UsersThree, UserPlus, Gear, TrendUp, RocketLaunch } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const steps = [
  { icon: ClipboardText, title: "Share Your Requirements", num: "01" },
  { icon: UsersThree, title: "We Source & Recruit Top Talent", num: "02" },
  { icon: UserPlus, title: "Onboard Your Dedicated Team", num: "03" },
  { icon: Gear, title: "We Manage Operations", num: "04" },
  { icon: TrendUp, title: "Scale & Optimize", num: "05" },
  { icon: RocketLaunch, title: "Launch & Drive Results", num: "06" },
];

export default function HowWeWork() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-we-work" className="section-padding-lg bg-background relative">
      <div ref={ref} className={`container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="section-label">Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
            Our Proven <span className="text-gradient">6-Step Process</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative text-center group"
              >
                {/* Step number circle */}
                <div className="relative inline-flex items-center justify-center w-[104px] h-[104px] mb-6">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border border-border/50 group-hover:border-secondary/30 transition-colors duration-500" />
                  {/* Inner circle */}
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:bg-secondary transition-colors duration-500 shadow-lg">
                    <s.icon size={28} className="text-primary-foreground" weight="duotone" />
                  </div>
                </div>

                <span className="block text-xs font-bold text-secondary mb-2 tracking-widest">STEP {s.num}</span>
                <h3 className="text-[15px] font-semibold text-primary tracking-tight">{s.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
