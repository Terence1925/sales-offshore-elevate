import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EnvelopeSimple, Phone, MapPin, Clock, PaperPlaneTilt } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const contactInfo = [
  { icon: Clock, title: "Office Hours", text: "Mon – Fri, 9 AM – 5 PM ET" },
  { icon: Phone, title: "Phone", text: "+1 (617) 272-2261" },
  { icon: EnvelopeSimple, title: "Email", text: "info@salesoffshoreph.com" },
  { icon: MapPin, title: "Location", text: "High Street South Corporate Plaza Tower 2, 26th St, BGC, Taguig, Philippines" },
];

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", company: "", message: "" });

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  return (
    <section id="contact" className="section-padding-lg bg-surface relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.02]" style={{ background: "radial-gradient(circle, hsl(163 98% 29%) 0%, transparent 70%)" }} />

      <div ref={ref} className={`container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Contact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
            Get in <span className="text-gradient">Touch</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="card-luxury p-8 sm:p-10">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="text" placeholder="First Name" value={form.firstName} onChange={(e) => update("firstName", e.target.value)} className="input-luxury" />
                  <input type="text" placeholder="Last Name" value={form.lastName} onChange={(e) => update("lastName", e.target.value)} className="input-luxury" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="email" placeholder="Email" value={form.email} onChange={(e) => update("email", e.target.value)} className="input-luxury" />
                  <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="input-luxury" />
                </div>
                <input type="text" placeholder="Company Name" value={form.company} onChange={(e) => update("company", e.target.value)} className="input-luxury" />
                <textarea placeholder="Tell us about your sales goals..." rows={4} value={form.message} onChange={(e) => update("message", e.target.value)} className="input-luxury resize-none" />
                <Button variant="hero" size="lg" className="w-full sm:w-auto group">
                  Send Message
                  <PaperPlaneTilt size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {contactInfo.map((item, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-secondary/8 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-secondary/15 group-hover:scale-105">
                  <item.icon size={20} className="text-secondary" weight="duotone" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-0.5">{item.title}</h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
