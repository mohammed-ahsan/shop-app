// API Response Types based on mm-assessment-server API

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface Category {
  id: number;
  name: string;
}

export interface Category {
  name: string;
  slug: string;
  image?: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
}

export interface CategoriesResponse {
  categories: string[];
}
