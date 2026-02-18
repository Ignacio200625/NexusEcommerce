import { useParams, useNavigate } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import ProductDetails from "../components/ProductDetails"; 
import type { Product } from "../types/Product";
import { useLocation } from "react-router";
import { productLoader } from "../router/loaders/ProductLoader";

function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Buscamos el producto por ID (asegúrate de comparar tipos correctamente)


  const [products,setProducts]=useState<Product[]>([]);
  const location = useLocation();
  const search = location.state?.search?.toLowerCase() || "";
  // Buscamos el producto por ID (asegúrate de comparar tipos correctamente)
  const product = products.find((p) => p.id === Number(id));


  useEffect(() => {

    async function loadProducts(){
      const data = await productLoader();
      setProducts(data);
    }
    loadProducts();
  }, []);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <button 
          onClick={() => navigate("/Products")}
          className="mt-4 text-blue-500 underline"
        >
          Go back to shop
        </button>
      </div>
    );
  }

  return (
    <ProductDetails 
      product={product} 
      onBack={() => navigate(-1)} // Navega a la página anterior
    />
  );
}

export default ProductDetailsPage;