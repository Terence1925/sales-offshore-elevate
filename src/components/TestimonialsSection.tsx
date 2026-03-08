import { Quotes, Star } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-team.png";
import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.png";
import { useEffect, useState, useCallback } from "react";
import { useCountUp } from "@/hooks/useCountUp";

const testimonials = [
  {
    img: testimonial1,
    name: "David M.",
    role: "CEO | SaaS Company, CA",
    quote:
      "Outsourcing our sales was a game-changer. We increased qualified leads by 25% while significantly reducing costs. The performance matches U.S.-based teams.",
  },
  {
    img: testimonial2,
    name: "Rebecca W.",
    role: "VP of Sales | E-Commerce Brand, NY",
    quote:
      "Sales Offshore helped us scale rapidly without overspending. Their team integrated seamlessly and delivered exceptional results.",
  },
  {
    img: testimonial3,
    name: "Jason L.",
    role: "Founder & COO | Digital Agency, FL",
    quote:
      "We've improved conversions, reduced costs, and gained a reliable sales engine. The impact on revenue growth has been substantial.",
  },
];

const statsData = [
  { end: 35, suffix: "+", label: "CLIENTS SERVED" },
  { end: 250, suffix: "+", label: "SALES PROFESSIONALS PLACED" },
  { end: 2, suffix: "K+", label: "DEALS CLOSED" },
  { end: 70, suffix: "%", label: "AVERAGE COST SAVINGS" },
];

function AnimatedStat({ end, suffix, label, index }: { end: number; suffix: string; label: string; index: number }) {
  const { ref, display } = useCountUp({ end, suffix, duration: 2200 });

  return (
    <motion.div
      ref={ref}
      className="text-center relative group cursor-pointer"
      whileHover={{ scale: 1.08, y: -4 }}
      whileTap={{ scale: 0.95, rotate: [-1, 1, 0] }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2 tracking-tight transition-colors duration-300 group-hover:text-secondary">
        {display}
      </p>
      <p className="text-[9px] sm:text-[10px] lg:text-xs text-muted-foreground font-semibold tracking-[0.12em] uppercase">
        {label}
      </p>
      {index < statsData.length - 1 && (
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border" />
      )}
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="testimonials" className="relative overflow-hidden">
      {/* Testimonials Carousel */}
      <div className="bg-background py-16 sm:py-24 lg:py-32 px-5 sm:px-6 lg:px-8">
        <div className="container-max">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-3 sm:mb-4">
              TESTIMONIALS
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
              What Our Clients Say
            </h2>
          </div>

          {/* Carousel */}
          <div className="relative max-w-3xl mx-auto">
            <div className="overflow-hidden">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-card rounded-2xl border border-border/40 p-6 sm:p-10 lg:p-12 shadow-sm text-center"
              >
                <div className="flex justify-center gap-1 mb-4 sm:mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} weight="fill" className="text-secondary" />
                  ))}
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8 font-light italic">
                  "{testimonials[current].quote}"
                </p>
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <img
                    src={testimonials[current].img}
                    alt={testimonials[current].name}
                    className="w-11 h-11 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-border"
                  />
                  <div className="text-left">
                    <p className="text-sm sm:text-base font-bold text-foreground">{testimonials[current].name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2.5 mt-6 sm:mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-secondary w-8"
                      : "bg-border hover:bg-muted-foreground/40 w-2.5"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quote section with background image */}
      <div className="relative min-h-[300px] sm:min-h-[400px] flex items-center justify-center py-16 sm:py-24 px-5 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Sales office" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "hsl(203 90% 17% / 0.85)" }} />
        </div>

        <div ref={ref} className={`relative container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-10 lg:gap-16 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Quotes size={60} weight="fill" className="text-secondary/80 flex-shrink-0 sm:hidden" />
              <Quotes size={100} weight="fill" className="text-secondary/80 flex-shrink-0 hidden sm:block" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-lg sm:text-2xl lg:text-3xl text-primary-foreground leading-relaxed font-light italic mb-4 sm:mb-6">
                "Outsourcing sales to the Philippines is more than a trend—it's the future of business growth, driven by top-tier talent and cost efficiency."
              </p>
              <p className="text-xs sm:text-sm text-primary-foreground/60 font-medium">— Sales Offshore Team</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats bar floating up */}
      <div className="relative bg-background">
        <div className="container-max px-5 sm:px-6 lg:px-8 -mt-10 sm:-mt-14">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card rounded-xl sm:rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-border/30 py-8 sm:py-10 lg:py-12 px-5 sm:px-8"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {statsData.map((s, i) => (
                <AnimatedStat key={i} end={s.end} suffix={s.suffix} label={s.label} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
        <div className="h-8 sm:h-12" />
      </div>
    </section>
  );
}
