import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import FilterComponent from "./CategoryFilter";
const venues = [
  {
    photo:
      "https://image.wedmegood.com/resized/450X/uploads/member/2876203/1722076704_ed856f84.jpg?crop=7,33,1186,667",
    name: "CSR Landmark Resorts",
    rating: 5.0,
    location: "Coimbatore",
    description: "4 star and above wedding hotel",
  },
  {
    photo:
      "https://image.wedmegood.com/resized/450X/uploads/member/717560/1569293806_IMG_20190924_WA0002___Copy.jpg",
    name: "Jennys Residency",
    rating: 4,
    location: "Coimbatore",
    description: "Banquet Halls,Lawns/Farms",
  },
  {
    photo:
      "https://image.wedmegood.com/resized/450X/uploads/member/205622/1551779904_2.jpg",
    name: "Radisson Blu",
    rating: 4,
    location: "Coimbatore",
    description: "4 Star and above wedding hotel",
  },
  {
    photo:
      "https://image.wedmegood.com/resized/450X/uploads/member/204788/1507919315_113052731.jpg",
    name: "Residency Towers",
    rating: 5,
    location: "Coimbatore",
    description: "4 Star and above wedding hotel",
  },
  {
    photo:
      "https://image.wedmegood.com/resized/450X/uploads/member/204794/1507922008_87647629.jpg",
    name: "Le Meridien",
    rating: 4,
    location: "Coimbatore",
    description: "4 Star and above wedding hotel",
  },
  {
    photo:
      "https://image.wedmegood.com/resized/450X/uploads/member/705095/1572417268_02.png",
    name: "Country Club Resort",
    rating: 4,
    location: "Coimbatore",
    description: "4 Star and above wedding hotel",
  },
];

const VenueCard = ({ photo, name, rating, location, description }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col mx-5 my-4">
      {/* <FilterComponent /> */}
      <img className="w-full h-60 object-cover" src={photo} alt={name} />{" "}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <Link to="/resort" className="hover:underline">
            <div className="text-lg font-semibold text-dark-500">{name}</div>
          </Link>
          <div className="flex items-center">
            {Array(fullStars)
              .fill()
              .map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-500 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.429 8.332 1.209-6.041 5.888 1.426 8.309L12 18.897l-7.385 3.875 1.426-8.309-6.041-5.888 8.332-1.209z" />
                </svg>
              ))}
            {halfStar && (
              <svg
                className="w-4 h-4 text-yellow-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.429 8.332 1.209-6.041 5.888 1.426 8.309L12 18.897l-7.385 3.875 1.426-8.309-6.041-5.888 8.332-1.209z" />
                <path
                  d="M12 18.897l-3.668 7.429 6.041-5.888 1.426-8.309-8.332-1.209L12 .587v18.31z"
                  fill="white"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="flex items-center mt-2 text-gray-500">
          <img
            src="https://images.wedmegood.com/react-frontend-v4/static/media/location.417064ed.svg"
            alt="location icon"
            className="w-4 h-4 mr-2"
          />
          <span>{location}</span>
        </div>
        <div className="flex items-center mt-2 text-gray-500">
          <img
            src="https://images.wedmegood.com/react-frontend-v4/static/media/ResortIcon.00b02371.svg"
            alt="description icon"
            className="w-4 h-4 mr-2"
          />
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};

VenueCard.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const VenueList = () => {
  return (
    <div className="m-10 p-20 bg-white shadow-lg rounded-lg">
      <div>
        <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-6">
          Venues
        </h3>
      </div>
      <div className="flex flex-wrap -mx-2 p-15">
        {venues.map((venue, index) => (
          <div key={index} className="w-full md:w-1/3 px-2 mb-4">
            <VenueCard
              photo={venue.photo}
              name={venue.name}
              rating={venue.rating}
              location={venue.location}
              description={venue.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

VenueList.propTypes = {
  venues: PropTypes.arrayOf(
    PropTypes.shape({
      photo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default VenueList;
