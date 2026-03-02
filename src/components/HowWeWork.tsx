import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Share Your Job Requirements",
    desc: "Tell us what you need, from sales roles to skill levels. We'll tailor the search to match your exact goals.",
    image: "/images/grid-3.jpg",
  },
  {
    num: "02",
    title: "We Source & Recruit Top Talent",
    desc: "Our team finds and vets highly skilled sales professionals who align with your company's standards.",
    image: null,
  },
  {
    num: "03",
    title: "Onboard Your Dedicated Sales Staff",
    desc: "We handle all onboarding essentials, ensuring your new team is fully equipped from day one.",
    image: "/images/grid-5.jpg",
  },
  {
    num: "04",
    title: "We Manage Operations",
    desc: "We oversee day-to-day operations, track performance, and ensure smooth collaboration.",
    image: null,
  },
  {
    num: "05",
    title: "Scale & Support Your Team",
    desc: "Easily grow your team or adjust support levels as your business evolves.",
    image: null,
  },
  {
    num: "06",
    title: "START",
    desc: "Launch your outsourced sales team and see measurable results that drive growth.",
    image: "/images/grid-6.jpg",
  },
];

export default function HowWeWork() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-we-work" className="relative overflow-hidden py-16 sm:py-24 lg:py-32 px-5 sm:px-6 lg:px-8 hero-gradient noise-overlay">
      <div ref={ref} className={`relative container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-3">OUR PROCESS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground tracking-tight">
            Hire Outsourced Sales Staff
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-2xl border border-primary-foreground/15 group hover:border-secondary/50 transition-all duration-400 cursor-default relative overflow-hidden"
              style={{ background: "hsl(203 80% 22% / 0.5)" }}
            >
              {/* Optional image at top */}
              {s.image && (
                <div className="h-32 sm:h-40 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(203_80%_22%/0.9)]" style={{ top: '40%' }} />
                </div>
              )}
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(circle at 50% 0%, hsl(163 98% 29% / 0.08), transparent 60%)" }} />
              
              <div className="relative p-6 sm:p-8">
                <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold stat-number mb-3 sm:mb-4 tracking-tight opacity-80 group-hover:opacity-100 transition-opacity">{s.num}</p>
                <h3 className="text-base sm:text-lg font-bold text-primary-foreground mb-2 tracking-tight">{s.title}</h3>
                <p className="text-sm text-primary-foreground/50 leading-relaxed font-light">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
