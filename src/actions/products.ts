"use server";

import { Product, Category } from "@/types/product";
import { unstable_cache } from "next/cache";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://mm-assesment-server.vercel.app/api/v1";

// Cache configuration
const CACHE_TAGS = {
  products: "products",
  categories: "categories",
  product: (id: number) => `product-${id}`,
  categoryProducts: (category: string) => `category-${category}`,
} as const;

/**
 * Fetch all products
 * Cached for 1 hour with revalidation
 */
export const getProducts = unstable_cache(
  async (limit?: number): Promise<Product[]> => {
    try {
      const url = limit 
        ? `${API_BASE_URL}/products?limit=${limit}`
        : `${API_BASE_URL}/products`;
      
      const response = await fetch(url, {
        next: { revalidate: 3600, tags: [CACHE_TAGS.products] },
      });

      if (!response.ok) {
        console.error(`Failed to fetch products: ${response.statusText}`);
        return [];
      }

      const result = await response.json();
      // API returns {success, message, data} structure
      return result.success && Array.isArray(result.data) ? result.data : [];
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },
  ["all-products"],
  {
    revalidate: 3600,
    tags: [CACHE_TAGS.products],
  }
);

/**
 * Fetch all categories
 * Cached for 2 hours
 */
export const getCategories = unstable_cache(
  async (): Promise<Category[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/products/categories`, {
        next: { revalidate: 7200, tags: [CACHE_TAGS.categories] },
      });

      if (!response.ok) {
        console.error(`Failed to fetch categories: ${response.statusText}`);
        return [];
      }

      const result = await response.json();
      // API returns {success, message, data} structure
      return result.success && Array.isArray(result.data) ? result.data : [];
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  },
  ["all-categories"],
  {
    revalidate: 7200,
    tags: [CACHE_TAGS.categories],
  }
);

/**
 * Fetch products by category
 * @param category - The category slug
 */
export const getProductsByCategory = unstable_cache(
  async (category: string): Promise<Product[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/products/category/${category}`, {
        next: { revalidate: 3600, tags: [CACHE_TAGS.categoryProducts(category)] },
      });

      if (!response.ok) {
        console.error(`Failed to fetch products for category ${category}: ${response.statusText}`);
        return [];
      }

      const result = await response.json();
      // API returns {success, message, data} structure
      return result.success && Array.isArray(result.data) ? result.data : [];
    } catch (error) {
      console.error(`Error fetching products for category ${category}:`, error);
      return [];
    }
  },
  ["category-products"],
  {
    revalidate: 3600,
  }
);

/**
 * Fetch a single product by ID
 * @param id - The product ID
 */
export const getProductById = unstable_cache(
  async (id: number): Promise<Product | null> => {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`, {
        next: { revalidate: 3600, tags: [CACHE_TAGS.product(id)] },
      });

      if (!response.ok) {
        console.error(`Failed to fetch product ${id}: ${response.statusText}`);
        return null;
      }

      const result = await response.json();
      // API returns {success, message, data} structure
      return result.success && result.data ? result.data : null;
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      return null;
    }
  },
  ["single-product"],
  {
    revalidate: 3600,
  }
);

/**
 * Get limited products for homepage sections
 * @param limit - Number of products to return
 */
export async function getLimitedProducts(limit: number = 6): Promise<Product[]> {
  const products = await getProducts();
  return products.slice(0, limit);
}
