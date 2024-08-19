import { useState } from "react";

const CheckAvailability = () => {
  const [formData, setFormData] = useState({
    rooms: "",
    guests: "",
    date: "",
    functionType: "",
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the logic to send the form data as a message
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4 text-center">
          Check Availability
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Number of Rooms</label>
            <input
              type="number"
              name="rooms"
              value={formData.rooms}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Number of Guests</label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date of Event</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Function Type</label>
            <select
              name="functionType"
              value={formData.functionType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            >
              <option value="">Select</option>
              <option value="pre-wedding">Pre-Wedding</option>
              <option value="wedding">Wedding</option>
              <option value="corporate">Corporate</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              Check Availability
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckAvailability;
