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
    title: "We Source and Recruit Top Talent",
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
    <section id="how-we-work" className="relative overflow-hidden py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 hero-gradient noise-overlay">
      <div ref={ref} className={`relative container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight">
            Hire Outsourced Sales Staff
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-2xl border border-primary-foreground/15 p-8 sm:p-10 group hover:border-secondary/40 transition-all duration-400"
              style={{ background: "hsl(203 80% 22% / 0.5)" }}
            >
              <p className="text-5xl sm:text-6xl font-bold text-primary-foreground/90 mb-6 tracking-tight">{s.num}</p>
              <h3 className="text-base font-bold text-primary-foreground mb-3 tracking-tight">{s.title}</h3>
              <p className="text-sm text-primary-foreground/50 leading-relaxed font-light">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
