import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="max-w-md mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-9xl font-century-gothic text-brand-cyan-dark mb-4">
                404
              </h1>
              <h2 className="text-3xl lg:text-4xl font-century-gothic text-brand-dark mb-4">
                Page Not Found
              </h2>
              <p className="text-brand-text-gray font-century-gothic mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
              </p>
            </div>
            
            <Link
              href="/"
              className="inline-block bg-brand-teal text-white px-8 py-3 rounded-md font-century-gothic hover:bg-brand-cyan transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
