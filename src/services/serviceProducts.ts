const API_URL = "https://fakestoreapi.com/products";
import type { Product } from "../types/Product";
import type { Category } from "../types/Category";
export async function getProducts(): Promise<Product[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Error fetching users");
  }
  return response.json();
}

export async function getProductById(userId: number): Promise<Product | null> {
  const response = await fetch(`${API_URL}/${userId}`);
  if (!response.ok) {
    throw new Error("Error fetching user");
  }
  return response.json();
}

export async function getCategories(): Promise<Category[]> {
  const products = await getProducts();
  const uniqueNames = Array.from(new Set(products.map(p => p.category)));
  return uniqueNames.map(nombre => ({ nombre }));
}

export async function getProductsByCategory(categoryName: string): Promise<Product[]> {
  const products = await getProducts();
  return products.filter(p => p.category === categoryName);
}