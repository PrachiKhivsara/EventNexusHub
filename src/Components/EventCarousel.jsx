import React, { useState, useEffect } from "react";
import "../css/EventCarousel.css";
import { useNavigate } from "react-router-dom";

const EventCarousel = ({ events, loading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [events.length]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (events.length === 0) {
    return <p>No events available</p>;
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {events.map((event) => (
          <div
            key={event.id}
            className="relative w-full flex-shrink-0 cursor-pointer"
            style={{ minWidth: "100%" }}
            onClick={() => navigate(`/event/${event.id}`)}
          >
            <img
              src={event.eventImageHorizontal}
              alt={event.eventName}
              className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-8 text-white">
              <h3 className="text-3xl font-bold">{event.eventName}</h3>
              <p className="text-lg">
                {event.eventTime} | {event.eventDate}
              </p>
              <p className="text-lg">{event.eventAddress}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {events.map((event, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-pink-600" : "bg-white"
            }`}
            onClick={() => navigate(`/event/${event.id}`)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default EventCarousel;
