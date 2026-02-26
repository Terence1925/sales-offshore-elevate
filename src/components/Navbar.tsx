import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { List, X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#how-we-work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-[0_1px_20px_-6px_rgba(0,0,0,0.1)] border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <div className="container-max flex items-center justify-between h-20 lg:h-24 px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3 group">
          <img src={logo} alt="Sales Offshore" className="h-10 w-10 transition-transform duration-300 group-hover:scale-105" />
          <span className={`text-lg font-bold tracking-tight transition-colors ${scrolled ? "text-primary" : "text-primary-foreground"}`}>
            Sales Offshore
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 ${
                scrolled
                  ? "text-muted-foreground hover:text-primary hover:bg-muted/50"
                  : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {l.label}
            </a>
          ))}
          <div className="ml-4">
            <Button variant="hero" size="default" asChild>
              <a href="https://cal.com/sales-offshore/30min" target="_blank" rel="noopener noreferrer">
                Book a Call
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-primary" : "text-primary-foreground"}`}>
          {open ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/30 overflow-hidden"
          >
            <div className="px-4 pb-6 pt-2">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block py-3.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors border-b border-border/20 last:border-0"
                >
                  {l.label}
                </motion.a>
              ))}
              <Button variant="hero" size="lg" className="w-full mt-5" asChild>
                <a href="https://cal.com/sales-offshore/30min" target="_blank" rel="noopener noreferrer">
                  Book a Call
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
