import type { Product } from "../types/Product";
import { Toaster } from "sonner"; 

import CardProduct from "./CardProduct";

interface props{
    products:Product[]
}

function TrendingProducts({products}:props){
    const trendingProductos=products.slice(0,4);
    return(  
       <div className="md:px-40 px-10">
            <div className="py-20 px-10 bg-white rounded-lg ">
                   <Toaster richColors closeButton />
                <h1 className="font-bold text-3xl mb-2">Products</h1>
                <section className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 mt-10 gap-8">
        
      {trendingProductos.map((product) => (
             
        <CardProduct product={product} trending={false}/>
      
      ))}
    </section>
            </div>
         </div>
    )


}

export default TrendingProducts