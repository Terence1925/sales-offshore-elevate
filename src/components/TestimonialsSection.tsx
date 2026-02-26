import { useState, useEffect } from "react";
import { Quotes, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
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
    <section id="testimonials" className="section-padding-lg bg-surface">
      <div ref={ref} className={`container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">What Our Clients Say</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card-elevated p-8 sm:p-12 text-center relative">
            <Quotes size={40} weight="fill" className="text-secondary/20 mx-auto mb-6" />
            <p className="text-lg sm:text-xl text-primary leading-relaxed mb-8 italic">
              "{testimonials[current].text}"
            </p>
            <img src={testimonials[current].img} alt={testimonials[current].name} className="w-14 h-14 rounded-full object-cover mx-auto mb-3" />
            <p className="font-semibold text-primary">{testimonials[current].name}</p>
            <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>

            {/* Nav arrows */}
            <button
              onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-border transition-colors"
            >
              <CaretLeft size={18} className="text-primary" />
            </button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-border transition-colors"
            >
              <CaretRight size={18} className="text-primary" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-secondary" : "bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
