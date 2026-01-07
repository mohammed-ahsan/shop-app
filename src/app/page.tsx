import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import { getProducts, getCategories, getProductsByCategory } from "@/actions/products";
import HomeClient from "@/components/HomeClient";

export default async function Home() {
  // Fetch data using Server Actions
  const [newArrivals, categories] = await Promise.all([
    getProducts(10), // Fetch only 10 products for New Arrivals
    getCategories(),
  ]);

  // Fetch products for the first category for Best Deals initial load
  const firstCategory = categories[0]?.name;
  const bestDeals = firstCategory ? await getProductsByCategory(firstCategory) : [];

  // Category images mapping
  const categoryImages: Record<string, string> = {
    "electronics": "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=400&fit=crop",
    "jewelery": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop",
    "men's clothing": "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=600&h=400&fit=crop",
    "women's clothing": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop",
  };

  // Map categories to include images
  const categoriesWithImages = categories.map((category) => ({
    name: category.name.charAt(0).toUpperCase() + category.name.slice(1),
    slug: category.name,
    image: categoryImages[category.name] || "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
  }));

  // Available tabs based on categories
  const tabs = categories.slice(0, 5).map((category) => ({
    id: category.name,
    label: category.name.charAt(0).toUpperCase() + category.name.slice(1),
  }));

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative w-full h-64 lg:h-80 bg-linear-to-b from-transparent to-brand-cream">
          {/* Hero Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/9f9f1353ba88252f4ce31cc0f677498fa855497d?width=2800"
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Hero Content */}
          <div className="relative container mx-auto px-4 lg:px-16 h-full flex items-center">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8">
              {/* Left Content */}
              <div className="flex flex-col gap-1 lg:gap-2 max-w-md lg:max-w-lg bg-white/80 lg:bg-transparent p-6 lg:p-0 rounded-lg lg:rounded-none">
                <h1 className="text-3xl lg:text-5xl font-century-gothic leading-tight">
                  <span className="text-black">Shop </span>
                  <span className="text-brand-cyan">Computer & experience</span>
                </h1>
                <p className="text-xs lg:text-sm font-century-gothic text-black capitalize leading-relaxed max-w-sm mt-2">
                  You cannot inspect quality into the product; it is already there.
                  I am not a product of my circumstances. I am a product of my decisions.
                </p>
                <button className="bg-brand-blue text-white px-10 py-3 rounded-md font-century-gothic text-sm lg:text-base hover:bg-brand-cyan transition-colors mt-4 self-start">
                  View More
                </button>
              </div>

              {/* Discount Badge */}
              <div className="hidden lg:flex items-center justify-center w-40 h-40 rounded-full bg-gradient-orange">
                <span className="text-white text-4xl lg:text-5xl font-century-gothic text-center leading-tight">
                  40%<br/>Off
                </span>
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            <div className="w-9 h-0.5 bg-brand-dark"></div>
            <div className="w-9 h-0.5 bg-gray-400"></div>
            <div className="w-9 h-0.5 bg-gray-400"></div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-gradient-cream py-8 lg:py-12">
          <div className="container mx-auto px-4 lg:px-16 relative">
            {/* Navigation Arrows */}
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
              <ChevronLeft className="w-12 h-12 lg:w-16 lg:h-16 text-black" strokeWidth={1.5} />
            </button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
              <ChevronRight className="w-12 h-12 lg:w-16 lg:h-16 text-black" strokeWidth={1.5} />
            </button>

            {/* Categories Carousel */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 lg:gap-8 px-0 lg:px-12">
                {categoriesWithImages.map((category, index) => (
                  <CategoryCard key={index} {...category} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4 lg:px-16">
          <div className="h-px bg-black/17"></div>
        </div>

        {/* New Arrivals Section */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-16">
            <h2 className="text-2xl lg:text-3xl font-century-gothic mb-8 lg:mb-12">
              <span className="text-brand-cyan-dark">New </span>
              <span className="text-black">Arrivals</span>
            </h2>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Best Deals Section with Client Component for Tabs */}
        <HomeClient tabs={tabs} products={bestDeals} />
      </main>

      <Footer />
    </div>
  );
}
