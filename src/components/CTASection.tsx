import { Button } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative overflow-hidden hero-gradient noise-overlay">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-[0.08]" style={{ background: "radial-gradient(ellipse, hsl(163 98% 29%) 0%, transparent 70%)" }} />

      <div ref={ref} className={`relative container-max px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-center fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-foreground mb-4 sm:mb-6 tracking-tight leading-tight">
            Ready to Scale Your Sales Team?
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/50 mb-8 sm:mb-10 max-w-lg mx-auto font-light">
            Book a free 30-minute strategy call and discover how much you can save with dedicated remote sales talent.
          </p>
          <Button variant="hero" size="lg" className="group animate-pulse-glow w-full sm:w-auto" asChild>
            <a href="https://cal.com/sales-offshore/30min" target="_blank" rel="noopener noreferrer">
              Schedule Strategy Call
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <p className="text-[10px] sm:text-xs text-primary-foreground/30 mt-5 sm:mt-6 font-medium">No commitment required · 100% free consultation</p>
        </motion.div>
      </div>
    </section>
  );
}
