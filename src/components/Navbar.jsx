import React, { useState } from "react";
import { CiShop } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/LocaMaroc.png";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAccountMenuOpen, setAccountMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md p-4 flex justify-around items-center text-gray-200 relative">
      <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="LocaMaroc" width={200} />
      </Link>

      <div className="hidden md:flex space-x-8">
        <Link to="/" className="hover:text-red-500">Home</Link>
        <Link to="/cars" className="hover:text-red-500">Cars for Rent</Link>
        <Link to="/pricing" className="hover:text-red-500">Pricing</Link>
        <Link to="/services" className="hover:text-red-500">Our Services</Link>
        <Link to="/about" className="hover:text-red-500">About Us</Link>
        <Link to="/contact" className="hover:text-red-500">Contact Us</Link>
      </div>

      <div className="hidden md:flex items-center space-x-4 relative text-xl">
        <button
          onClick={() => setAccountMenuOpen(!isAccountMenuOpen)}
          className="hover:text-red-500 flex items-center space-x-2"
        >
          <FaRegUserCircle />
          <span>Account</span>
        </button>
        {isAccountMenuOpen && (
          <div className="absolute right-0 mt-32 bg-gray-200 text-gray-800 rounded-md shadow-lg w-48">
            <Link
              to="/login"
              className="block px-4 py-2 hover:bg-gray-700 hover:text-red-500"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block px-4 py-2 hover:bg-gray-700 hover:text-red-500"
            >
              Sign Up
            </Link>
          </div>
        )}
        <Link to="/cart" className="relative hover:text-red-500 text-4xl">
          <CiShop />
        </Link>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="text-red-500"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 shadow-md flex flex-col space-y-4 p-4 md:hidden">
          <Link to="/" className="hover:text-red-500">Home</Link>
          <Link to="/cars" className="hover:text-red-500">Cars for Rent</Link>
          <Link to="/pricing" className="hover:text-red-500">Pricing</Link>
          <Link to="/services" className="hover:text-red-500">Our Services</Link>
          <Link to="/about" className="hover:text-red-500">About Us</Link>
          <Link to="/contact" className="hover:text-red-500">Contact Us</Link>
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => setAccountMenuOpen(!isAccountMenuOpen)}
              className="hover:text-red-500 flex items-center space-x-2"
            >
              <FaRegUserCircle />
              <span>Account</span>
            </button>
            {isAccountMenuOpen && (
              <div className="mt-2 bg-gray-200 text-gray-200 rounded-md shadow-lg w-48">
                <Link
                  to="/login"
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-red-500"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-red-500"
                >
                  Sign Up
                </Link>
              </div>
            )}
            <Link to="/cart" className="relative hover:text-red-500">
              <CiShop />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}