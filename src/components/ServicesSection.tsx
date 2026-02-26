import { Target, FunnelSimple, Handshake, ChartLineUp, GraduationCap, MagnifyingGlass, UsersThree } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const services = [
  { icon: Target, title: "Lead Generation", desc: "Targeted outbound campaigns that connect you with high-intent prospects using advanced targeting and personalized outreach." },
  { icon: FunnelSimple, title: "Lead Qualification", desc: "We nurture and qualify leads so only high-converting prospects reach your pipeline." },
  { icon: Handshake, title: "Sales Conversion & Closing", desc: "Experienced sales closers turn qualified leads into long-term, revenue-generating clients." },
  { icon: ChartLineUp, title: "Sales Team Management", desc: "Dedicated Sales Managers oversee KPIs, processes, and performance for consistent results." },
  { icon: GraduationCap, title: "Sales Training", desc: "Customized training programs to sharpen prospecting, objection handling, and closing skills." },
  { icon: MagnifyingGlass, title: "Sales QA & Optimization", desc: "Call monitoring, CRM audits, and performance reviews to improve efficiency and consistency." },
  { icon: UsersThree, title: "Customer Success", desc: "Reduce churn and increase upsells through structured post-sale engagement." },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding-lg bg-background relative">
      <div ref={ref} className={`container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="section-label">Our Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-5 tracking-tight">
            Outsourced Sales Solutions
            <br className="hidden sm:block" />
            <span className="text-gradient"> Built for Revenue Growth</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg font-light">
            A full spectrum of outsourced sales services designed to help you scale efficiently, increase revenue, and maximize ROI.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`card-luxury p-7 sm:p-8 group ${i === 6 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/8 flex items-center justify-center mb-6 transition-all duration-400 group-hover:bg-secondary/15 group-hover:scale-110">
                <s.icon size={24} className="text-secondary" weight="duotone" />
              </div>
              <h3 className="text-base font-semibold text-primary mb-2.5 tracking-tight">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
