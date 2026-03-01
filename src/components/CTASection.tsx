import { Button } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative overflow-hidden cta-gradient noise-overlay">
      
      {/* Emerald glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-[0.08]" style={{ background: "radial-gradient(ellipse, hsl(163 98% 29%) 0%, transparent 70%)" }} />

      <div ref={ref} className={`relative container-max px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-bold text-primary-foreground mb-5 tracking-tight leading-tight">
            Ready to Scale Your
            <br className="hidden sm:block" />
            Sales Team?
          </h2>
          <p className="text-lg text-primary-foreground/50 mb-12 max-w-xl mx-auto font-light">
            Book a free 30-minute strategy call and discover how much you can save with dedicated remote sales talent.
          </p>
          <Button variant="hero" size="xl" className="group animate-pulse-glow" asChild>
            <a href="https://cal.com/sales-offshore/30min" target="_blank" rel="noopener noreferrer">
              Schedule Strategy Call
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <p className="text-xs text-primary-foreground/30 mt-6 font-medium">No commitment required · 100% free consultation</p>
        </motion.div>
      </div>
    </section>
  );
}
