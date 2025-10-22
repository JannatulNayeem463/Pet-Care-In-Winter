import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const serviceId = parseInt(id, 10);
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Book form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetch("/pet.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load pet.json");
        }
        return res.json();
      })
      .then((data) => {
        const foundService = data.find((s) => s.serviceId === serviceId);
        if (!foundService) {
          navigate("/");
          return;
        }
        setService(foundService);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, [serviceId, navigate]);

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    setSuccessMessage(`Thank you, ${name}! Your booking request has been received.`);
    setName("");
    setEmail("");

    
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  if (loading) return <div className="p-6 text-center">Loading...</div>;

  if (!service)
    return (
      <div className="p-6 text-center text-lg">
        Service not found or unavailable.
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{service.serviceName}</h1>

      <img
        src={service.image}
        alt={service.serviceName}
        className="w-full max-h-80 object-cover rounded mb-6"
      />

      <p className="mb-4">{service.description}</p>

      <div className="mb-6 grid grid-cols-2 gap-4">
        <div>
          <strong>Provider:</strong> {service.providerName}
        </div>
        <div>
          <strong>Email:</strong> {service.providerEmail}
        </div>
        <div>
          <strong>Category:</strong> {service.category}
        </div>
        <div>
          <strong>Slots Available:</strong> {service.slotsAvailable}
        </div>
        <div>
          <strong>Rating:</strong> ⭐ {service.rating} / 5
        </div>
        <div>
          <strong>Price:</strong> ${service.price}
        </div>
      </div>

      {/* Book Service Form */}
      <div className="mt-10 max-w-md mx-auto p-6 border rounded-lg shadow-md bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Book Service</h2>
        <form onSubmit={handleBookingSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="your.email@example.com"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            Book Now
          </button>
        </form>

        {/* Success toast/message */}
        {successMessage && (
          <div className="mt-4 p-3 bg-green-100 text-green-800 rounded">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
