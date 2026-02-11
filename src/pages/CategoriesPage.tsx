import AllCategories from "../components/AllCategories";
import { useState,useEffect } from "react";
import type { Category } from "../types/Category";
import { categoryLoader } from "../router/loaders/CategoryLoader";
import type { Product } from "../types/Product";
import { productLoader } from "../router/loaders/ProductLoader";
import ProductsByCategories from "../components/ProductsByCategories";

function CategoriesPage(){

     const [categories, setCategories] = useState<Category[]>([]);
     const [products,setProducts]=useState<Product[]>([]);
     const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;
    
    
      useEffect(() => {
        async function loadCategories() {
          const data = await categoryLoader();
          setCategories(data); 
        }
        
        async function loadProducts(){
              const data = await productLoader();
              setProducts(data);
            }
     
    
        loadCategories();
        loadProducts();
 
      }, []);

    return(
       <div>
         <AllCategories categories={categories} setSelectedCategory={setSelectedCategory}  />
         <ProductsByCategories  products={
          selectedCategory
            ? products.filter(p => p.category === selectedCategory)
            : products
        } />
       </div>
    )

}

export default CategoriesPage;