import { LinkedinLogo } from "@phosphor-icons/react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#how-we-work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = ["Lead Generation", "Lead Qualification", "Sales Conversion", "Team Management", "Sales Training", "QA & Optimization"];

export default function Footer() {
  return (
    <footer className="relative hero-gradient noise-overlay text-primary-foreground">
      
      <div className="relative">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img src={logo} alt="Sales Offshore" className="h-10 w-10" />
                <span className="text-lg font-bold tracking-tight">Sales Offshore</span>
              </div>
              <p className="text-sm text-primary-foreground/40 leading-relaxed mb-6 font-light">
                Premium outsourced sales solutions for U.S. businesses seeking top Filipino talent and measurable results.
              </p>
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-primary-foreground/20 transition-all duration-300">
                <LinkedinLogo size={18} className="text-primary-foreground/60" />
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-semibold mb-5 tracking-[0.15em] uppercase text-primary-foreground/60">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-primary-foreground/40 hover:text-secondary transition-colors duration-200 font-light">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-semibold mb-5 tracking-[0.15em] uppercase text-primary-foreground/60">Services</h4>
              <ul className="space-y-3">
                {serviceLinks.map((l) => (
                  <li key={l}>
                    <a href="#services" className="text-sm text-primary-foreground/40 hover:text-secondary transition-colors duration-200 font-light">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-semibold mb-5 tracking-[0.15em] uppercase text-primary-foreground/60">Contact</h4>
              <ul className="space-y-3 text-sm text-primary-foreground/40 font-light">
                <li>+1 (617) 272-2261</li>
                <li>info@salesoffshoreph.com</li>
                <li>Mon – Fri, 9 AM – 5 PM ET</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/5">
          <div className="container-max px-4 sm:px-6 lg:px-8 py-7 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/25">
            <p>© 2026 Sales Offshore. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary-foreground/50 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground/50 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
