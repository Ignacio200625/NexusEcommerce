import { Link } from "react-router";
import { useCart } from "../context/CartContext"

import type { CartItem } from "../context/CartContext"
import { toast } from "sonner";

interface Props{
    item:CartItem
}

function CardProductCart({item}:Props){
    const {increaseQty, decreaseQty,removeFromCart,}=useCart()
      const handleRemove = (id: number, title: string) => {
    removeFromCart(id);
    toast.error(`Producto eliminado`, {
      description: `${title} ha sido quitado del carrito.`,
      icon: "🗑️",
    });
  };
    return(
   
           <div
              key={item.id}
              className="flex flex-col  md:flex-row items-center justify-between p-4 border rounded-lg shadow-sm bg-white"
            >
              <div className="flex items-center gap-4">
                <Link to={`/Products/${item.id}`}>
                    <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain rounded"
                    />
                </Link>
                
                <div>
                   <Link to={`/Products/${item.id}`}> <h3 className="font-semibold text-lg">{item.title}</h3></Link>  
                 
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center md:mt-0 mt-5 gap-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                >
                  -
                </button>
                <span className="px-2 font-medium">{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                >
                  +
                </button>
              </div>

              <div className="flex mt-5 md:mt-0 items-center md:ms-10 gap-4">
                <span className="font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button
            
                  onClick={() => handleRemove(item.id, item.title)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                >
                  Eliminar
                </button>
              </div>
            </div>
    )

}

export default CardProductCart