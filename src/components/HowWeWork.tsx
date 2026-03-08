import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { ClipboardText, Users, Handshake, GearSix, TrendUp, RocketLaunch } from "@phosphor-icons/react";

const steps = [
  {
    icon: ClipboardText,
    title: "Share Your Job Requirements",
    desc: "Tell us what you need, from sales roles to skill levels. We'll tailor the search to match your exact goals.",
  },
  {
    icon: Users,
    title: "We Source & Recruit Top Talent",
    desc: "Our recruitment team finds and vets highly skilled sales professionals who align with your standards.",
  },
  {
    icon: Handshake,
    title: "Onboard Your Dedicated Sales Staff",
    desc: "We handle all onboarding essentials, ensuring your new team is fully equipped and ready from day one.",
  },
  {
    icon: GearSix,
    title: "We Manage Operations",
    desc: "We oversee day-to-day operations, track performance, and ensure smooth collaboration.",
  },
  {
    icon: TrendUp,
    title: "Scale & Support Your Team",
    desc: "Easily grow your team or adjust support levels as your business evolves.",
  },
  {
    icon: RocketLaunch,
    title: "START",
    desc: "Launch your dedicated outsourced sales team and see measurable results that drive growth.",
    highlighted: true,
  },
];

export default function HowWeWork() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-we-work" className="relative overflow-hidden py-16 sm:py-24 lg:py-32 px-5 sm:px-6 lg:px-8 bg-muted">
      <div ref={ref} className={`relative container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left - Sticky heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <span className="section-label">Process</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight mb-4 sm:mb-6">
              Hire Outsourced Sales Staff
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed max-w-md">
              Our streamlined 6-step process gets your dedicated sales team up and running fast.
            </p>
          </motion.div>

          {/* Right - Stacked cards */}
          <div className="space-y-4 sm:space-y-5">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`rounded-2xl p-5 sm:p-7 transition-all duration-300 ${
                  s.highlighted
                    ? "bg-secondary text-secondary-foreground shadow-lg"
                    : "bg-card border border-border/40 hover:border-secondary/20 hover:shadow-md"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    s.highlighted ? "bg-secondary-foreground/15" : "bg-muted"
                  }`}>
                    <s.icon size={24} weight="duotone" className={s.highlighted ? "text-secondary-foreground" : "text-secondary"} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-base sm:text-lg font-bold mb-1.5 tracking-tight ${
                      s.highlighted ? "text-secondary-foreground" : "text-primary"
                    }`}>
                      {s.title}
                    </h3>
                    <p className={`text-sm leading-relaxed font-light ${
                      s.highlighted ? "text-secondary-foreground/80" : "text-muted-foreground"
                    }`}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
