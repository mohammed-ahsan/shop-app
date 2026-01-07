import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Main Footer Content */}
      <div className="bg-brand-gray py-12 lg:py-16 px-4">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Column 1 - Contact Info */}
            <div className="flex flex-col gap-4">
              {/* Logo */}
              <svg width="150" height="48" viewBox="0 0 133 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
                <path d="M0 12C8.00575 12 20.5 12 20.5 12L29.5 35.5L38 12L46 35.5C46 35.5 51.79 21.1773 55.5 12M63 12V35.5M72 35.5C72 26.3227 72 12 72 12L87.5 34.5V12" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="30" cy="44.5" r="3.5" fill="white"/>
                <circle cx="47" cy="44.5" r="3.5" fill="white"/>
                <circle cx="63" cy="3.5" r="3.5" fill="white"/>
                <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Roboto" fontSize="19" letterSpacing="0em">
                  <tspan x="93.5" y="27.4941">store</tspan>
                </text>
              </svg>
              
              <div>
                <p className="text-brand-cyan-dark text-lg font-century-gothic mb-2">
                  Got questions? Call us 24/7!
                </p>
                <p className="text-white text-sm font-century-gothic leading-tight">
                  03 111 666 144<br />
                  0317 1777015.
                </p>
              </div>
              
              <div>
                <p className="text-brand-cyan-dark text-lg font-century-gothic mb-1">
                  Contact info
                </p>
                <p className="text-white text-sm font-century-gothic">
                  info@winstore.pk
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-6 mt-2">
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
                    <path d="M11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0ZM16.5 8.8C16.445 14.3 13.2 16.5 8.8 16.5C7.15 16.5 5.61 16.005 4.4 15.18C6.27 15.345 8.03 14.795 9.35 13.75C8.03 13.695 6.93 12.815 6.545 11.605C7.095 11.715 7.645 11.66 8.14 11.55C6.765 11.275 5.72 10.065 5.72 8.635C6.16 8.855 6.655 9.02 7.205 9.02C6.655 8.635 5.995 7.865 5.995 6.93C5.995 6.435 6.105 5.995 6.27 5.61C7.81 7.48 10.065 8.745 12.65 8.855C12.21 6.71 13.86 4.95 15.84 4.95C16.775 4.95 17.655 5.335 18.26 5.94C19.03 5.83 19.745 5.555 20.35 5.225C20.13 5.94 19.635 6.49 19.03 6.82C19.69 6.765 20.295 6.6 20.9 6.38C20.35 7.04 19.69 7.59 18.975 8.03C18.975 8.25 18.975 8.525 18.975 8.745C18.975 13.75 15.18 19.525 8.03 19.525C5.94 19.525 4.015 18.92 2.42 17.875C4.73 18.15 7.04 17.435 8.8 15.895C7.37 15.84 6.16 14.96 5.72 13.75C6.325 13.86 6.93 13.805 7.48 13.64C5.995 13.31 4.84 12.045 4.84 10.505C5.28 10.725 5.775 10.89 6.325 10.945C4.84 9.955 4.345 8.03 5.115 6.38C6.765 8.305 9.185 9.57 11.935 9.735C11.44 7.645 12.87 5.61 15.07 5.61C15.95 5.61 16.775 5.995 17.38 6.545C18.095 6.435 18.755 6.16 19.36 5.83C19.14 6.545 18.645 7.095 18.04 7.48C18.7 7.37 19.305 7.205 19.91 6.93C19.36 7.535 18.7 8.14 17.985 8.58C17.985 8.8 17.985 9.02 17.985 9.24C17.985 13.97 14.52 19.525 7.755 19.525Z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2 - Trending */}
            <div className="flex flex-col gap-5">
              <h3 className="text-brand-cyan-dark text-xl font-century-gothic">Trending</h3>
              <nav className="flex flex-col gap-3">
                <Link href="/installments" className="text-white text-sm font-century-gothic hover:text-brand-cyan transition-colors">
                  Installments
                </Link>
                <Link href="/electronics" className="text-white text-sm font-century-gothic hover:text-brand-cyan transition-colors">
                  Electronics
                </Link>
                <Link href="/grocery" className="text-white text-sm font-century-gothic hover:text-brand-cyan transition-colors">
                  Grocery
                </Link>
                <Link href="/health-beauty" className="text-white text-sm font-century-gothic hover:text-brand-cyan transition-colors">
                  Health & Beauty
                </Link>
                <Link href="/home-appliances" className="text-white text-sm font-century-gothic hover:text-brand-cyan transition-colors">
                  Home Appliances
                </Link>
                <Link href="/mobile-accessories" className="text-white text-sm font-century-gothic hover:text-brand-cyan transition-colors">
                  Mobile Accessories
                </Link>
              </nav>
            </div>

            {/* Column 3 - Information */}
            <div className="flex flex-col gap-5">
              <h3 className="text-brand-cyan-dark text-xl font-century-gothic">Information</h3>
              <nav className="flex flex-col gap-3">
                <Link href="/about" className="text-white text-sm font-century-gothic hover:text-brand-cyan transition-colors">
                  About Us
                </Link>
                <Link href="/contact" className="text-white text-sm font-century-gothic hover:text-brand-cyan transition-colors">
                  Contact Us
                </Link>
                <Link href="/faqs" className="text-white text-sm font-century-gothic hover:text-brand-cyan transition-colors">
                  FAQs
                </Link>
                <Link href="/shipping" className="text-white text-sm font-century-gothic hover:text-brand-cyan transition-colors">
                  Shipping & Return
                </Link>
                <Link href="/privacy" className="text-white text-sm font-century-gothic hover:text-brand-cyan transition-colors">
                  Privacy policy
                </Link>
                <Link href="/terms" className="text-white text-sm font-century-gothic hover:text-brand-cyan transition-colors">
                  Terms & Conditions
                </Link>
              </nav>
            </div>

            {/* Column 4 - Customer Care */}
            <div className="flex flex-col gap-5">
              <h3 className="text-brand-cyan-dark text-xl font-century-gothic">Customer Care</h3>
              <nav className="flex flex-col gap-3">
                <Link href="/account" className="text-white text-sm font-century-gothic hover:text-brand-cyan transition-colors">
                  My Account
                </Link>
                <Link href="/track-order" className="text-white text-sm font-century-gothic hover:text-brand-cyan transition-colors">
                  Track Your Order
                </Link>
                <Link href="/recently-viewed" className="text-white text-sm font-century-gothic hover:text-brand-cyan transition-colors">
                  Recently Viewed
                </Link>
                <Link href="/wishlist" className="text-white text-sm font-century-gothic hover:text-brand-cyan transition-colors">
                  Wishlist
                </Link>
                <Link href="/compare" className="text-white text-sm font-century-gothic hover:text-brand-cyan transition-colors">
                  Compare
                </Link>
                <Link href="/become-vendor" className="text-white text-sm font-century-gothic hover:text-brand-cyan transition-colors">
                  Become a Vendor
                </Link>
              </nav>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-wrap items-center gap-3 mt-12">
            <div className="w-24 h-14 bg-white rounded-md flex items-center justify-center p-2">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/c3e744486c7018dc8610cf4769cd3bbb36feee61?width=180" alt="Visa" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="w-24 h-14 bg-white rounded-md flex items-center justify-center p-2">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/52293847cea6bcdc39aca3c11c9c49c043ab3d0c?width=170" alt="MasterCard" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="w-24 h-14 bg-white rounded-md flex items-center justify-center p-2">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/16e2dbf64172105b1bdbff97192bfbc911118384?width=186" alt="Cash on Delivery" className="max-w-full max-h-full object-contain rounded-lg" />
            </div>
            <div className="w-24 h-14 bg-white rounded-md flex items-center justify-center p-2">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/9f7d3970b32b3c5ebdbddf8e1ec9e3dae463c92a?width=168" alt="Installments" className="max-w-full max-h-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-brand-gray-dark py-5">
        <div className="container mx-auto px-4 lg:px-16">
          <p className="text-white text-center text-lg font-century-gothic">
            © 2021 Winstore. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
