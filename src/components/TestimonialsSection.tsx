import { Quotes, Star } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-team.png";
import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.png";

const testimonials = [
  {
    img: testimonial1,
    name: "David Chen",
    role: "VP of Sales, TechFlow Inc.",
    quote:
      "Sales Offshore helped us build a 12-person SDR team in under two weeks. Our pipeline grew 3x within the first quarter.",
  },
  {
    img: testimonial2,
    name: "Sarah Mitchell",
    role: "CEO, GrowthPath Solutions",
    quote:
      "The quality of talent exceeded our expectations. We cut costs by 65% and actually improved our conversion rates.",
  },
  {
    img: testimonial3,
    name: "James Rodriguez",
    role: "Head of Revenue, ScaleUp Co.",
    quote:
      "Partnering with Sales Offshore was a game-changer. Their team integrates seamlessly with ours — it's like having an in-house team.",
  },
];

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
      {/* Testimonial cards */}
      <div className="bg-background py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container-max">
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">
              TESTIMONIALS
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="bg-card rounded-2xl border border-border/40 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} weight="fill" className="text-secondary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 font-light italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-border"
                  />
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote section with background image */}
      <div className="relative min-h-[400px] flex items-center justify-center py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Sales office" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "hsl(203 90% 17% / 0.85)" }} />
        </div>

        <div ref={ref} className={`relative container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Quotes size={100} weight="fill" className="text-white/80 flex-shrink-0" />
            </motion.div>

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
        <div className="h-12" />
      </div>
    </section>
  );
}
