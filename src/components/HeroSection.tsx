import { Button } from "@/components/ui/button";
import { CheckCircle } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-team.png";

const trustPoints = [
  "U.S.-Focused Sales Teams",
  "Fast 7–14 Day Setup",
  "Dedicated Sales Professionals",
];

export default function HeroSection() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-surface -z-10 hidden lg:block rounded-bl-[80px]" />

      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-4">
              Outsourced Sales Agency
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-primary mb-6">
              Home of Top{" "}
              <span className="text-gradient">Remote Sales Talent</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Outsource Your Sales to the Philippines &amp; Save Up to 70% on Costs — Without Compromising Performance.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button variant="hero" size="xl" asChild>
                <a href="https://cal.com/sales-offshore/30min" target="_blank" rel="noopener noreferrer">
                  Book a Strategy Call
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#contact">Get a Custom Quote</a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              {trustPoints.map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={18} weight="fill" className="text-secondary flex-shrink-0" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img src={heroImg} alt="Professional Filipino remote sales team at work" className="w-full h-auto object-cover aspect-[4/3]" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-6 bg-card rounded-xl p-4 shadow-xl border border-border/50">
              <p className="text-2xl font-bold text-primary">70%</p>
              <p className="text-xs text-muted-foreground">Cost Savings</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
