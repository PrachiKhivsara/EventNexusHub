import { useState } from "react";

const FilterComponent = () => {
  const [rating, setRating] = useState("");
  const [location, setLocation] = useState("");

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    // Handle the search logic here
    console.log(`Searching for rating ${rating} in ${location}`);
  };

  return (
    <div className="flex items-center p-2 shadow-lg rounded-lg">
      <select
        value={rating}
        onChange={handleRatingChange}
        className="px-4 py-2 bg-white border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
      >
        <option value="">Rating</option>
        <option value="1">1 Star</option>
        <option value="2">2 Stars</option>
        <option value="3">3 Stars</option>
        <option value="4">4 Stars</option>
        <option value="5">5 Stars</option>
      </select>
      <select
        value={location}
        onChange={handleLocationChange}
        className="flex-grow px-4 py-2 border border-l-0 border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
      >
        <option value="">Location</option>
        <option value="mumbai">Mumbai, MH</option>
        <option value="delhi">Delhi, DL</option>
        <option value="bangalore">Bangalore, KA</option>
        <option value="hyderabad">Hyderabad, TS</option>
        <option value="chennai">Chennai, TN</option>
        <option value="kolkata">Kolkata, WB</option>
        <option value="pune">Pune, MH</option>
        <option value="ahmedabad">Ahmedabad, GJ</option>
        <option value="jaipur">Jaipur, RJ</option>
        <option value="lucknow">Lucknow, UP</option>
        {/* Add more locations as needed */}
      </select>
      <button
        onClick={handleSearch}
        className="px-4 py-2 text-white bg-pink-500 rounded-r-lg focus:outline-none hover:bg-pink-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l-6-6m0 0l6-6m-6 6h18"
          />
        </svg>
      </button>
    </div>
  );
};

export default FilterComponent;
