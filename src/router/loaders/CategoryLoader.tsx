import { getCategories } from "../../services/serviceProducts";


export async function categoryLoader() {
  return await getCategories();
}
