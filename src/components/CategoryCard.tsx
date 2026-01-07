import Link from "next/link";

interface CategoryCardProps {
  name: string;
  image?: string;
  slug: string;
}

export default function CategoryCard({ name, image, slug }: CategoryCardProps) {
  // Use default image if not provided
  const categoryImage = image || "https://api.builder.io/api/v1/image/assets/TEMP/b11bf1a1cf5ac266598ff216d38c26b3f05c6c0c?width=544";
  
  return (
    <div className="relative shrink-0 w-64 lg:w-72 h-48 lg:h-52">
      {/* Category Image */}
      <img 
        src={categoryImage} 
        alt={name}
        className="w-full h-full object-cover border-2 border-white"
      />
      
      {/* Category Label with Arrow */}
      <div className="absolute left-0 bottom-3 flex items-center">
        {/* Arrow Triangle */}
        <svg width="11" height="9" viewBox="0 0 11 9" fill="none" className="relative z-0">
          <path d="M0.0480241 4.50019L9.04756 0L9.04755 4.49999L0.0480241 4.50019Z" fill="#220F0F"/>
        </svg>
        
        {/* Label Container */}
        <div className="flex items-center gap-2 bg-white/95 px-4 py-3 shadow-lg -ml-2">
          <h3 className="text-2xl font-century-gothic text-black leading-tight whitespace-nowrap">
            {name}
          </h3>
          <Link 
            href={`/category/${slug}`}
            className="text-xl font-century-gothic text-brand-blue hover:text-brand-cyan transition-colors"
          >
            Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
