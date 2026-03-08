import { useState, useEffect } from "react";
import logo from "@/assets/logo-nav.png";

export default function Navbar() {
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
      <div className="container-max flex items-center h-16 sm:h-20 px-5 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2.5 group">
          <img src={logo} alt="Sales Offshore" className="h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
          <div className="flex flex-col leading-none">
            <span className={`text-sm sm:text-base font-extrabold tracking-tight transition-colors duration-500 ${scrolled ? "text-primary" : "text-primary-foreground"}`}>
              SALES
            </span>
            <span className={`text-sm sm:text-base font-extrabold tracking-tight transition-colors duration-500 ${scrolled ? "text-secondary" : "text-secondary"}`}>
              OFFSHORE
            </span>
          </div>
        </a>
      </div>
    </nav>
  );
}
