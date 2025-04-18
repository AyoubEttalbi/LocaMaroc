import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  Car, 
  MapPin, 
  Filter, 
  Star, 
  Clock, 
  ChevronDown, 
  Navigation, 
  ShieldCheck,
  Info,
  Users,
  DollarSign,
  Wrench,
  Shield,
  CreditCard,
  PackageOpen,
  Truck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

// Importing local assets
import mercedesLogo from '../assets/mercedes-logo.png'; 
import bmwLogo from '../assets/audiA6.png'; 
import audiLogo from '../assets/audi-logo.png';

export default function CarRental() {
  // Car Inventory
  const carInventory = [
    {
      id: 1,
      name: 'BMW 5 Series',
      brand: 'BMW',
      logo: bmwLogo,
      image: 'https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=258L&client=byo&paint=P0300&fabric=FLKSW&quality=70&bkgnd=transparent&resp=png&angle=60',
      category: 'Executive',
      transmission: 'Automatic',
      fuelType: 'Hybrid',
      seats: 5,
      dailyRate: 180,
      features: ['Leather Seats', 'Navigation', 'Premium Sound'],
      rating: 4.7,
      availability: 5
    },
    {
      id: 2,
      name: 'Mercedes C-Class',
      brand: 'Mercedes',
      logo: mercedesLogo, 
      image: 'https://www.motortrend.com/uploads/sites/10/2018/11/2019-mercedes-benz-c-class-c300-sedan-angular-front.png',
      category: 'Executive',
      transmission: 'Automatic',
      fuelType: 'Diesel',
      seats: 4,
      dailyRate: 210,
      features: ['Panoramic Roof', 'Climate Control', 'Advanced Safety'],
      rating: 4.9,
      availability: 3
    },
    {
      id: 3,
      name: 'Audi A6',
      brand: 'Audi',
      logo: audiLogo,
      image: 'https://www.motortrend.com/uploads/sites/10/2018/11/2019-mercedes-benz-c-class-c300-sedan-angular-front.png', 
      category: 'Premium Sedan',
      transmission: 'Automatic',
      fuelType: 'Petrol',
      seats: 5,
      dailyRate: 195,
      features: ['Adaptive Suspension', 'Virtual Cockpit', 'Quattro Drive'],
      rating: 4.8,
      availability: 7
    }
  ];

  // Locations based on business requirements
  const pickupLocations = [
    { city: 'Casablanca', code: 'CAS' },
    { city: 'Marrakech', code: 'MRK' },
    { city: 'Rabat', code: 'RBT' },
    { city: 'Agadir', code: 'AGA' }
  ];

  // Accessories catalog
  const accessoriesCatalog = [
    {
      id: 'gps',
      name: 'GPS Navigation System',
      icon: <Navigation size={16} />,
      price: 15,
      description: 'Advanced GPS with real-time traffic updates'
    },
    {
      id: 'child-seat',
      name: 'Child Safety Seat',
      icon: <Shield size={16} />,
      price: 20,
      description: 'Certified child seat for maximum safety'
    },
    {
      id: 'extra-driver',
      name: 'Additional Driver',
      icon: <Users size={16} />,
      price: 25,
      description: 'Add an extra driver to your rental'
    },
    {
      id: 'roof-rack',
      name: 'Roof Rack',
      icon: <Truck size={16} />,
      price: 30,
      description: 'Additional cargo space for luggage and equipment'
    }
  ];

  // Insurance options
  const insuranceOptions = [
    {
      id: 'basic',
      name: 'Basic Coverage',
      price: 25,
      description: 'Mandatory minimum insurance',
      recommended: false
    },
    {
      id: 'standard',
      name: 'Standard Protection',
      price: 45,
      description: 'Comprehensive coverage with lower deductible',
      recommended: true
    },
    {
      id: 'premium',
      name: 'Premium Protection',
      price: 75,
      description: 'Full coverage with zero deductible and additional benefits',
      recommended: false
    }
  ];

  // State management
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [rentalPeriod, setRentalPeriod] = useState({
    startDate: null,
    endDate: null
  });
  const [selectedLocation, setSelectedLocation] = useState('');
  const [priceRange, setPriceRange] = useState([50, 300]);
  const [selectedAccessories, setSelectedAccessories] = useState([]);
  const [selectedInsurance, setSelectedInsurance] = useState(null);
  const [sortOption, setSortOption] = useState('price');
  const [isAccessoriesModalOpen, setIsAccessoriesModalOpen] = useState(false);

  // Filtering and sorting logic
  const filteredAndSortedCars = useMemo(() => {
    let result = carInventory.filter(car => 
      (selectedBrand === 'All' || car.brand === selectedBrand) &&
      car.dailyRate >= priceRange[0] &&
      car.dailyRate <= priceRange[1]
    );

    // Sorting logic
    switch(sortOption) {
      case 'rating':
        return result.sort((a, b) => b.rating - a.rating);
      case 'availability':
        return result.sort((a, b) => b.availability - a.availability);
      default:
        return result.sort((a, b) => a.dailyRate - b.dailyRate);
    }
  }, [selectedBrand, carInventory, priceRange, sortOption]);

  // Promotions component
  const Promotions = () => (
    <div className="bg-blue-50 p-4 rounded-lg mb-6 flex items-center">
      <Info className="text-blue-500 mr-4" />
      <div>
        <h3 className="font-bold text-blue-800">Special Offer</h3>
        <p className="text-blue-700">Book now and get 15% off on weekly rentals!</p>
      </div>
    </div>
  );

  // Accessories Modal Component
  const AccessoriesModal = ({ onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <div className="bg-white rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Add Accessories</h2>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-800"
            >
              Close
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center">
              <PackageOpen className="mr-2" /> Available Add-ons
            </h3>
            {accessoriesCatalog.map((accessory) => (
              <div 
                key={accessory.id} 
                className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center space-x-3">
                  {accessory.icon}
                  <div>
                    <h4 className="font-medium">{accessory.name}</h4>
                    <p className="text-sm text-gray-500">{accessory.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600 font-bold">${accessory.price}</span>
                  <input 
                    type="checkbox"
                    checked={selectedAccessories.includes(accessory.id)}
                    onChange={() => {
                      setSelectedAccessories(prev => 
                        prev.includes(accessory.id)
                          ? prev.filter(id => id !== accessory.id)
                          : [...prev, accessory.id]
                      );
                    }}
                    className="form-checkbox"
                  />
                </div>
              </div>
            ))}

            <div className="mt-4">
              <h3 className="font-semibold text-lg flex items-center mb-3">
                <Shield className="mr-2" /> Insurance Options
              </h3>
              {insuranceOptions.map((insurance) => (
                <div 
                  key={insurance.id} 
                  className={`border rounded-lg p-3 mb-2 ${
                    insurance.recommended ? 'border-blue-300 bg-blue-50' : ''
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">
                        {insurance.name}
                        {insurance.recommended && (
                          <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                            Recommended
                          </span>
                        )}
                      </h4>
                      <p className="text-sm text-gray-500">{insurance.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600 font-bold">${insurance.price}</span>
                      <input 
                        type="radio"
                        name="insurance"
                        checked={selectedInsurance === insurance.id}
                        onChange={() => setSelectedInsurance(insurance.id)}
                        className="form-radio"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Car Card Component
  const CarCard = ({ car }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
        <div className="relative">
          <img 
            src={car.image} 
            alt={car.name} 
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 right-4 flex space-x-2">
            <div className="bg-white/80 rounded-full p-2 flex items-center">
              <Star 
                className="text-orange-500" 
                fill="currentColor" 
                size={20} 
              />
              <span className="text-sm font-bold ml-1">{car.rating}</span>
            </div>
            <div className="bg-green-100 rounded-full p-2 flex items-center">
              <Users size={16} className="text-green-600 mr-1" />
              <span className="text-sm font-bold text-green-800">{car.availability}</span>
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center space-x-3">
              <img 
                src={car.logo} 
                alt={`${car.brand} logo`} 
                className="w-8 h-8 object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {car.name}
              </h3>
            </div>
            <div className="flex items-center">
              <DollarSign size={16} className="text-green-600 mr-1" />
              <span className="text-orange-600 font-bold text-lg">
                ${car.dailyRate}/day
              </span>
            </div>
          </div>

          {/* Car Details */}
          <div className="grid grid-cols-3 gap-2 mb-4 text-gray-600">
            <div className="flex items-center space-x-2">
              <Car size={16} />
              <span className="text-sm">{car.category}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span className="text-sm">{car.transmission}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Navigation size={16} />
              <span className="text-sm">{car.fuelType}</span>
            </div>
          </div>

          {/* Expandable Features */}
          <div className="border-t pt-3">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex justify-between items-center text-gray-600 hover:text-orange-600"
            >
              <span>View Features</span>
              <ChevronDown 
                size={20} 
                className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
              />
            </button>

            {isExpanded && (
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                {car.features.map((feature, index) => (
                  <li 
                    key={index} 
                    className="flex items-center space-x-2"
                  >
                    <ShieldCheck size={16} className="text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link 
            to={`/reservation/${car.id}`}
            className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            Reserve Now
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Promotions />

        <div className="mb-8 bg-white shadow-md rounded-xl p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Rent Your Perfect Car in Morocco
          </h1>
          
          {/* Advanced Filtering */}
          <div className="grid md:grid-cols-5 gap-4">
            <div>
              <label className="flex items-center text-gray-600 mb-2">
                <Filter size={16} className="mr-2" />
                Brand Filter
              </label>
              <select 
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                <option value="All">All Brands</option>
                {Array.from(new Set(carInventory.map(car => car.brand))).map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center text-gray-600 mb-2">
                <Calendar size={16} className="mr-2" />
                Pickup Date
              </label>
              <input 
                type="date" 
                className="w-full p-2 border rounded-lg"
                onChange={(e) => setRentalPeriod({...rentalPeriod, startDate: e.target.value})}
              />
            </div>

            <div>
              <label className="flex items-center text-gray-600 mb-2">
                <MapPin size={16} className="mr-2" />
                Pickup Location
              </label>
              <select 
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                <option value="">Select Location</option>
                {pickupLocations.map(location => (
                  <option key={location.code} value={location.code}>
                    {location.city} ({location.code})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center text-gray-600 mb-2">
                <DollarSign size={16} className="mr-2" />
                Price Range
              </label>
              <div className="flex items-center space-x-2">
                <input 
                  type="range" 
                  min="50" 
                  max="300" 
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
                <span className="text-sm">${priceRange[1]}</span>
              </div>
            </div>

            <div>
              <label className="flex items-center text-gray-600 mb-2">
                <Wrench size={16} className="mr-2" />
                Sort By
              </label>
              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                <option value="price">Price</option>
                <option value="rating">Rating</option>
                <option value="availability">Availability</option>
              </select>
            </div>
          </div>

          {/* Accessories and Insurance Quick Access */}
          <div className="mt-4 flex space-x-4">
            <button 
              onClick={() => setIsAccessoriesModalOpen(true)}
              className="flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-100"
            >
              <PackageOpen className="mr-2" /> Add Accessories
            </button>
            <div className="flex items-center space-x-2">
              <CreditCard className="text-green-600" />
              <span className="text-gray-600">
                Total Extras: ${
                  selectedAccessories.reduce((total, accessoryId) => {
                    const accessory = accessoriesCatalog.find(a => a.id === accessoryId);
                    return total + (accessory ? accessory.price : 0);
                  }, 0) +
                  (selectedInsurance 
                    ? insuranceOptions.find(i => i.id === selectedInsurance).price 
                    : 0)
                }
              </span>
            </div>
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredAndSortedCars.length > 0 ? (
            filteredAndSortedCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))
          ) : (
            <div className="col-span-full text-center py-8 bg-white rounded-lg shadow">
              <p className="text-gray-600">No cars match your current search criteria.</p>
            </div>
          )}
        </div>
      </div>

      {/* Accessories Modal */}
      {isAccessoriesModalOpen && (
        <AccessoriesModal onClose={() => setIsAccessoriesModalOpen(false)} />
      )}
    </div>
  );
}