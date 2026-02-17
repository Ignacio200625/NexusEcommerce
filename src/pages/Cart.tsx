import { useCart } from "../context/CartContext";
import { Button } from "../components/Button";
// 1. Importar toast y Toaster
import { toast, Toaster } from "sonner";

function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty, clearCart } = useCart();
  
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Manejar la compra exitosa
  const handleSubmitPurchase = () => {
    clearCart();
    toast.success("¡Compra realizada con éxito! 🎉", {
      description: "Recibirás un correo con los detalles de tu pedido.",
    });
  };

  //Nueva función para manejar la eliminación con notificación
  const handleRemove = (id: number, title: string) => {
    removeFromCart(id);
    toast.error(`Producto eliminado`, {
      description: `${title} ha sido quitado del carrito.`,
      icon: "🗑️",
    });
  };

  return (
    <div className="p-10 max-w-4xl mx-auto">

      <Toaster richColors position="top-center" />

      <h2 className="text-3xl font-bold mb-6">Carrito</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Tu carrito está vacío</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between p-4 border rounded-lg shadow-sm bg-white"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain rounded"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
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
          ))}

          <div className="text-right mt-4 text-xl font-bold">
            Total: ${totalPrice.toFixed(2)}
          </div>
          
          <div className="mt-4 flex justify-center" onClick={handleSubmitPurchase}>
            <Button variant={"primary"} text={"Submit purchase"} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;