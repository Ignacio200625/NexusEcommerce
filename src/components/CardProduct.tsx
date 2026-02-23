import { Link } from "react-router";
import { motion } from "framer-motion";
import { Heart, ShoppingCart } from "lucide-react";
import type { Product } from "../types/Product";
import { useCart } from "../context/CartContext";
import { toast } from "sonner"; 
import { useFavorites } from "../context/FavoritesContext";
import { useUser } from "@clerk/clerk-react";

interface Props {
  product: Product;
  trending: boolean;
}

function CardProduct({ product, trending }: Props) {
  const { addToCart } = useCart();
  const { addToFavorites,itemLiked } = useFavorites();
  const { user, isLoaded } = useUser();

  const handleAddToCart = (product: Product) => {
    if(!user){toast.error(`${product.title} Load your profile`, {
      description: "You have to load in our page",
      duration: 3000,
      position: "bottom-right",
    });
    return
  }
    addToCart(product);
    
    toast.success(`${product.title} Product Added`, {
      description: "You can review your product in the cart",
      duration: 3000,
      position: "bottom-right",
    });
  
  };
    const isFavorite = itemLiked.some((fav) => fav.id === product.id);

  return (
    <motion.div
      key={product.id}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260 }}
      className="group relative rounded-2xl border bg-white shadow-sm hover:shadow-xl overflow-hidden"
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addToFavorites(product);
        }}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white shadow hover:scale-110 transition"
      >
        <Heart   className={`w-5 h-5 ${
            isFavorite ? "text-red-500 fill-red-500" : "text-gray-400 group-hover:text-red-500"
          }`}/>
      </button>

      <div className="relative h-64 bg-gray-100 flex items-center justify-center ">
        <Link to={`/Products/${product.id}`} className="absolute inset-0 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-full object-contain hover:scale-105 transition-transform duration-500"
          />
        </Link>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileInView={{ opacity: 1, y: 0 }}
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart(product);
          }}
          className="absolute mt-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 rounded-xl bg-[#0d7ff2] px-6 py-3 text-white font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition"
        >
          <ShoppingCart className="w-5 h-5" />
          Quick Add
        </motion.button>
      </div>

      <div className="p-6">
        <Link to={`/Products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1 cursor-pointer">
            {product.title}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.category}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>

      {trending && (
        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-[#0d7ff2] absolute top-4 left-4">
          Trending
        </span>
      )}

      <span className="absolute inset-x-0 bottom-0 h-1 bg-[#0d7ff2] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
    </motion.div>
  );
}

export default CardProduct;