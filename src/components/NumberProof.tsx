import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const stats = [
  { value: "35+", label: "Clients Served" },
  { value: "250+", label: "Sales Pros Placed" },
  { value: "2,000+", label: "Deals Closed" },
  { value: "70%", label: "Cost Savings" },
  { value: "15+", label: "Years Experience" },
];

export default function NumberProof() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative overflow-hidden hero-gradient noise-overlay">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-[0.06]" style={{ background: "radial-gradient(ellipse, hsl(163 98% 29%) 0%, transparent 70%)" }} />

      <div ref={ref} className={`relative container-max px-5 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center relative"
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold stat-number mb-1 sm:mb-2">{s.value}</p>
              <p className="text-[10px] sm:text-xs lg:text-sm text-primary-foreground/40 font-medium tracking-wide">{s.label}</p>
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-primary-foreground/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
