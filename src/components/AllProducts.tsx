import type { Product } from "../types/Product";
import { Toaster } from "sonner";
import CardProduct from "./CardProduct";


interface Props {
  products: Product[];
}

function AllProducts({ products }: Props) {
    
  return (
    <div className="px-2 md:px-40 py-10">

      <Toaster richColors closeButton />

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product: Product) => (
          
         <CardProduct product={product} trending={false}/>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;