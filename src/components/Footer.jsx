import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6">
       
        <div className="flex flex-wrap justify-between items-start">
          
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-orange-500">LocaMaroc</h2>
            <p className="text-gray-400 mt-4">
              We provide the best car rental services to make your journey unforgettable. Whether you're renting for a day or a month, we've got you covered!
            </p>
          </div>

          
          <div className="w-full md:w-1/3 mb-6 md:mb-0 ">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className='ml-5'>
              <li>
                <a href="#about" className="text-gray-400 hover:text-orange-500 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-500 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-500 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-orange-500 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

        
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: support@LocaMaroc.com</p>
            <p className="text-gray-400 mt-2">Phone: +123-456-7890</p>
            <p className="text-gray-400 mt-2">Location: 123 Main Street, Cityville</p>
          </div>
        </div>

        
        <div className="border-t border-gray-700 my-8"></div>

       
        <div className="flex flex-wrap justify-between items-center">
        
          <p className="text-gray-400 text-sm">
            &copy; 2025 LocaMaroc. All Rights Reserved.
          </p>

        
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-orange-500 transition text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-orange-500 transition text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-orange-500 transition text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-orange-500 transition text-xl"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
