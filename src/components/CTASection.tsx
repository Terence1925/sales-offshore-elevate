import { Button } from "@/components/ui/button";
import { CalendarCheck } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-navy py-20 sm:py-28">
      <div ref={ref} className={`container-max px-4 sm:px-6 lg:px-8 text-center fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <CalendarCheck size={48} className="text-secondary mx-auto mb-6" />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
          Ready to Scale Your Sales Team?
        </h2>
        <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto">
          Book a free 30-minute strategy call and discover how much you can save.
        </p>
        <Button variant="cta" size="xl" asChild>
          <a href="https://cal.com/sales-offshore/30min" target="_blank" rel="noopener noreferrer">
            Schedule Strategy Call
          </a>
        </Button>
      </div>
    </section>
  );
}
