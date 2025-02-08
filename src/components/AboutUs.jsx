import React from 'react';

export default function AboutUs() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-200 my-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-gray-700 mt-4 text-xl max-w-2xl mx-auto">
            Experience the best car rental services with <span className="text-orange-500 font-semibold">Locamaroc</span>! We’re committed to making your journeys smooth, reliable, and memorable.
          </p>
        </div>

        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 lg:w-2/5">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              At <span className="text-orange-500 font-semibold">Locamaroc</span>, we specialize in providing high-quality vehicles for rent, tailored to your needs. Whether you're exploring the city, heading to a business meeting, or embarking on a road trip, we’ve got you covered.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              With a focus on customer satisfaction, we offer flexible options like professional drivers, self-drive rentals, and even driving lessons. Our mission is to make renting a car seamless, affordable, and accessible.
            </p>
          </div>

          <div className="w-full md:w-1/2 lg:w-3/5 mt-8 md:mt-0">
            <img
              src="https://images.expertreviews.co.uk/wp-content/uploads/2022/09/best-car-rental-uk_lead.jpg"
              alt="About Us"
              className="rounded-xl shadow-2xl "
            />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Wide Selection of Cars
            </h4>
            <p className="text-gray-700 mt-3 text-lg">
              From economy to luxury, we offer vehicles to suit every budget and preference.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Flexible Options
            </h4>
            <p className="text-gray-700 mt-3 text-lg">
              Rent with or without a driver, and choose from hourly, daily, or long-term rentals.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Exceptional Support
            </h4>
            <p className="text-gray-700 mt-3 text-lg">
              Our team is here to assist you 24/7 with any inquiries or support you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}