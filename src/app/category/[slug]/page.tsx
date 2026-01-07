import { notFound } from "next/navigation";
import { getProductsByCategory, getCategories } from "@/actions/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  try {
    const categories = await getCategories();
    
    if (!categories || !Array.isArray(categories)) {
      return [];
    }
    
    return categories.map((category) => ({
      slug: category.name,
    }));
  } catch (error) {
    console.error("Error generating static params for categories:", error);
    return [];
  }
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);
  
  return {
    title: `${categoryName} - Winstore`,
    description: `Browse our collection of ${categoryName} products at Winstore`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  
  try {
    const products = await getProductsByCategory(slug);
    const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

    if (!products || products.length === 0) {
      notFound();
    }

    return (
      <div className="min-h-screen bg-white">
        <Header />

        <main>
          {/* Category Header */}
          <section className="bg-gradient-cream py-8 lg:py-12">
            <div className="container mx-auto px-4 lg:px-16">
              <h1 className="text-3xl lg:text-4xl font-century-gothic mb-2">
                <span className="text-brand-cyan-dark">{categoryName}</span>
              </h1>
              <p className="text-brand-text-gray font-century-gothic">
                {products.length} products found
              </p>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-12 lg:py-16">
            <div className="container mx-auto px-4 lg:px-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 lg:gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  } catch (error) {
    notFound();
  }
}
