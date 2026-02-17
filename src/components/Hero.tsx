import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsxzG1CTDH5m25iZ1jWv9ESGWKV2D1TefljiB_37mBBiSzPA_lPG0BBV88lb3iybEwpzGVMI6kpOW7Kas5c6D_TCR8fhpaxlyTNK5PwGNuim5fENnm1dv2SkJcxSaquXARAOlb8O7iX0bGeoOMos82H9gPRv-gjnFfHTAG1gVitWhnfE8VU6Rk7u3dU_Tiduo5chhSz8cAtWkZOJTVVqt8eTzkD_1E94dTK7T9xKYb7xPrmQMa5S-Puuq_LtJ5jw0IAlJV5kZLam8", // Tu imagen original
    title: "Elevate Your \n Everyday Style",
    description: "Discover premium fashion pieces designed for modern lifestyle."
  },
  {
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070",
    title: "The Winter \n Collection 2026",
    description: "Stay warm and elegant with our exclusive seasonal arrivals."
  },
  {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070",
    title: "Timeless \n Minimalist Design",
    description: "Quality basics that never go out of fashion."
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-play: cambia cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="px-4 md:px-40 py-10">
      <section className="relative h-[75vh] w-full overflow-hidden rounded-3xl bg-gray-900">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Imagen con efecto de zoom suave (Ken Burns) */}
            <motion.img
              src={slides[current].image}
              alt="Fashion Slide"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 5, ease: "easeOut" }}
            />
            
            {/* Gradiente overlay (manteniendo tu estilo original) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />

            {/* Contenido */}
            <div className="relative z-20 flex h-full items-center px-6 md:px-20 lg:px-40">
              <div className="max-w-xl text-white">
                <motion.h1
                  key={`title-${current}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 whitespace-pre-line"
                >
                  {slides[current].title}
                </motion.h1>

                <motion.p
                  key={`desc-${current}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-base sm:text-lg text-gray-200 mb-8"
                >
                  {slides[current].description}
                </motion.p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-6 py-2 sm:px-8 sm:py-3 rounded-xl font-semibold hover:bg-gray-200 transition shadow-lg"
                >
                  Shop Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicadores de posición (Puntitos) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                current === index ? "w-10 bg-white" : "w-3 bg-white/40"
              }`}
            />
          ))}
        </div>

      </section>
    </div>
  );
}