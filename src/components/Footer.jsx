import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-200 border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upper row: brand & social icons */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand / Logo */}
          <div className="mb-4 md:mb-0">
            <Link
              to="/"
              className="text-2xl font-bold text-gray-800 hover:text-gray-600"
              // className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent hover:text-gray-600"
            >
              Mariam Diagnostic Center
            </Link>{" "}
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https:/facebook.com/mariamdiagnosticcenter"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            {/* facebook icon */}
            <a
              href="https://x.com/mdcpk"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <FaXTwitter size={20} />
            </a>
            {/* twitter */}
            <a
              href="https://www.instagram.com/mariamdiagnosticcenter/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              <FaInstagram size={25} />
            </a>
            <a
              href="https://www.linkedin.com/company/mariam-diagnostic-center"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-blue-700 transition-colors"
            >
              <FaLinkedinIn size={25} />
            </a>
          </div>
        </div>

        {/* Separator line */}
        <hr className="my-6 border-gray-200" />

        {/* Lower row: quick links & copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Footer Links */}
          <ul className="flex flex-wrap space-x-6 text-gray-600 mb-4 md:mb-0">
            <li>
              <Link
                to="/about"
                className="hover:text-gray-900 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/test-and-services"
                className="hover:text-gray-900 transition-colors"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-gray-900 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} MDC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
