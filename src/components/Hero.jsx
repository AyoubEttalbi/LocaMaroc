import React from 'react';
import Navbar from './Navbar';
import herocar from '../assets/herocar.png';
import { FaCar, FaStar, FaMapMarkerAlt } from 'react-icons/fa'; 
import Services from './Services';
import Footer from './Footer';
import AboutUs from './AboutUs';

export default function Hero() {
  return (
    <section>
      <Navbar />
      <div className="relative flex h-screen items-center justify-center">
        <div
          className="absolute inset-0 -z-20 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${herocar})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        
        <div className="inset-0 z-30 absolute mt-16 text-white text-center">
          <h1 className="text-5xl font-semibold">Find your dream car here</h1>
          <p className="mt-4 text-xl">Browse through our wide selection of top-rated cars</p>

          
          <div className="flex justify-center mt-6">
            <button className="bg-orange-500 text-white py-3 px-8 rounded-lg text-lg flex items-center space-x-2">
              <FaCar />
              <span>Browse Cars</span>
            </button>
          </div>
        </div>

      
        <div className="absolute inset-x-0 bottom-5 z-30 flex justify-center ">
          <input
            type="text"
            placeholder="Search your dream car..."
            className="py-2 px-6 rounded-l-lg text-black focus:outline-none bg-white"
          />
          <button className="bg-orange-500 text-white py-2 px-6 rounded-r-lg">
            Search
          </button>
        </div>
      </div>

    
      <div className="py-16 bg-gray-950">
        <h2 className="text-3xl font-semibold text-center text-gray-100">Featured Cars for Rent</h2>
        <div className="flex justify-center gap-8 mt-8">
         
          <div className="w-1/4 bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=258L&client=byo&paint=P0300&fabric=FLKSW&sa=S01MA,S01TH,S0302,S0319,S0322,S03MF,S0415,S0416,S0453,S04GQ,S04HB,S04MC,S04NB,S05AC,S05AZ,S06AC,S06AK,S06C4,S06NW,S06U3,S06WD,S0712,S0760,S0776,S07M9,S07MA&quality=70&bkgnd=transparent&resp=png&angle=60"alt="Car" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-bold mt-4">Luxury Sedan</h3>
            <p className="text-gray-600 mt-2">From $50/day</p>
            <button className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-lg">Rent Now</button>
          </div>
          <div className="w-1/4 bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="data:image/jpeg;base64,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"alt="Car" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-bold mt-4">Sports Car</h3>
            <p className="text-gray-600 mt-2">From $100/day</p>
            <button className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-lg">Rent Now</button>
          </div>
        </div>
      </div>

     <AboutUs />

      <div className="pb-16 bg-black">
        <h2 className="text-3xl font-semibold text-center text-gray-100">How It Works</h2>
        <div className="flex justify-center gap-12 mt-8">
          <div className="w-1/3 text-center">
            <FaCar className="text-5xl text-orange-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-gray-100">Choose a Car</h3>
            <p className="mt-2 text-gray-100">Browse our selection of available cars for rent.</p>
          </div>
          <div className="w-1/3 text-center">
            <FaMapMarkerAlt className="text-5xl text-orange-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-gray-100">Pick a Location</h3>
            <p className="mt-2">Select a pickup location that’s convenient for you.</p>
          </div>
          <div className="w-1/3 text-center">
            <FaStar className="text-5xl text-orange-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-gray-100">Enjoy the Ride</h3>
            <p className="mt-2">Drive away with the car of your dreams!</p>
          </div>
        </div>
      </div>

      <Services />

      <div className="py-16 bg-gray-100">
  <h2 className="text-3xl font-semibold text-center text-gray-800">What Our Customers Say</h2>
  <div className="flex justify-center gap-8 mt-8">
    <div className="w-1/3 bg-white p-6 rounded-lg shadow-lg">
      <p className="text-lg text-gray-600">
        "The process was smooth and easy. The car was in perfect condition. Highly recommend!"
      </p>
      <div className="mt-4 flex items-center gap-4">
        <img
          src="https://media.licdn.com/dms/image/C4D03AQFewkQzfdNSDg/profile-displayphoto-shrink_800_800/0/1557493676594?e=2147483647&v=beta&t=aAIvwGj1DZhKCCaxopm5BVAmgiq6-mfKiM4s10qn6a8" 
          alt="John Doe" 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <span className="block font-semibold">John Doe</span>
          <div className="flex text-orange-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>
    </div>
    <div className="w-1/3 bg-white p-6 rounded-lg shadow-lg">
      <p className="text-lg text-gray-600">
        "Excellent customer service. The car was delivered on time, and I had a blast driving it!"
      </p>
      <div className="mt-4 flex items-center gap-4">
        <img
          src="https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person.jpg" 
          alt="Jane Smith" 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <span className="block font-semibold">Jane Smith</span>
          <div className="flex text-orange-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      
      

      
      <Footer />
    </section>
  );
}
