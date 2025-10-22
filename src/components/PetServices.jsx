import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';


const PetServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/pet.json')
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error('Failed to load pet.json:', err));
  }, []);

  return (
    <div>
        
    <div className="p-5 text-center font-sans">
      <h2 className="pt-10 pb-10 font-bold text-3xl text-gray-800">
        Popular Winter Care Services
      </h2>

      <div className="flex flex-wrap gap-5 justify-center mt-5">
        {services.map((service) => (
          <div
            key={service.serviceId}
            className="w-[250px] border border-gray-300 rounded-xl p-4 bg-white shadow-md text-left transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={service.image}
              alt={service.serviceName}
              className="w-full h-[160px] object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-700">
              {service.serviceName}
            </h3>
            <p className="text-sm text-gray-600 mt-1">⭐ {service.rating} / 5</p>
            <p className="text-sm text-gray-600">💲{service.price}</p>
            <Link to={`/service/${service.serviceId}`}>
              <button className="mt-3 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition duration-200">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
    
    </div>
  );
};

export default PetServices;
