import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import { categoryLoader } from "../router/loaders/CategoryLoader";
import type { Category } from "../types/Category";
import type { Product } from "../types/Product";
import { productLoader } from "../router/loaders/ProductLoader";
import TrendingProducts from "../components/TrendingProducts";
import Loop from "../components/Loop";
import Footer from "../components/Footer";

function HomePage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products,setProducts]=useState<Product[]>([]);

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

  return (
    <div>
      <Hero />
      <Categories categories={categories} />
      <TrendingProducts products={products} />
      <Loop/>
      <Footer/>
    </div>
  );
}

export default HomePage;