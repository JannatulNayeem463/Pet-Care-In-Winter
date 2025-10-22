
import React, { useEffect, useState } from 'react';

const WinterTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch('/tips.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch tips');
        return res.json();
      })
      .then((data) => setTips(data))
      .catch((error) => console.error('Error loading tips:', error));
  }, []);

  return (
    <div className="py-10 bg-blue-50 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Winter Care Tips for Pets ❄️
      </h2>

      <div className="max-w-3xl mx-auto px-4">
        {tips.length === 0 && (
          <p className="text-gray-500 italic">Loading tips...</p>
        )}

        {tips.map((tip) => (
          <div
            key={tip.id}
            className="mb-5 p-5 bg-white border border-gray-200 rounded-lg shadow-sm text-left transition-transform hover:scale-105"
          >
            <h4 className="text-lg font-semibold text-gray-700 mb-2">
              {tip.title}
            </h4>
            <p className="text-gray-600 text-sm">{tip.tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterTips;
