import Link from "next/link";
import { Search, ChevronDown, User, Heart, ShoppingCart, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top Header - Teal Dark Background */}
      <div className="bg-brand-teal-dark text-white">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center justify-between py-3 lg:py-4 gap-4">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <div className="flex items-center gap-2">
                <svg width="150" height="48" viewBox="0 0 133 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 12C8.00575 12 20.5 12 20.5 12L29.5 35.5L38 12L46 35.5C46 35.5 51.79 21.1773 55.5 12M63 12V35.5M72 35.5C72 26.3227 72 12 72 12L87.5 34.5V12" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="30" cy="44.5" r="3.5" fill="white"/>
                  <circle cx="47" cy="44.5" r="3.5" fill="white"/>
                  <circle cx="63" cy="3.5" r="3.5" fill="white"/>
                  <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Roboto" fontSize="19" letterSpacing="0em">
                    <tspan x="93.5" y="27.4941">store</tspan>
                  </text>
                </svg>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="w-full lg:w-[534px] relative">
              <div className="bg-white rounded-md flex items-stretch overflow-hidden">
                {/* Category Dropdown */}
                <div className="flex items-center gap-2 px-4 border-r border-gray-300">
                  <span className="text-brand-text-light text-sm font-century-gothic whitespace-nowrap">All categories</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
                
                {/* Search Input */}
                <input
                  type="text"
                  placeholder="Search for products"
                  className="flex-1 px-4 py-2 text-sm text-gray-700 font-century-gothic focus:outline-none"
                />
                
                {/* Search Button */}
                <button className="bg-[#B6B6B6] px-4 hover:bg-gray-400 transition-colors">
                  <Search className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6">
              {/* Call Us */}
              <div className="hidden lg:flex flex-col items-end">
                <span className="text-[9px] font-century-gothic uppercase">Call Us Now</span>
                <div className="flex items-center gap-2 mt-1">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.72727 10.1218V8.88064C1.72727 4.5947 5.21412 1.10791 9.5 1.10791C13.7859 1.10791 17.2727 4.5947 17.2727 8.88064V10.1218C18.3208 10.9104 19 12.1644 19 13.574C19 15.955 17.0629 17.8922 14.6818 17.8922C14.2049 17.8922 13.8182 17.5055 13.8182 17.0285V10.1194C13.8182 9.64248 14.2049 9.2558 14.6818 9.2558C14.9775 9.2558 15.2663 9.2858 15.5455 9.34274V8.88069C15.5455 5.54723 12.8335 2.83524 9.5 2.83524C6.16654 2.83524 3.45455 5.54723 3.45455 8.88069V9.34274C3.73367 9.2858 4.02247 9.2558 4.31818 9.2558C4.79514 9.2558 5.18182 9.64248 5.18182 10.1194V17.0285C5.18182 17.5055 4.79514 17.8922 4.31818 17.8922C1.93714 17.8922 0 15.955 0 13.574C0 12.1643 0.679163 10.9104 1.72727 10.1218Z" fill="white"/>
                  </svg>
                  <span className="text-sm font-century-gothic">+011 5827918</span>
                </div>
              </div>

              {/* Sign In */}
              <Link href="/signin" className="hidden lg:flex flex-col items-center">
                <span className="text-sm font-century-gothic capitalize">Sign In</span>
              </Link>

              {/* Icons */}
              <div className="flex items-center gap-4 lg:gap-6">
                <Link href="/profile" className="hover:opacity-80 transition-opacity">
                  <User className="w-6 h-6" />
                </Link>
                <Link href="/wishlist" className="hover:opacity-80 transition-opacity">
                  <Heart className="w-6 h-6" />
                </Link>
                <Link href="/cart" className="relative hover:opacity-80 transition-opacity">
                  <ShoppingCart className="w-6 h-6" />
                  <span className="absolute -top-2 -right-2 bg-brand-yellow text-black text-xs font-century-gothic w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                    3
                  </span>
                  <span className="hidden lg:block text-sm font-century-gothic mt-1 text-center">Cart</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Darker Teal */}
      <div className="bg-brand-teal-darker shadow-lg">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="flex items-center justify-between py-3">
            {/* Browse By Category & Navigation Links */}
            <div className="flex items-center gap-6 lg:gap-9">
              {/* Mobile Menu Button */}
              <button className="lg:hidden text-white">
                <Menu className="w-6 h-6" />
              </button>

              {/* Browse By Category */}
              <div className="hidden lg:flex items-center gap-3 px-2 py-2 rounded-lg">
                <div className="flex flex-col gap-1">
                  <div className="w-3 h-0.5 bg-white"></div>
                  <div className="w-3 h-0.5 bg-white"></div>
                  <div className="w-3 h-0.5 bg-white"></div>
                </div>
                <span className="text-white text-[17px] font-century-gothic">Browse By Category</span>
              </div>

              {/* Navigation Links */}
              <nav className="hidden lg:flex items-center gap-9">
                <Link href="/" className="text-white text-sm font-century-gothic hover:text-brand-cyan transition-colors">
                  Home
                </Link>
                <Link href="/installments" className="text-white text-sm font-century-gothic hover:text-brand-cyan transition-colors">
                  Easy Monthly Installments
                </Link>
                <Link href="/brands" className="text-white text-sm font-century-gothic hover:text-brand-cyan transition-colors">
                  Shop by Brands
                </Link>
                <Link href="/vendor" className="text-white text-sm font-century-gothic hover:text-brand-cyan transition-colors">
                  Become a Vendor
                </Link>
              </nav>
            </div>

            {/* Social Media Icons */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="#" className="text-white hover:text-brand-cyan transition-colors">
                <svg width="11" height="22" viewBox="0 0 11 22" fill="currentColor">
                  <path d="M8.99175 3.65292H11V0.154917C10.6535 0.10725 9.46196 0 8.07424 0C5.17874 0 3.19523 1.82142 3.19523 5.16908V8.25H0V12.1605H3.19523V22H7.11274V12.1614H10.1787L10.6654 8.25092H7.11182V5.55683C7.11274 4.42658 7.41705 3.65292 8.99175 3.65292Z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-brand-cyan transition-colors">
                <svg width="22" height="18" viewBox="0 0 22 18" fill="currentColor">
                  <path d="M22 4.13092C21.1819 4.49231 20.3101 4.73185 19.4012 4.84815C20.3363 4.286 21.0499 3.40262 21.3854 2.33785C20.5136 2.86123 19.5511 3.23092 18.5254 3.43723C17.6976 2.54969 16.5179 2 15.2309 2C12.7339 2 10.7236 4.04092 10.7236 6.54292C10.7236 6.90292 10.7539 7.24908 10.8281 7.57862C7.0785 7.39446 3.7606 5.58477 1.5317 2.828C1.1426 3.50785 0.9144 4.286 0.9144 5.12369C0.9144 6.69662 1.7188 8.09092 2.9177 8.89815C2.1931 8.88431 1.4822 8.67246 0.88 8.33877C0.88 8.35262 0.88 8.37062 0.88 8.38862C0.88 10.5957 2.4434 12.4289 4.4935 12.8512C4.1264 12.9523 3.7262 13.0008 3.311 13.0008C3.0222 13.0008 2.7307 12.9842 2.4571 12.9232C3.0415 14.7218 4.6998 16.0442 6.6715 16.0871C5.137 17.2958 3.1886 18.0242 1.0794 18.0242C0.7095 18.0242 0.3547 18.0075 0 17.9618C1.9979 19.2592 4.3656 20 6.919 20C15.2185 20 19.756 13.0769 19.756 7.076C19.756 6.87523 19.7491 6.68139 19.7395 6.48892C20.6346 5.84923 21.3867 5.05031 22 4.13092Z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-brand-cyan transition-colors">
                <svg width="23" height="22" viewBox="0 0 23 22" fill="currentColor">
                  <path d="M17.901 21.9532V21.9523H17.907V13.9181C17.907 9.98773 17.06 6.96008 12.4655 6.96008C10.2566 6.96008 8.7743 8.17224 8.1691 9.32141H8.1052V7.32702H3.7486V21.9523H8.2851V14.7104C8.2851 12.8036 8.6465 10.9598 11.0078 10.9598C13.3345 10.9598 13.3692 13.1359 13.3692 14.8327V21.9532H17.901Z"/>
                  <path d="M0.361526 7.32794H4.90345V21.9532H0.361526V7.32794Z"/>
                  <path d="M2.63063 0.046814C1.17842 0.046814 0 1.2252 0 2.67741C0 4.12962 1.17842 5.33265 2.63063 5.33265C4.08284 5.33265 5.26126 4.12962 5.26126 2.67741C5.26034 1.2252 4.08192 0.046814 2.63063 0.046814V0.046814Z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-brand-cyan transition-colors">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
                  <path d="M11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0ZM16.8 8.8H14.85C14.85 8.8 14.575 8.525 14.575 7.975V6.6C14.575 6.325 14.85 6.05 15.125 6.05H16.8V3.3H14.3C12.1 3.3 11 4.4 11 6.6V7.975C11 8.525 10.725 8.8 10.175 8.8H8.8V11.55H10.175C10.725 11.55 11 11.825 11 12.375V18.7H14.025V12.375C14.025 11.825 14.3 11.55 14.85 11.55H16.225L16.8 8.8Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
