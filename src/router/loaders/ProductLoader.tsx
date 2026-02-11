import { getProducts } from "../../services/serviceProducts";


export async function productLoader() {
  return await getProducts();
}
