import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const faqs = [
  { q: "How quickly can we get started?", a: "We can have your dedicated remote sales team operational within 7–14 business days. Our streamlined onboarding process ensures a fast, seamless setup so you can start generating results quickly." },
  { q: "How do you ensure sales quality and performance?", a: "We implement rigorous QA processes including call monitoring, CRM audits, KPI tracking, and regular performance reviews. Every team member is trained to meet your specific standards and targets." },
  { q: "What industries do you specialize in?", a: "We work across SaaS, e-commerce, fintech, healthcare, real estate, and professional services. Our sales professionals are adaptable and trained to understand your specific market and buyers." },
  { q: "How much can we realistically save?", a: "Most clients save 50–70% compared to hiring U.S.-based sales teams, without sacrificing quality. We provide transparent pricing so you know exactly what you're investing." },
  { q: "Are the sales reps dedicated to our company?", a: "Yes, absolutely. Every sales professional is 100% dedicated to your account. They work exclusively for your company, follow your processes, and become an extension of your internal team." },
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32 px-5 sm:px-6 lg:px-8 bg-background">
      <div ref={ref} className={`container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="section-label">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <AccordionItem value={`item-${i}`} className="card-luxury px-5 sm:px-7 py-1 border-none">
                  <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-semibold text-primary hover:no-underline py-4 sm:py-5 tracking-tight">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4 sm:pb-5 font-light text-sm">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
