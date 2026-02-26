import { useState } from "react";
import { Button } from "@/components/ui/button";
import { List, X } from "@phosphor-icons/react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "How It Works", href: "#how-we-work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container-max flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Sales Offshore" className="h-9 w-9" />
          <span className="text-lg font-bold text-primary">Sales Offshore</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="default" asChild>
            <a href="https://cal.com/sales-offshore/30min" target="_blank" rel="noopener noreferrer">
              Book a Call
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-primary p-2">
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-6 pt-2">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="lg" className="w-full mt-4" asChild>
            <a href="https://cal.com/sales-offshore/30min" target="_blank" rel="noopener noreferrer">
              Book a Call
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
}
