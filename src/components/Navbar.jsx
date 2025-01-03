import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../pics/Logo.png"; // remove or update if using a URL instead
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  // State to toggle mobile menu
  const [isOpen, setIsOpen] = useState(false);
  // State to toggle the Test & Services dropdown (desktop)
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-white to-gray-100 border-b border-gray-200 fixed w-full z-10">
      {/* <nav className="bg-blue-100 border-b border-gray-200 fixed w-full z-10"> */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* LOGO + BRAND */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img
                src={Logo}
                alt="My Brand Logo"
                className="h-16 w-auto" // adjust as needed
              />
            </Link>
            <Link to="/" className="text-2xl font-bold text-gray-800">
              MDC
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium"
              >
                About
              </Link>
              {/* DROPDOWN for Test & Services */}
              <div
                className="relative inline-block"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium focus:outline-none"
                  type="button"
                >
                  <div className="flex items-center space-x-2">
                    <span>Test & Services</span>
                    <ChevronDown className="h-5 w-5 mt-[2px]" />
                  </div>
                </button>

                {servicesOpen && (
                  <div
                    className="
        absolute 
        top-full  /* so it sits right below the button */
        left-0 
        w-48 
        bg-white 
        rounded-md 
        shadow-lg 
        border 
        border-gray-100
      "
                  >
                    <Link
                      to="/test-and-services/blood-test"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
                    >
                      Blood Test
                    </Link>
                    <Link
                      to="/test-and-services/urine-test"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Urine Test
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button
              onClick={handleToggle}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 
                         hover:text-gray-500 hover:bg-gray-200 focus:outline-none 
                         focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 
                         focus:ring-gray-300"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon - hamburger or close */}
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div
          className="md:hidden bg-gradient-to-r from-white to-gray-100  border-t border-gray-200"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            {/* Test & Services (mobile) */}
            <Link
              to="/test-and-services"
              className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Test & Services
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
