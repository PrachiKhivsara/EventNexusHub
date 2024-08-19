import "../index.css";

// import "./App.css";

export default function SearchBar() {
  return (
    <div className="relative min-h-screen min-w-full flex flex-col justify-center items-center text-dark-900">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://floralife.com/wp-content/uploads/2022/04/Outdoor-event-flowers.jpg')",
          filter: "brightness(70%)",
          zIndex: -1, // Place the background behind other content
        }}
      />
      <div className="absolute inset-0 bg-black opacity-40 z-0" />{" "}
      {/* Semi-transparent overlay */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="text-4xl font-bold mb-2">EVENTS AT YOUR DOORSTEP</div>
        <div className="text-2xl mb-2">
          The one stop destination for all your events
        </div>
        <div className="text-xl mb-2">Find the best events near you</div>
        <div className="text-lg mb-4">Search for events</div>
        <div id="search" className="flex space-x-2">
          <input
            type="text"
            placeholder="Search for events"
            className="px-4 py-2 rounded border border-gray-300 text-gray-800"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
