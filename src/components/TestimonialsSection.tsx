import { Quotes } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-team.png";

const stats = [
  { value: "35+", label: "CLIENTS SERVED" },
  { value: "250+", label: "SALES PROFESSIONALS PLACED" },
  { value: "2K+", label: "DEALS CLOSED" },
  { value: "70%", label: "AVERAGE COST SAVINGS" },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="relative overflow-hidden">
      {/* Quote section with background image */}
      <div className="relative min-h-[400px] flex items-center justify-center py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={heroImg} alt="Sales office" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "hsl(203 90% 17% / 0.8)" }} />
        </div>

        <div ref={ref} className={`relative container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-5xl mx-auto">
            {/* Quote icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Quotes size={100} weight="fill" className="text-white/80 flex-shrink-0" />
            </motion.div>

            {/* Quote text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed font-light italic mb-6">
                "Outsourcing sales to the Philippines is more than a trend—it's the future of business growth, driven by top-tier talent and cost efficiency."
              </p>
              <p className="text-sm text-white/60 font-medium">— Sales Offshore Team</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative bg-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container-max px-4 sm:px-6 lg:px-8 -mt-12"
        >
          <div className="bg-card rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)] border border-border/30 py-10 sm:py-12 px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
              {stats.map((s, i) => (
                <div key={i} className="text-center relative">
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2 tracking-tight">{s.value}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground font-semibold tracking-[0.15em] uppercase">{s.label}</p>
                  {i < stats.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        {/* Spacer for the overlapping card */}
        <div className="h-12" />
      </div>
    </section>
  );
}
