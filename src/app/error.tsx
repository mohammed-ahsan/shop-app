"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="max-w-md mx-auto text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-12 h-12 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h1 className="text-3xl lg:text-4xl font-century-gothic text-brand-dark mb-4">
                Oops! Something went wrong
              </h1>
              <p className="text-brand-text-gray font-century-gothic mb-8">
                {error.message || "We encountered an error while loading this page."}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={reset}
                className="bg-brand-teal text-white px-8 py-3 rounded-md font-century-gothic hover:bg-brand-cyan transition-colors"
              >
                Try Again
              </button>
              <Link
                href="/"
                className="bg-white border-2 border-brand-teal text-brand-teal px-8 py-3 rounded-md font-century-gothic hover:bg-brand-teal hover:text-white transition-colors"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
