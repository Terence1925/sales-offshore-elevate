import { useState, useEffect } from "react";
import { Quotes, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import t1 from "@/assets/testimonial-1.png";
import t2 from "@/assets/testimonial-2.png";
import t3 from "@/assets/testimonial-3.png";

const testimonials = [
  {
    img: t1,
    name: "David M.",
    role: "CEO | SaaS Company, CA",
    text: "Outsourcing our sales was a game-changer. We increased qualified leads by 25% while significantly reducing costs. The performance matches U.S.-based teams.",
  },
  {
    img: t2,
    name: "Rebecca W.",
    role: "VP of Sales | E-Commerce Brand, NY",
    text: "Sales Offshore helped us scale rapidly without overspending. Their team integrated seamlessly and delivered exceptional results.",
  },
  {
    img: t3,
    name: "Jason L.",
    role: "Founder & COO | Digital Agency, FL",
    text: "We've improved conversions, reduced costs, and gained a reliable sales engine. The impact on revenue growth has been substantial.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section-padding-lg bg-surface relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-[0.03]" style={{ background: "radial-gradient(circle, hsl(163 98% 29%) 0%, transparent 70%)" }} />

      <div ref={ref} className={`container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-luxury p-10 sm:p-14 lg:p-16 text-center relative">
            {/* Large decorative quote */}
            <Quotes size={64} weight="fill" className="text-secondary/[0.06] mx-auto mb-8" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xl sm:text-2xl text-primary leading-relaxed mb-10 font-light max-w-2xl mx-auto">
                  "{testimonials[current].text}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[current].img}
                    alt={testimonials[current].name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-secondary/20 ring-offset-2 ring-offset-card"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-primary text-sm">{testimonials[current].name}</p>
                    <p className="text-xs text-muted-foreground">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav arrows */}
            <button
              onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-all duration-200 hover:scale-105"
            >
              <CaretLeft size={18} className="text-primary" weight="bold" />
            </button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-all duration-200 hover:scale-105"
            >
              <CaretRight size={18} className="text-primary" weight="bold" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "w-8 h-2.5 bg-secondary" : "w-2.5 h-2.5 bg-border hover:bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
