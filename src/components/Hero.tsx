import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="px-4 md:px-40 py-10">
      <section className="relative h-[75vh] w-full overflow-hidden rounded-lg">

        {/* Imagen de fondo con animación */}
        <motion.img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsxzG1CTDH5m25iZ1jWv9ESGWKV2D1TefljiB_37mBBiSzPA_lPG0BBV88lb3iybEwpzGVMI6kpOW7Kas5c6D_TCR8fhpaxlyTNK5PwGNuim5fENnm1dv2SkJcxSaquXARAOlb8O7iX0bGeoOMos82H9gPRv-gjnFfHTAG1gVitWhnfE8VU6Rk7u3dU_Tiduo5chhSz8cAtWkZOJTVVqt8eTzkD_1E94dTK7T9xKYb7xPrmQMa5S-Puuq_LtJ5jw0IAlJV5kZLam8"
          alt="Luxury Fashion Model"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />

        {/* Gradiente overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent z-10" />

        {/* Contenido */}
        <motion.div
          className="relative z-20 flex h-full items-center px-4 md:px-10 lg:px-40"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="max-w-xl text-white">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Elevate Your <br /> Everyday Style
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              Discover premium fashion pieces designed for modern lifestyle.
            </motion.p>

            <motion.button
              className="bg-white text-black px-6 py-2 sm:px-8 sm:py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              Shop Now
            </motion.button>
          </div>
        </motion.div>

      </section>
    </div>
  );
}
