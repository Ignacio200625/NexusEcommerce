
import { motion } from "framer-motion"
import type { Product } from "../types/Product";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { toast, Toaster } from "sonner"; 

interface props{
    products:Product[]
}

function TrendingProducts({products}:props){
    const trendingProductos=products.slice(0,4);

    const { addToCart } = useCart();

  // 2. Función para manejar el clic y mostrar la notificación
  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.title} Product Added`, {
      description: "You can rewiew your product in the cart",
      duration: 3000,
      position: "bottom-right",
    });
  };

    return(

      
        
       <div className="md:px-40 px-10">
            <div className="py-20 px-10 bg-white rounded-lg ">
                   <Toaster richColors closeButton />
                <h1 className="font-bold text-3xl mb-2">Products</h1>
                <section className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 mt-10 gap-8">
        
      {trendingProductos.map((product) => (
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
               onClick={() => handleAddToCart(product)}
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
    </section>
            </div>
         </div>
    )


}

export default TrendingProducts