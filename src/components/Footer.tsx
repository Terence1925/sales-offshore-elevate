import { Clock, MapPin, Phone, EnvelopeSimple, LinkedinLogo, FacebookLogo, InstagramLogo } from "@phosphor-icons/react";

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
        <div className="container-max px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8 text-center">
            {footerItems.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <item.icon size={28} className="text-primary-foreground/80 mb-4" weight="light" />
                <h4 className="text-sm font-semibold text-primary-foreground mb-2">{item.title}</h4>
                <p className="text-xs text-primary-foreground/50 leading-relaxed font-light max-w-[200px]">{item.text}</p>
              </div>
            ))}

            {/* Follow Us */}
            <div className="flex flex-col items-center col-span-2 sm:col-span-1">
              <Phone size={28} className="text-primary-foreground/80 mb-4 opacity-0" weight="light" aria-hidden />
              <h4 className="text-sm font-semibold text-primary-foreground mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <LinkedinLogo size={16} className="text-primary-foreground/70" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <FacebookLogo size={16} className="text-primary-foreground/70" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <InstagramLogo size={16} className="text-primary-foreground/70" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10">
          <div className="container-max px-4 sm:px-6 lg:px-8 py-7 text-center">
            <p className="text-xs text-primary-foreground/30">© 2025 Sales Offshore. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
