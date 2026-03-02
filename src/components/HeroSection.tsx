import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-team.png";

const trustPoints = [
  "U.S.-Focused Sales Teams",
  "Fast 7–14 Day Setup",
  "Dedicated Sales Professionals",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden hero-gradient noise-overlay">
      <div className="absolute inset-0 hero-gradient-overlay" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07]" style={{ background: "radial-gradient(circle, hsl(163 98% 29%) 0%, transparent 70%)" }} />

      <div className="relative container-max px-5 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm mb-6 sm:mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-[10px] sm:text-xs font-medium text-primary-foreground/80 tracking-wide">
                #1 Outsourced Sales Agency in the Philippines
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight text-primary-foreground mb-5 sm:mb-8">
              Home of Top{" "}
              <span className="relative inline-block">
                <span className="text-gradient">Remote Sales</span>
              </span>
              <br />
              <span className="text-gradient">Talent</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/60 leading-relaxed mb-8 sm:mb-10 max-w-xl font-light">
              Outsource your sales to the Philippines &amp; save up to 70% on costs — without compromising performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
              <Button variant="hero" size="lg" className="group w-full sm:w-auto" asChild>
                <a href="https://cal.com/sales-offshore/30min" target="_blank" rel="noopener noreferrer">
                  Book a Strategy Call
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 border border-primary-foreground/10 w-full sm:w-auto"
                asChild
              >
                <a href="#contact">
                  Get a Custom Quote
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              {trustPoints.map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle size={16} weight="fill" className="text-secondary flex-shrink-0" />
                  <span className="text-xs sm:text-[13px] text-primary-foreground/50 font-medium">{t}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="relative order-first lg:order-last max-w-xs sm:max-w-sm lg:max-w-md mx-auto hidden sm:block"
          >
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden ring-1 ring-primary-foreground/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
              <img src={heroImg} alt="Professional Filipino remote sales team at work" className="w-full h-auto object-cover aspect-[4/5]" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
