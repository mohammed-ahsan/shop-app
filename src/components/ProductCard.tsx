import Link from "next/link";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Calculate discount percentage
  const originalPrice = product.price * 1.2; // Simulate original price
  const discount = Math.round(((originalPrice - product.price) / originalPrice) * 100);

  return (
    <div className="flex flex-col items-center gap-3 p-3.5 border border-brand-border bg-white hover:shadow-lg transition-shadow">
      {/* Category/Brand Name */}
      <p className="text-xs font-century-gothic text-black self-start truncate w-full">
        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
      </p>

      {/* Product Name */}
      <Link 
        href={`/product/${product.id}`} 
        className="text-sm font-century-gothic text-brand-dark hover:text-brand-cyan transition-colors self-start line-clamp-2 h-10"
      >
        {product.title}
      </Link>

      {/* Product Image */}
      <Link href={`/product/${product.id}`} className="w-full">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-32 object-contain"
        />
      </Link>

      {/* Rating */}
      <div className="flex items-center gap-1 self-start">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-3 h-3 ${
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
        <span className="text-xs font-century-gothic text-brand-text-gray">
          ({product.rating.count})
        </span>
      </div>

      {/* Pricing */}
      <div className="flex items-end gap-2 self-start">
        <span className="text-sm font-century-gothic text-brand-text-gray line-through">
          ${originalPrice.toFixed(2)}
        </span>
        <span className="text-base font-century-gothic text-brand-cyan font-semibold">
          ${product.price.toFixed(2)}
        </span>
      </div>

      {/* Add to Cart Button */}
      <button className="w-full h-9 bg-brand-teal flex items-center justify-center hover:bg-brand-cyan transition-colors">
        <span className="text-white text-sm font-century-gothic">Add to cart</span>
      </button>
    </div>
  );
}
