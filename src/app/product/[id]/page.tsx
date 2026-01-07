import { notFound } from "next/navigation";
import { getProductById, getProducts } from "@/actions/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  try {
    const products = await getProducts();
    
    if (!products || !Array.isArray(products)) {
      return [];
    }
    
    return products.slice(0, 20).map((product) => ({
      id: product.id.toString(),
    }));
  } catch (error) {
    console.error("Error generating static params for products:", error);
    return [];
  }
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  
  try {
    const product = await getProductById(parseInt(id));
    
    if (!product) {
      return {
        title: "Product Not Found - Winstore",
        description: "The product you are looking for could not be found.",
      };
    }
    
    return {
      title: `${product.title} - Winstore`,
      description: product.description,
    };
  } catch {
    return {
      title: "Product Not Found - Winstore",
      description: "The product you are looking for could not be found.",
    };
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  
  try {
    const product = await getProductById(parseInt(id));
    
    if (!product) {
      notFound();
    }
    
    const originalPrice = product.price * 1.2;
    const discount = Math.round(((originalPrice - product.price) / originalPrice) * 100);

    return (
      <div className="min-h-screen bg-white">
        <Header />

        <main>
          {/* Breadcrumb */}
          <section className="bg-gray-50 py-4">
            <div className="container mx-auto px-4 lg:px-16">
              <div className="flex items-center gap-2 text-sm font-century-gothic">
                <Link href="/" className="text-brand-text-gray hover:text-brand-cyan">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4 text-brand-text-gray" />
                <Link 
                  href={`/category/${product.category}`} 
                  className="text-brand-text-gray hover:text-brand-cyan"
                >
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </Link>
                <ChevronRight className="w-4 h-4 text-brand-text-gray" />
                <span className="text-brand-dark">{product.title}</span>
              </div>
            </div>
          </section>

          {/* Product Details */}
          <section className="py-12 lg:py-16">
            <div className="container mx-auto px-4 lg:px-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Product Image */}
                <div className="flex items-center justify-center bg-white border border-brand-border p-8 lg:p-12">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full max-w-md h-auto object-contain"
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-6">
                  {/* Category Badge */}
                  <div className="inline-flex">
                    <span className="bg-brand-cyan/10 text-brand-cyan-dark px-4 py-1 rounded-full text-sm font-century-gothic">
                      {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </span>
                  </div>

                  {/* Product Title */}
                  <h1 className="text-3xl lg:text-4xl font-century-gothic text-brand-dark">
                    {product.title}
                  </h1>

                  {/* Rating */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating.rate)
                              ? "text-brand-yellow fill-current"
                              : "text-gray-300 fill-current"
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-brand-text-gray font-century-gothic">
                      {product.rating.rate} ({product.rating.count} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-end gap-4">
                    <span className="text-4xl font-century-gothic text-brand-cyan-dark font-semibold">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-2xl font-century-gothic text-brand-text-gray line-through">
                      ${originalPrice.toFixed(2)}
                    </span>
                    <span className="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-century-gothic font-semibold">
                      {discount}% OFF
                    </span>
                  </div>

                  {/* Description */}
                  <div className="border-t border-brand-border pt-6">
                    <h2 className="text-xl font-century-gothic text-brand-dark mb-3">
                      Description
                    </h2>
                    <p className="text-brand-text-gray font-century-gothic leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Add to Cart Button */}
                  <div className="flex gap-4 mt-6">
                    <button className="flex-1 bg-brand-teal text-white py-4 rounded-md font-century-gothic text-lg hover:bg-brand-cyan transition-colors">
                      Add to Cart
                    </button>
                    <button className="px-6 border-2 border-brand-teal text-brand-teal rounded-md font-century-gothic text-lg hover:bg-brand-teal hover:text-white transition-colors">
                      ♥
                    </button>
                  </div>

                  {/* Additional Info */}
                  <div className="border-t border-brand-border pt-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-brand-dark font-century-gothic font-semibold">
                        SKU:
                      </span>
                      <span className="text-brand-text-gray font-century-gothic">
                        #{product.id.toString().padStart(6, '0')}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-brand-dark font-century-gothic font-semibold">
                        Category:
                      </span>
                      <Link 
                        href={`/category/${product.category}`}
                        className="text-brand-cyan hover:text-brand-cyan-dark font-century-gothic"
                      >
                        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                      </Link>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-brand-dark font-century-gothic font-semibold">
                        Availability:
                      </span>
                      <span className="text-green-600 font-century-gothic">
                        In Stock
                      </span>
                    </div>
                  </div>
                </div>
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
