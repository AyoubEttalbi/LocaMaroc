import React, { useState } from 'react';
import { FaBabyCarriage, FaPlus, FaCheck } from 'react-icons/fa';
import Navbar from './Navbar';
import mercedeslogo from '../assets/mercedes-logo.png'
import AudiA6 from "../assets/audiA6.png"
export default function Cars() {
  const popularCars = [
    {
      id: 1,
      name: 'BMW Series 5',
      brand: 'BMW',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
      image: 'https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=258L&client=byo&paint=P0300&fabric=FLKSW&quality=70&bkgnd=transparent&resp=png&angle=60',
      description: 'Luxury and performance in one package.',
      price: '$120/day',
    },
    {
      id: 2,
      name: 'Mercedes C-Class',
      brand: 'Mercedes',
      logo: {mercedeslogo},
      image: 'https://www.motortrend.com/uploads/sites/10/2018/11/2019-mercedes-benz-c-class-c300-sedan-angular-front.png',
      description: 'Experience premium driving with advanced features.',
      price: '$140/day',
    },
    {
      id: 3,
      name: 'Audi A6',
      brand: 'Audi',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Audi_logo.svg',
      image: {AudiA6},
      description: 'A stylish executive car with top-tier performance.',
      price: '$130/day',
    },
  ];

  const [selectedBrand, setSelectedBrand] = useState('All');

  const filteredCars =
    selectedBrand === 'All' ? popularCars : popularCars.filter(car => car.brand === selectedBrand);

  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      <div className="py-8 px-4 bg-gray-950">
        <h2 className="text-2xl font-semibold text-center text-gray-100 mb-6">Filter by Brand</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          {[{ brand: 'All', logo: '' }, ...popularCars.map(car => ({ brand: car.brand, logo: car.logo }))]
            .filter((v, i, a) => a.findIndex(t => t.brand === v.brand) === i) 
            .map(({ brand, logo }) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`py-2 px-6 rounded-lg transition-colors flex items-center gap-2 ${
                  selectedBrand === brand ? 'bg-orange-500 text-white' : 'bg-gray-800 text-gray-100 hover:bg-gray-700'
                }`}
              >
                {logo && <img src={logo} alt={brand} className="w-6 h-6" />}
                <span>{brand}</span>
              </button>
            ))}
        </div>
      </div>

      <div className="py-12 px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-100 mb-8">Popular Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.length > 0 ? (
            filteredCars.map(car => <CarCard key={car.id} car={car} />)
          ) : (
            <p className="text-center text-gray-400">No cars found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function CarCard({ car }) {
  const [extras, setExtras] = useState([]);

  const handleAddExtra = extra => {
    setExtras([...extras, extra]);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded-lg mb-4" />
      <div className="flex items-center gap-2 mb-2">
        <img src={car.logo} alt={car.brand} className="w-6 h-6" />
        <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
      </div>
      <p className="text-gray-700 mb-4">{car.description}</p>
      <p className="text-lg font-semibold text-orange-500 mb-4">{car.price}</p>

      <div className="mb-4">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Add Extras</h4>
        <div className="flex gap-2">
          <button
            onClick={() => handleAddExtra('Baby Chair')}
            className="bg-gray-200 text-gray-900 py-1 px-3 rounded-lg flex items-center gap-2 hover:bg-gray-300 transition-colors"
          >
            <FaBabyCarriage />
            <span>Baby Chair</span>
          </button>
          <button
            onClick={() => handleAddExtra('GPS')}
            className="bg-gray-200 text-gray-900 py-1 px-3 rounded-lg flex items-center gap-2 hover:bg-gray-300 transition-colors"
          >
            <FaPlus />
            <span>GPS</span>
          </button>
        </div>
        {extras.length > 0 && (
          <div className="mt-2">
            <p className="text-gray-700">Selected Extras:</p>
            <ul className="list-disc list-inside text-gray-700">
              {extras.map((extra, index) => (
                <li key={index}>{extra}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <button className="w-full bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
        <FaCheck />
        <span>Reserve Now</span>
      </button>
    </div>
  );
}
