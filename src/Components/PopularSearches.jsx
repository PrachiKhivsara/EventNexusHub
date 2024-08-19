import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { slides } from "./Slides";

export default function PopularSearches() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="my-10 mx-6 p-6 bg-white rounded-lg">
      <div className="mb-4 flex justify-between items-center">
        <h3 className="text-2xl font-bold font-poppins text-gray-800">
          Popular Searches
        </h3>
      </div>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out my-6"
          style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full md:w-1/4 flex-shrink-0 flex flex-col items-center px-2"
            >
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="p-7 bg-white shadow-lg rounded-b-lg flex justify-center items-center w-full">
                <h3 className="text-xl font-bold text-center">{slide.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className={`absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md transition-opacity ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentIndex === 0}
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className={`absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md transition-opacity ${
            currentIndex >= slides.length - 4
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={currentIndex >= slides.length - 4}
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
