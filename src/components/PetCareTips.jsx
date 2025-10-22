import React, { useEffect, useState } from 'react';

const PetCareTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch('/petCareTips.json')
      .then((res) => res.json())
      .then((data) => setTips(data))
      .catch((error) => console.error('Error loading tips:', error));
  }, []);

  return (
    <section className="py-12 bg-blue-50">
      <h2 className="text-3xl font-bold text-center mb-8">Pet Care Tips & Advice</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {tips.map((tip) => (
          <div key={tip.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{tip.title}</h3>
            <p className="mt-2 text-gray-600">{tip.description}</p>
            <a href={tip.link} className="mt-4 inline-block text-blue-500 hover:underline">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetCareTips;

