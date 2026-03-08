import { Button } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-team.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-background">
      {/* Left content - 50% */}
      <div className="relative w-full lg:w-1/2 px-5 sm:px-6 lg:px-12 xl:px-20 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:py-0 min-h-[100svh] flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight text-primary mb-5 sm:mb-6">
            Home of Top{" "}
            <br />
            <span className="text-gradient">Remote Sales</span>
            <br />
            <span className="text-gradient">Talent</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-accent leading-relaxed mb-8 sm:mb-10 max-w-md font-medium">
            Outsource Your Sales to the Philippines
            <br />
            & Save up to 70% on Costs
          </p>

          <Button variant="hero" size="lg" className="group w-full sm:w-auto" asChild>
            <a href="#contact">
              CONTACT US
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Right image - 50% edge to edge */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        className="hidden lg:block absolute top-0 right-0 w-1/2 h-full"
      >
        <img
          src={heroImg}
          alt="Professional Filipino remote sales team at work"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Mobile image */}
      <div className="lg:hidden absolute inset-0 -z-10">
        <img src={heroImg} alt="" className="w-full h-full object-cover opacity-10" />
      </div>
    </section>
  );
}
