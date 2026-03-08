import { motion } from "framer-motion";

const photos = [
  "/images/photo-1.png",
  "/images/photo-2.png",
  "/images/photo-3.png",
  "/images/photo-4.png",
  "/images/photo-5.png",
  "/images/photo-6.png",
];

export default function PhotoGridSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 lg:px-8 bg-background">
      <div className="container-max">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden group"
            >
              <img
                src={src}
                alt={`Team photo ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
