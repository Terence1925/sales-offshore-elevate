import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "35+", label: "Clients Served" },
  { value: "250+", label: "Sales Professionals Placed" },
  { value: "2,000+", label: "Deals Closed" },
  { value: "70%", label: "Cost Savings" },
  { value: "15+", label: "Years Sales Experience" },
];

export default function NumberProof() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-navy py-16 sm:py-20">
      <div ref={ref} className={`container-max px-4 sm:px-6 lg:px-8 fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary mb-2">{s.value}</p>
              <p className="text-sm text-primary-foreground/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
