import { useCart } from "../context/CartContext";
import { Button } from "../components/Button";
import { toast, Toaster } from "sonner";
import CardProductCart from "../components/CardProductCart";
import { useUser, SignInButton } from "@clerk/clerk-react";

function Cart() {
  const { cart, clearCart } = useCart();
  const { user, isLoaded } = useUser();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSubmitPurchase = () => {
    clearCart();
    toast.success("¡Compra realizada con éxito! 🎉", {
      description: "Recibirás un correo con los detalles de tu pedido.",
    });
  };


  if (!isLoaded) {
    return <p className="text-center mt-10">Loading...</p>;
  }


  if (!user) {
    return (
      <div className="h-[70vh] flex flex-col items-center justify-center text-center gap-6">
        <h2 className="text-3xl font-bold">Debes iniciar sesión</h2>
        <p className="text-gray-500">
          Inicia sesión para ver tu carrito y realizar compras.
        </p>

        <SignInButton mode="modal">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
            Iniciar sesión
          </button>
        </SignInButton>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <Toaster richColors position="top-center" />

      <h2 className="text-3xl font-bold mb-6">Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <CardProductCart key={item.id} item={item} />
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