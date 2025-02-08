import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cars from './components/Cars';
import Pricing from './components/Pricing';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Cart from './components/Cart';

export default function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        {/* <Hero /> */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}