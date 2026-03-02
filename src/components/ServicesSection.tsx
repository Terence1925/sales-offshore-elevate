import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "@phosphor-icons/react";

const services = [
  { title: "LEAD GENERATION", desc: "Targeted outbound campaigns that connect you with high-intent prospects using advanced targeting and personalized outreach strategies.", tag: "Most Popular" },
  { title: "LEAD QUALIFICATION", desc: "We nurture and qualify leads so only high-converting prospects reach your pipeline, saving your team time and effort.", tag: null },
  { title: "SALES CONVERSION & DEAL CLOSING", desc: "Experienced sales closers turn qualified leads into long-term, revenue-generating clients.", tag: null },
  { title: "SALES TEAM MANAGEMENT & OPTIMIZATION", desc: "Dedicated Sales Managers oversee KPIs, processes, and performance for consistent results.", tag: null },
  { title: "SALES TRAINING & SKILL DEVELOPMENT", desc: "Customized training programs to sharpen prospecting, objection handling, and closing skills.", tag: null },
  { title: "SALES QA & PROCESS OPTIMIZATION", desc: "Call monitoring, CRM audits, and performance reviews to improve efficiency and consistency.", tag: null },
  { title: "CUSTOMER SUCCESS & RETENTION MANAGEMENT", desc: "Reduce churn and increase upsells through structured post-sale engagement.", tag: "High Impact" },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 px-5 sm:px-6 lg:px-8 bg-background relative">
      <div ref={ref} className={`container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <div className="text-center mb-10 sm:mb-16">
          <span className="section-label">Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
            What We Offer
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-16 items-start">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4 tracking-tight">
              Sales Services
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light mb-6">
              At Sales Offshore, we offer a full spectrum of outsourced sales services to help you maximize revenue and reach your targets:
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:gap-3 transition-all duration-300">
              Get started today <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Right - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <Accordion type="single" collapsible>
              {services.map((s, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/50 px-0">
                  <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-primary hover:no-underline py-4 sm:py-5 tracking-wide group">
                    <span className="flex items-center gap-3">
                      {s.title}
                      {s.tag && (
                        <span className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-secondary/10 text-secondary">
                          {s.tag}
                        </span>
                      )}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4 sm:pb-5 font-light text-sm">
                    {s.desc}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
