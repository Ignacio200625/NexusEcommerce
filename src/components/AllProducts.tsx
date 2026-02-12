
import type { Product } from "../types/Product";
import { motion } from "framer-motion";

import { Heart, ShoppingCart } from "lucide-react";

interface Props{
    products:Product[]
}


function AllProducts({products}:Props){

    return(
           <div className="px-2 md:px-40 py-10">
            
        <div className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-4 gap-6">
         {products.map((product:Product) => (
        <motion.div
          key={product.id}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 260 }}
          className="group relative rounded-2xl border bg-white shadow-sm hover:shadow-xl overflow-hidden"
        >
     
          <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white shadow hover:scale-110 transition">
            <Heart className="w-5 h-5 text-gray-400 group-hover:text-red-500" />
          </button>

    
          <div className="relative h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />

    
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-xl bg-[#0d7ff2] px-6 py-3 text-white font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition"
            >
              <ShoppingCart className="w-5 h-5" />
              Quick Add
            </motion.button>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
              {product.title}
            </h3>

            <p className="mt-1 text-sm text-gray-500 line-clamp-2">
              {product.category}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-[#0d7ff2]">
                Trending
              </span>
            </div>
          </div>

          <span className="absolute inset-x-0 bottom-0 h-1 bg-[#0d7ff2] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
        </motion.div>
      ))}
        
        </div>
           </div>
    )

}

export default AllProducts;