import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { ClipboardText, Users, Briefcase, ChartLineUp, Rocket, Target } from "@phosphor-icons/react";

const steps = [
  {
    icon: ClipboardText,
    title: "Share Your Job Requirements",
    desc: "Tell us what you need, from sales roles to skill levels. We'll tailor the search to match your exact goals and business needs.",
  },
  {
    icon: Users,
    title: "We Source & Recruit Top Talent",
    desc: "Our recruitment team finds and vets highly skilled sales professionals who align with your company's standards and culture.",
  },
  {
    icon: Briefcase,
    title: "Onboard Your Dedicated Sales Staff",
    desc: "We handle all onboarding essentials, ensuring your new team is fully equipped and ready to perform from day one.",
  },
  {
    icon: ChartLineUp,
    title: "We Manage Operations",
    desc: "We oversee day-to-day operations, track performance, and ensure smooth collaboration between your local and remote teams.",
  },
  {
    icon: Target,
    title: "Scale & Support Your Team",
    desc: "Easily grow your team or adjust support levels as your business evolves. We make scaling simple and stress-free.",
  },
  {
    icon: Rocket,
    title: "Launch & Optimize",
    desc: "Launch your dedicated outsourced sales team and see measurable results that drive your business growth faster than ever.",
  },
];

export default function HowWeWork() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-we-work" className="relative overflow-hidden py-16 sm:py-24 lg:py-32 px-5 sm:px-6 lg:px-8 bg-muted/30">
      <div ref={ref} className={`relative container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side — sticky heading */}
          <div className="lg:sticky lg:top-32">
            <span className="section-label">Our Process</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight mt-3">
              Hire Outsourced Sales Staff
            </h2>
            <p className="text-muted-foreground mt-5 max-w-md text-base sm:text-lg font-light leading-relaxed">
              We turn your staffing needs into scalable solutions that drive sustainable growth.
            </p>
          </div>

          {/* Right side — stacked cards */}
          <div className="space-y-4">
            {steps.map((s, i) => {
              const isLast = i === steps.length - 1;
              const Icon = s.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className={`rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                    isLast
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-card border border-border/50 hover:border-secondary/20 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isLast
                          ? "bg-secondary-foreground/15"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      <Icon size={22} weight="bold" />
                    </div>
                    <h3 className={`text-lg sm:text-xl font-bold tracking-tight ${isLast ? "" : "text-primary"}`}>
                      {s.title}
                    </h3>
                  </div>
                  <p
                    className={`text-sm leading-relaxed font-light pl-[3.75rem] ${
                      isLast ? "text-secondary-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    {s.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
