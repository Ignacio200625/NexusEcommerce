import { getProducts,getProductById } from "../../services/serviceProducts";


export async function productLoader() {
  return await getProducts();
}

export async function productLoaderById(id:number) {
  return await getProductById(id);
}

