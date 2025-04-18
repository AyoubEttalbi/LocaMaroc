import React, { useState, useEffect } from 'react';
import { 
  Car, 
  Calendar, 
  MapPin, 
  CreditCard, 
  UserCheck, 
  Shield, 
  Info, 
  ChevronRight,
  PhoneCall,
  Mail,
  DollarSign
} from 'lucide-react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

export default function CarReservation() {
  // Mock car inventory (in real app, this would come from a database or global state)
  const carInventory = [
    {
      id: 1,
      name: 'BMW 5 Series',
      brand: 'BMW',
      image: 'https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=258L&client=byo&paint=P0300&fabric=FLKSW&quality=70&bkgnd=transparent&resp=png&angle=60',
      dailyRate: 180,
      features: ['Leather Seats', 'Navigation', 'Premium Sound'],
      transmission: 'Automatic',
      fuelType: 'Hybrid',
      seats: 5
    },
    // ... other cars
  ];

  // Accessories and insurance options
  const accessoriesCatalog = [
    {
      id: 'gps',
      name: 'GPS Navigation',
      price: 15,
      description: 'Advanced GPS with real-time updates'
    },
    {
      id: 'child-seat',
      name: 'Child Safety Seat',
      price: 20,
      description: 'Certified child seat for maximum safety'
    }
  ];

  const insuranceOptions = [
    {
      id: 'standard',
      name: 'Standard Protection',
      price: 45,
      description: 'Comprehensive coverage with lower deductible'
    }
  ];

  // State management
  const { carId } = useParams();
  const [selectedCar, setSelectedCar] = useState(null);
  const [rentalDetails, setRentalDetails] = useState({
    pickupLocation: '',
    returnLocation: '',
    pickupDate: '',
    returnDate: '',
    pickupTime: '',
    returnTime: ''
  });
  const [selectedAccessories, setSelectedAccessories] = useState([]);
  const [selectedInsurance, setSelectedInsurance] = useState(null);
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    driverLicense: ''
  });

  // Locations
  const locations = [
    { city: 'Casablanca', code: 'CAS' },
    { city: 'Marrakech', code: 'MRK' },
    { city: 'Rabat', code: 'RBT' }
  ];

  // Effect to load selected car
  useEffect(() => {
    const car = carInventory.find(c => c.id === parseInt(carId));
    setSelectedCar(car);
  }, [carId]);

  // Calculate total cost
  const calculateTotalCost = () => {
    if (!selectedCar) return 0;

    // Calculate rental duration
    const pickupDate = new Date(rentalDetails.pickupDate);
    const returnDate = new Date(rentalDetails.returnDate);
    const rentalDays = Math.ceil((returnDate - pickupDate) / (1000 * 60 * 60 * 24));

    // Base car rental cost
    const baseRentalCost = selectedCar.dailyRate * rentalDays;

    // Accessories cost
    const accessoriesCost = selectedAccessories.reduce((total, accessoryId) => {
      const accessory = accessoriesCatalog.find(a => a.id === accessoryId);
      return total + (accessory ? accessory.price * rentalDays : 0);
    }, 0);

    // Insurance cost
    const insuranceCost = selectedInsurance 
      ? insuranceOptions.find(i => i.id === selectedInsurance).price * rentalDays 
      : 0;

    return baseRentalCost + accessoriesCost + insuranceCost;
  };

  // Reservation submission handler
  const handleReservation = (e) => {
    e.preventDefault();
    // Validate form
    if (!validateForm()) return;

    // Prepare reservation data
    const reservationData = {
      car: selectedCar,
      rentalDetails,
      accessories: selectedAccessories.map(id => 
        accessoriesCatalog.find(a => a.id === id)
      ),
      insurance: selectedInsurance 
        ? insuranceOptions.find(i => i.id === selectedInsurance)
        : null,
      customerInfo,
      totalCost: calculateTotalCost()
    };

    // In a real app, this would be sent to a backend service
    console.log('Reservation Submitted:', reservationData);
    alert('Reservation Confirmed! We will contact you shortly.');
  };

  // Form validation
  const validateForm = () => {
    const { 
      pickupLocation, 
      returnLocation, 
      pickupDate, 
      returnDate,
      pickupTime,
      returnTime 
    } = rentalDetails;

    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      age, 
      driverLicense 
    } = customerInfo;

    if (!pickupLocation || !returnLocation || !pickupDate || !returnDate || 
        !pickupTime || !returnTime) {
      alert('Please complete all rental details');
      return false;
    }

    if (!firstName || !lastName || !email || !phone || !age || !driverLicense) {
      alert('Please complete all personal information');
      return false;
    }

    return true;
  };

  if (!selectedCar) return <div>Loading...</div>;

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
    <div className="bg-gray-50 min-h-screen py-12">
        
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Car Details Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="relative">
              <img 
                src={selectedCar.image} 
                alt={selectedCar.name} 
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute top-4 right-4 bg-white/80 rounded-full px-4 py-2">
                <span className="text-orange-600 font-bold">
                  ${selectedCar.dailyRate}/day
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-800">{selectedCar.name}</h2>
              
              <div className="grid grid-cols-3 gap-4 mt-4 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Car size={16} />
                  <span>{selectedCar.transmission}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield size={16} />
                  <span>{selectedCar.fuelType}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <UserCheck size={16} />
                  <span>{selectedCar.seats} Seats</span>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-lg mb-2">Features</h3>
                <ul className="space-y-2 text-gray-600">
                  {selectedCar.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <ChevronRight size={16} className="text-blue-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div>
            <form onSubmit={handleReservation} className="space-y-6">
              {/* Rental Details Section */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Calendar className="mr-2 text-blue-500" /> Rental Details
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 flex items-center">
                      <MapPin size={16} className="mr-2 text-blue-500" />
                      Pickup Location
                    </label>
                    <select 
                      value={rentalDetails.pickupLocation}
                      onChange={(e) => setRentalDetails({
                        ...rentalDetails, 
                        pickupLocation: e.target.value
                      })}
                      className="w-full p-2 border rounded-lg"
                    >
                      <option value="">Select Location</option>
                      {locations.map(loc => (
                        <option key={loc.code} value={loc.code}>
                          {loc.city} ({loc.code})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 flex items-center">
                      <MapPin size={16} className="mr-2 text-blue-500" />
                      Return Location
                    </label>
                    <select 
                      value={rentalDetails.returnLocation}
                      onChange={(e) => setRentalDetails({
                        ...rentalDetails, 
                        returnLocation: e.target.value
                      })}
                      className="w-full p-2 border rounded-lg"
                    >
                      <option value="">Select Location</option>
                      {locations.map(loc => (
                        <option key={loc.code} value={loc.code}>
                          {loc.city} ({loc.code})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block mb-2">Pickup Date</label>
                    <input 
                      type="date" 
                      value={rentalDetails.pickupDate}
                      onChange={(e) => setRentalDetails({
                        ...rentalDetails, 
                        pickupDate: e.target.value
                      })}
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Return Date</label>
                    <input 
                      type="date" 
                      value={rentalDetails.returnDate}
                      onChange={(e) => setRentalDetails({
                        ...rentalDetails, 
                        returnDate: e.target.value
                      })}
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block mb-2">Pickup Time</label>
                    <input 
                      type="time" 
                      value={rentalDetails.pickupTime}
                      onChange={(e) => setRentalDetails({
                        ...rentalDetails, 
                        pickupTime: e.target.value
                      })}
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Return Time</label>
                    <input 
                      type="time" 
                      value={rentalDetails.returnTime}
                      onChange={(e) => setRentalDetails({
                        ...rentalDetails, 
                        returnTime: e.target.value
                      })}
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Accessories Section */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Info className="mr-2 text-blue-500" /> Additional Services
                </h3>
                
                <div className="space-y-4">
                  {accessoriesCatalog.map((accessory) => (
                    <div 
                      key={accessory.id} 
                      className="flex justify-between items-center p-3 border rounded-lg"
                    >
                      <div>
                        <h4 className="font-medium">{accessory.name}</h4>
                        <p className="text-sm text-gray-500">{accessory.description}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-600">${accessory.price}/day</span>
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
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Shield className="mr-2 text-blue-500" /> Insurance
                  </h4>
                  {insuranceOptions.map((insurance) => (
                    <div 
                      key={insurance.id} 
                      className="flex justify-between items-center p-3 border rounded-lg mt-2"
                    >
                      <div>
                        <h4 className="font-medium">{insurance.name}</h4>
                        <p className="text-sm text-gray-500">{insurance.description}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-600">${insurance.price}/day</span>
                        <input 
                          type="radio"
                          name="insurance"
                          checked={selectedInsurance === insurance.id}
                          onChange={() => setSelectedInsurance(insurance.id)}
                          className="form-radio"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customer Information */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <UserCheck className="mr-2 text-blue-500" /> Personal Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">First Name</label>
                    <input 
                      type="text" 
                      value={customerInfo.firstName}
                      onChange={(e) => setCustomerInfo({
                        ...customerInfo, 
                        firstName: e.target.value
                      })}
                      className="w-full p-2 border rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Last Name</label>
                    <input 
                      type="text" 
                      value={customerInfo.lastName}
                      onChange={(e) => setCustomerInfo({
                        ...customerInfo, 
                        lastName: e.target.value
                      })}
                      className="w-full p-2 border rounded-lg"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block mb-2 flex items-center">
                      <Mail className="mr-2 text-blue-500" /> Email
                    </label>
                    <input 
                      type="email" 
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({
                        ...customerInfo, 
                        email: e.target.value
                      })}
                      className="w-full p-2 border rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 flex items-center">
                      <PhoneCall className="mr-2 text-blue-500" /> Phone
                    </label>
                    <input 
                      type="tel" 
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({
                        ...customerInfo, 
                        phone: e.target.value
                      })}
                      className="w-full p-2 border rounded-lg"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block mb-2">Age</label>
                    <input 
                      type="number" 
                      value={customerInfo.age}
                      onChange={(e) => setCustomerInfo({
                        ...customerInfo, 
                        age: e.target.value
                      })}
                      className="w-full p-2 border rounded-lg"
                      min="18"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Driver's License Number</label>
                    <input 
                      type="text" 
                      value={customerInfo.driverLicense}
                      onChange={(e) => setCustomerInfo({
                        ...customerInfo, 
                        driverLicense: e.target.value
                      })}
                      className="w-full p-2 border rounded-lg"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Total Cost and Submission */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold flex items-center">
                    <DollarSign className="mr-2 text-green-500" /> Total Cost
                  </h3>
                  <span className="text-2xl font-bold text-green-600">
                    ${calculateTotalCost()}
                  </span>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}