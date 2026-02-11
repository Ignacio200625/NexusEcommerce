import type { Product } from "../types/Product";
import { useEffect } from "react";
import { productLoader } from "../router/loaders/ProductLoader";
import { useState } from "react";
import AllProducts from "../components/AllProducts";
import { useLocation } from "react-router";



function Products(){
  const [products,setProducts]=useState<Product[]>([]);
  const location = useLocation();
  const search = location.state?.search?.toLowerCase() || "";

  const filteredProducts = search
    ? products.filter((p) =>
        p.title.toLowerCase().includes(search)
      )
    : products;

  useEffect(() => {

    async function loadProducts(){
      const data = await productLoader();
      setProducts(data);
    }
    loadProducts();
  }, []);

    return(
       <div><h1 className="text-3xl font-bold px-40 py-10">
        {search ? `Results for "${search}"` : "All Products"}
      </h1>
        <div className="bg-[#f5f7f8]">
          <AllProducts products={filteredProducts}/>
        </div></div>
        
    )

}

export default Products;