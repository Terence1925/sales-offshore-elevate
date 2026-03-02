import { Clock, MapPin, Phone, EnvelopeSimple, LinkedinLogo, FacebookLogo, InstagramLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const footerItems = [
  { icon: Clock, title: "Office Hours", text: "Mon - Fri, 9 am - 5 pm ET" },
  { icon: MapPin, title: "Location", text: "High Street South Corporate Plaza Tower 2, 26th St, BGC, Taguig, Philippines" },
  { icon: Phone, title: "Call Us", text: "+1 (617) 272 2261" },
  { icon: EnvelopeSimple, title: "Email", text: "info@salesoffshoreph.com" },
];

export default function Footer() {
  return (
    <footer className="relative hero-gradient noise-overlay text-primary-foreground">
      <div className="relative">
        <div className="container-max px-5 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8 text-center">
            {footerItems.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <item.icon size={24} className="text-primary-foreground/80 mb-3 sm:mb-4 sm:hidden" weight="light" />
                <item.icon size={28} className="text-primary-foreground/80 mb-3 sm:mb-4 hidden sm:block" weight="light" />
                <h4 className="text-xs sm:text-sm font-semibold text-primary-foreground mb-1.5 sm:mb-2">{item.title}</h4>
                <p className="text-[10px] sm:text-xs text-primary-foreground/50 leading-relaxed font-light max-w-[200px]">{item.text}</p>
              </div>
            ))}

            {/* Follow Us */}
            <div className="flex flex-col items-center col-span-2 sm:col-span-1">
              <div className="h-6 sm:h-7 mb-3 sm:mb-4" aria-hidden />
              <h4 className="text-xs sm:text-sm font-semibold text-primary-foreground mb-2 sm:mb-3">Follow Us</h4>
              <div className="flex gap-2.5 sm:gap-3">
                <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300">
                  <LinkedinLogo size={14} className="text-primary-foreground/70 sm:hidden" />
                  <LinkedinLogo size={16} className="text-primary-foreground/70 hidden sm:block" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300">
                  <FacebookLogo size={14} className="text-primary-foreground/70 sm:hidden" />
                  <FacebookLogo size={16} className="text-primary-foreground/70 hidden sm:block" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300">
                  <InstagramLogo size={14} className="text-primary-foreground/70 sm:hidden" />
                  <InstagramLogo size={16} className="text-primary-foreground/70 hidden sm:block" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10">
          <div className="container-max px-5 sm:px-6 lg:px-8 py-5 sm:py-7 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[10px] sm:text-xs text-primary-foreground/30">© 2025 Sales Offshore. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <Link to="/privacy-policy" className="text-[10px] sm:text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-[10px] sm:text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
