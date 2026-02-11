import { motion } from "framer-motion"
import type { Category } from "../types/Category"

interface Props {
  topCategories: Category[]
}

function TopCategories({ topCategories }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {topCategories.map((cat) => (
        <motion.div
          key={cat.nombre}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative group p-8 rounded-xl border bg-white shadow-sm hover:shadow-xl cursor-pointer overflow-hidden"
        >
      
          <span
            className="absolute inset-x-0 bottom-0 h-1 bg-[#0d7ff2] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
          />

          <h3
            className="text-xl text-[#0d7ff2] font-semibold"
           
          >
            {cat.nombre}
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Explorar categoría
          </p>
        </motion.div>
      ))}
    </div>
  )
}

export default TopCategories
