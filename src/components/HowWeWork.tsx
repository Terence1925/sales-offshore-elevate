import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Share Your Job Requirements",
    desc: "Tell us what you need, from sales roles to skill levels. We'll tailor the search to match your exact goals and business needs.",
  },
  {
    num: "02",
    title: "We Source & Recruit Top Talent",
    desc: "Our recruitment team finds and vets highly skilled sales professionals who align with your company's standards and culture.",
  },
  {
    num: "03",
    title: "Onboard Your Dedicated Sales Staff",
    desc: "We handle all onboarding essentials, ensuring your new team is fully equipped and ready to perform from day one.",
  },
  {
    num: "04",
    title: "We Manage Operations",
    desc: "We oversee day-to-day operations, track performance, and ensure smooth collaboration between your local and remote teams.",
  },
  {
    num: "05",
    title: "Scale & Support Your Team",
    desc: "Easily grow your team or adjust support levels as your business evolves. We make scaling simple and stress-free.",
  },
  {
    num: "06",
    title: "START",
    desc: "Launch your dedicated outsourced sales team and see measurable results that drive your business growth faster than ever.",
  },
];

export default function HowWeWork() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-we-work" className="relative overflow-hidden py-16 sm:py-24 lg:py-32 px-5 sm:px-6 lg:px-8 bg-background">
      <div ref={ref} className={`relative container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="section-label">Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
            Hire Outsourced Sales Staff
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base sm:text-lg font-light">
            Our streamlined 6-step process gets your dedicated sales team up and running fast.
          </p>
        </div>

        {/* Timeline layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:hidden" />

          <div className="space-y-6 sm:space-y-8">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative flex gap-5 sm:gap-8 items-start group"
              >
                {/* Step number circle */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-extrabold text-sm sm:text-base transition-all duration-300 border-2 border-secondary/30 bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:border-secondary"
                  >
                    {s.num}
                  </motion.div>
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="flex-1 rounded-2xl border border-border/40 bg-card p-5 sm:p-7 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-secondary/20"
                >
                  <h3 className="text-base sm:text-lg font-bold text-primary mb-2 tracking-tight">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{s.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
