import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const images = [
  { src: "/images/grid-1.jpg", alt: "Sales team collaborating", label: "Team Collaboration" },
  { src: "/images/grid-2.jpg", alt: "Headset on laptop", label: "Professional Setup" },
  { src: "/images/grid-3.jpg", alt: "Business strategy", label: "Strategic Growth" },
  { src: "/images/grid-4.jpg", alt: "Sales analytics", label: "Data-Driven Sales" },
  { src: "/images/grid-5.jpg", alt: "Sales professional", label: "Expert Talent" },
  { src: "/images/grid-6.jpg", alt: "Team unity", label: "Unified Teams" },
];

export default function ImageGridSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-6 lg:px-8 bg-background">
      <div ref={ref} className={`container-max fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <div className="text-center mb-10 sm:mb-16">
          <span className="section-label">Our World</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Inside Sales Offshore
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto font-light">
            A glimpse into our culture, workspace, and the talented professionals driving results for businesses worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="relative group rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-xs sm:text-sm font-semibold text-primary-foreground">{img.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
