import { Target, FunnelSimple, Handshake, ChartLineUp, GraduationCap, MagnifyingGlass, UsersThree } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  { icon: Target, title: "Lead Generation", desc: "Targeted outbound campaigns that connect you with high-intent prospects using advanced targeting and personalized outreach." },
  { icon: FunnelSimple, title: "Lead Qualification", desc: "We nurture and qualify leads so only high-converting prospects reach your pipeline." },
  { icon: Handshake, title: "Sales Conversion & Closing", desc: "Experienced sales closers turn qualified leads into long-term, revenue-generating clients." },
  { icon: ChartLineUp, title: "Sales Team Management & Optimization", desc: "Dedicated Sales Managers oversee KPIs, processes, and performance for consistent results." },
  { icon: GraduationCap, title: "Sales Training & Skill Development", desc: "Customized training programs to sharpen prospecting, objection handling, and closing skills." },
  { icon: MagnifyingGlass, title: "Sales QA & Process Optimization", desc: "Call monitoring, CRM audits, and performance reviews to improve efficiency and consistency." },
  { icon: UsersThree, title: "Customer Success & Retention Management", desc: "Reduce churn and increase upsells through structured post-sale engagement." },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding-lg bg-background">
      <div ref={ref} className={`container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Outsourced Sales Solutions Built for Revenue Growth
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            At Sales Offshore, we provide a full spectrum of outsourced sales services designed to help you scale efficiently, increase revenue, and maximize ROI.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <div key={i} className="card-elevated-hover p-6 sm:p-8 group">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                <s.icon size={24} className="text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
