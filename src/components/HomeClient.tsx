"use client";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";
import { getProductsByCategory } from "@/actions/products";

interface Tab {
  id: string;
  label: string;
}

interface HomeClientProps {
  tabs: Tab[];
  products: Product[];
}

export default function HomeClient({ tabs, products }: HomeClientProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");
  const [categoryProducts, setCategoryProducts] = useState<Product[]>(products);
  const [loading, setLoading] = useState(false);

  // Fetch products when category tab changes
  useEffect(() => {
    if (!activeTab) return;

    const fetchCategoryProducts = async () => {
      setLoading(true);
      try {
        const fetchedProducts = await getProductsByCategory(activeTab);
        setCategoryProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching category products:", error);
        setCategoryProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [activeTab]);

  // Split products into 3 rows of 6
  const row1 = categoryProducts.slice(0, 6);
  const row2 = categoryProducts.slice(6, 12);
  const row3 = categoryProducts.slice(12, 18);

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Header with Tabs */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 lg:mb-12 gap-6">
          <h2 className="text-2xl lg:text-3xl font-roboto">
            <span className="text-brand-cyan-dark">Best </span>
            <span className="text-black">Deals</span>
          </h2>

          {/* Tabs & Navigation */}
          <div className="flex items-center gap-3 lg:gap-4 overflow-x-auto w-full lg:w-auto">
            <div className="flex items-center gap-3 lg:gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-base lg:text-lg font-roboto uppercase whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? "text-brand-cyan-dark"
                      : "text-black hover:text-brand-cyan"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="h-0.5 bg-brand-cyan mt-1"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Arrow Navigation */}
            <div className="hidden lg:flex items-center gap-0">
              <svg width="44" height="14" viewBox="0 0 44 14" fill="none">
                <path d="M9 14L0 7L9 0V14Z" fill="#1A1C1C"/>
                <path d="M35 14L44 7L35 0V14Z" fill="#A0A0A0"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Products Grid - Multiple Rows */}
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-cyan-dark"></div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Row 1 */}
            {row1.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
                {row1.map((product) => (
                  <ProductCard key={`best-1-${product.id}`} product={product} />
                ))}
              </div>
            )}

            {/* Row 2 */}
            {row2.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
                {row2.map((product) => (
                  <ProductCard key={`best-2-${product.id}`} product={product} />
                ))}
              </div>
            )}

            {/* Row 3 */}
            {row3.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
                {row3.map((product) => (
                  <ProductCard key={`best-3-${product.id}`} product={product} />
                ))}
              </div>
            )}

            {categoryProducts.length === 0 && !loading && (
              <div className="text-center py-16 text-gray-500">
                No products found in this category
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
