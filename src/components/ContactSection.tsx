import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EnvelopeSimple, Phone, MapPin, Clock } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", company: "", message: "" });

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  return (
    <section id="contact" className="section-padding-lg bg-surface">
      <div ref={ref} className={`container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">Get in Touch</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3 card-elevated p-6 sm:p-8">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text" placeholder="First Name" value={form.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="text" placeholder="Last Name" value={form.lastName}
                  onChange={(e) => update("lastName", e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="email" placeholder="Email" value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="tel" placeholder="Phone Number" value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <input
                type="text" placeholder="Company Name" value={form.company}
                onChange={(e) => update("company", e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <textarea
                placeholder="Message" rows={4} value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
              <Button variant="hero" size="lg" className="w-full sm:w-auto">Send Message</Button>
            </form>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-secondary" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-primary">Office Hours</h4>
                <p className="text-sm text-muted-foreground">Mon – Fri, 9 AM – 5 PM ET</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-secondary" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-primary">Phone</h4>
                <p className="text-sm text-muted-foreground">+1 (617) 272-2261</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <EnvelopeSimple size={20} className="text-secondary" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-primary">Email</h4>
                <p className="text-sm text-muted-foreground">info@salesoffshoreph.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-secondary" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-primary">Location</h4>
                <p className="text-sm text-muted-foreground">High Street South Corporate Plaza Tower 2, 26th St, BGC, Taguig, Philippines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
