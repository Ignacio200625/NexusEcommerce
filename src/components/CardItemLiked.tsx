import { Link } from "react-router";
import { useFavorites } from "../context/FavoritesContext"
import type { Product } from "../types/Product"

interface Props{
    product:Product
}

function CardItemLiked({product}:Props){

    const {removeFromFavorites}= useFavorites();

    return(
            <Link to={`/Products/${product.id}`}>
              <div
            key={product.id}
            className="group relative rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg overflow-hidden transition"
          >
            <div className="relative h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="h-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                {product.title}
              </h3>
              <p className="text-gray-500 line-clamp-2">{product.category}</p>
              <span className="text-xl font-bold text-gray-900">${product.price}</span>

              <button
                onClick={() => removeFromFavorites(product.id)}
                className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition flex items-center justify-center gap-2"
              >
                ❌ Quitar
              </button>
            </div>

            <span className="absolute inset-x-0 bottom-0 h-1 bg-[#0d7ff2] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </div></Link>
    )

}


export default CardItemLiked