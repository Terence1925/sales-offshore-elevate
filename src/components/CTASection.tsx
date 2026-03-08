import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative overflow-hidden bg-primary">
      <div ref={ref} className={`relative container-max px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
        >
          {/* Left text */}
          <div className="text-center lg:text-left max-w-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-foreground mb-3 sm:mb-4 tracking-tight leading-tight">
              Ready to Scale Your Sales Team?
            </h2>
            <p className="text-sm sm:text-base text-primary-foreground/60 font-light leading-relaxed">
              Contact us to discover how our outsourced sales services can help you generate leads, close deals, and retain customers!
            </p>
          </div>

          {/* Right CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-shrink-0">
            <Button variant="hero" size="lg" className="group w-full sm:w-auto" asChild>
              <a href="https://cal.com/sales-offshore/30min" target="_blank" rel="noopener noreferrer">
                <Phone size={18} weight="fill" />
                Book a Call
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 border border-primary-foreground/20 w-full sm:w-auto"
              asChild
            >
              <a href="#contact">
                Contact Us
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
