import React, { useEffect, useState } from 'react';

const ExpertVets = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch('/experts.json')
      .then((res) => res.json())
      .then((data) => setExperts(data))
      .catch((err) => console.error('Failed to load expert vets:', err));
  }, []);

  return (
    <div className="py-12 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Meet Our Expert Vets 🩺
      </h2>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {experts.map((vet) => (
          <div
            key={vet.id}
            className="w-[220px] bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
          >
            <img
              src={vet.image}
              alt={vet.name}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h4 className="text-lg font-semibold text-gray-700">{vet.name}</h4>
            <p className="text-sm text-gray-500 mt-1">{vet.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertVets;
