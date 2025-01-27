import React, { useState } from "react";
import { CiShop } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/LocaMaroc.png"
export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAccountMenuOpen, setAccountMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md p-4 flex justify-around items-center text-gray-200 relative">
      
      <a href="/" className="flex items-center space-x-2">
        {/* <span className="font-bold text-lg text-red-500">LocaMaroc</span> */}
        <img src={logo} alt="LocaMaroc" width={200}/>
      </a>

      
      <div className="hidden md:flex space-x-8">
        <a href="/" className="hover:text-red-500">Home</a>
        <a href="/cars" className="hover:text-red-500">Cars for Rent</a>
        <a href="/pricing" className="hover:text-red-500">Pricing</a>
        <a href="/services" className="hover:text-red-500">Our Services</a>
        <a href="/about" className="hover:text-red-500">About Us</a>
        <a href="/contact" className="hover:text-red-500">Contact Us</a>
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
            <a
              href="/login"
              className="block px-4 py-2 hover:bg-gray-700 hover:text-red-500 "
            >
              Login
            </a>
            <a
              href="/signup"
              className="block px-4 py-2 hover:bg-gray-700 hover:text-red-500"
            >
              Sign Up
            </a>
          </div>
        )}
        <a href="/cart" className="relative hover:text-red-500 text-4xl">
          <span className="material-icons ">
            <CiShop className=""/>
          </span>
        </a>
      </div>

     
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="text-red-500"
        >
          <span className="material-icons">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </span>
        </button>
      </div>

     
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 shadow-md flex flex-col space-y-4 p-4 md:hidden">
          <a href="/" className="hover:text-red-500">Home</a>
          <a href="/cars" className="hover:text-red-500">Cars for Rent</a>
          <a href="/pricing" className="hover:text-red-500">Pricing</a>
          <a href="/services" className="hover:text-red-500">Our Services</a>
          <a href="/about" className="hover:text-red-500">About Us</a>
          <a href="/contact" className="hover:text-red-500">Contact Us</a>
          
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
                <a
                  href="/login"
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-red-500"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-red-500"
                >
                  Sign Up
                </a>
              </div>
            )}
            <a href="/cart" className="relative hover:text-red-500">
              <span className="material-icons">
                <CiShop />
              </span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
