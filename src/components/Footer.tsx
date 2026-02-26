import { LinkedinLogo } from "@phosphor-icons/react";
import logo from "@/assets/logo.png";

const quickLinks = ["Home", "Services", "Why Us", "How It Works", "Testimonials", "Contact"];
const serviceLinks = ["Lead Generation", "Lead Qualification", "Sales Conversion", "Team Management", "Sales Training", "QA & Optimization"];

export default function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Sales Offshore" className="h-8 w-8" />
              <span className="text-lg font-bold">Sales Offshore</span>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed mb-4">
              Fast, safe, and professional outsourced sales solutions for U.S. businesses.
            </p>
            <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
              <LinkedinLogo size={20} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l}>
                  <a href="#services" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>+1 (617) 272-2261</li>
              <li>info@salesoffshoreph.com</li>
              <li>Mon – Fri, 9 AM – 5 PM ET</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40">
          <p>© 2026 Sales Offshore. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
