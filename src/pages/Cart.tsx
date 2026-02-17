import { useCart } from "../context/CartContext";
import {Button} from "../components/Button"
function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty,clearCart } = useCart();
  
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleSubmitPurchase = () => {
    clearCart(); // ✅ vacía el carrito
    alert("Compra realizada con éxito 🎉"); // opcional
  };

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Carrito</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Tu carrito está vacío</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-white"
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

              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-4 text-xl font-bold">
            Total: ${totalPrice.toFixed(2)}
          </div>
          <div className="mt-4 text-center font-bold" onClick={handleSubmitPurchase}>
            <Button variant={"primary"} text={"Submit purchase"} />

          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
