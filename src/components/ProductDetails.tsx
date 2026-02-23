import { useState } from "react";
import type { Product } from "../types/Product";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { Heart, ShoppingCart, ArrowLeft, Star, ShieldCheck, Truck } from "lucide-react";
import { toast, Toaster } from "sonner";
import { useFavorites } from "../context/FavoritesContext";
import { useUser } from "@clerk/clerk-react";

interface Props {
  product: Product;
  onBack: () => void; // Función para regresar a la lista
}

function ProductDetails({ product, onBack }: Props) {
  const { addToCart } = useCart();
  const {user}=useUser()
  //Le damos un valor inicial porque puede ser undefined
  const [quantity, setQuantity] = useState(1);
  const { addToFavorites,itemLiked } = useFavorites();

  const handleAddToCart = () => {
    if(!user){toast.error(`${product.title} Load your profile`, {
      description: "You have to load in our page",
      duration: 3000,
      position: "bottom-right",
    });
    return
  }
    // Si el contexto soporta cantidad, la pasa aquí
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    

    
    
    toast.success(`${product.title} añadido`, {
      description: `${quantity} unidades añadidas al carrito con éxito.`,
      duration: 3000,
      position: "bottom-right",
    });
  };
     const isFavorite = itemLiked.some((fav) => fav.id === product.id);

  return (
    <div className="min-h-screen bg-white px-6 md:px-20 py-10">
      <Toaster richColors closeButton />
      
   
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 hover:text-[#0d7ff2] transition-colors mb-8 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to products
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
     
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative rounded-3xl bg-gray-50 p-8 flex items-center justify-center overflow-hidden border border-gray-100"
        >
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[500px] object-contain hover:scale-105 transition-transform duration-500"
          />
           <button onClick={(e)=>{  e.preventDefault(); addToFavorites(product)}} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white shadow hover:scale-110 transition">
              <Heart className={`w-5 h-5 ${
            isFavorite ? "text-red-500 fill-red-500" : "text-gray-400 group-hover:text-red-500"
          }`} />
            </button>
        </motion.div>

   
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className="text-[#0d7ff2] font-semibold tracking-wider uppercase text-sm mb-2">
            {product.category}
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {product.title}
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-lg">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
              <span className="font-bold text-yellow-700">4.8</span>
            </div>
            <span className="text-gray-400 text-sm">|</span>
            <span className="text-gray-500 text-sm underline cursor-pointer">128 reviews</span>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {product.description || "Experience the perfect blend of style and performance. This high-quality product is designed to meet your daily needs with comfort and durability."}
          </p>

          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-4xl font-extrabold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.price > 50 && (
              <span className="text-gray-400 line-through text-xl">
                ${(product.price * 1.2).toFixed(2)}
              </span>
            )}
          </div>

     
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="flex items-center border-2 border-gray-100 rounded-2xl p-1 bg-gray-50">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:bg-white rounded-xl transition font-bold"
              >
                -
              </button>
              <span className="px-6 font-semibold w-12 text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 hover:bg-white rounded-xl transition font-bold"
              >
                +
              </button>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-3 bg-[#0d7ff2] hover:bg-[#0a66c2] text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 transition-all"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-50 rounded-lg">
                <Truck className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-sm text-gray-600 font-medium">Free delivery over $100</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-sm text-gray-600 font-medium">2 Year Warranty</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProductDetails;