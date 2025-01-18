import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            <a href="#">MyLogo</a>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-500 transition">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 transition">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 transition">
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 transition">
              Contact
            </a>
          </nav>

          {/* Call-to-Action Button */}
          <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="/LoginUser"
                className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white"
              >
                Sign in
              </a>

              <a
                href="/SignUp"
                className="rounded-lg bg-primary px-7 py-3 text-base font-medium text-white hover:bg-opacity-90"
              >
                Sign Up
              </a>
            </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-800 hover:text-gray-600 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
