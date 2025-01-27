import { FaCarSide, FaUserTie, FaChalkboardTeacher } from 'react-icons/fa';
import React from 'react';
export default function Services() {
  return (
    <div className="py-16 bg-gray-200">
      <h2 className="text-3xl font-semibold text-center text-gray-800">Our Services</h2>
      <p className="text-center text-gray-600 mt-4">
        Choose the perfect service to meet your needs, whether it's self-driving or professional assistance.
      </p>
      <div className="flex justify-center gap-8 mt-8 flex-wrap">
        {/* Service Card 1 */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg text-center">
          <FaUserTie className="text-6xl text-orange-500 mx-auto" />
          <h3 className="text-xl font-bold mt-4">Reserve a Professional Driver</h3>
          <p className="text-gray-600 mt-2">
            Relax and enjoy the ride with a licensed professional driver at your service.
          </p>
          <button className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-lg">
            Learn More
          </button>
        </div>

        {/* Service Card 2 */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg text-center">
          <FaCarSide className="text-6xl text-orange-500 mx-auto" />
          <h3 className="text-xl font-bold mt-4">Reserve Only the Car</h3>
          <p className="text-gray-600 mt-2">
            Enjoy the freedom to drive yourself with our wide range of self-drive rental cars.
          </p>
          <button className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-lg">
            Learn More
          </button>
        </div>

        {/* Service Card 3 */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg text-center">
          <FaChalkboardTeacher className="text-6xl text-orange-500 mx-auto" />
          <h3 className="text-xl font-bold mt-4">Learn How to Drive</h3>
          <p className="text-gray-600 mt-2">
            Sign up for driving lessons with our certified instructors and gain confidence behind the wheel.
          </p>
          <button className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-lg">
            Learn More
          </button>
        </div>

        {/* Optional: Service Card 4 */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg text-center">
          <FaCarSide className="text-6xl text-orange-500 mx-auto" />
          <h3 className="text-xl font-bold mt-4">Luxury Car Experience</h3>
          <p className="text-gray-600 mt-2">
            Treat yourself to a luxury experience with our premium car rental options.
          </p>
          <button className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
