import PropTypes from "prop-types";
import { categories } from "./Slides";
import { Link } from "react-router-dom";

const getRandomPastelColor = () => {
  const pastelColors = [
    "bg-pink-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-purple-200",
    "bg-violet-200",
    "bg-red-100",
    "bg-orange-200",
    "bg-rose-200",
    "bg-cyan-200",
    "bg-teal-200",
  ];
  const randomIndex = Math.floor(Math.random() * pastelColors.length);
  return pastelColors[randomIndex];
};

const Card = ({ category }) => {
  const { title, description, image } = category;
  const randomColor = getRandomPastelColor();

  // Determine the path based on title
  const getPath = () => {
    switch (title.toLowerCase()) {
      case "venue":
        return "/weddings/venue";
      case "caterer":
        return "/weddings/caterings";
      default:
        return `/weddings/${title.toLowerCase()}`;
    }
  };

  return (
    <div className={`flex w-[590px] h-[120px] mb-4 ${randomColor}`}>
      <div
        className={`flex-grow ${randomColor} p-5 flex flex-col justify-center`}
      >
        <Link to={getPath()}>
          <h2 className="text-lg font-semibold hover:underline">{title}</h2>
        </Link>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
      {image && (
        <div className="flex-shrink-0 w-[250px] h-[120px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-l-full"
          />
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default function CategoryCards() {
  return (
    <div className="m-10 p-20 bg-white shadow-lg rounded-lg">
      <div className="mb-10">
        <h3 className="text-2xl font-bold font-poppins text-gray-800">
          Wedding Categories
        </h3>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category, index) => (
          <Card key={index} category={category} />
        ))}
      </div>
    </div>
  );
}

export function NavCategoryCards() {
  return (
    <div className="my-10 mx-6 p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-2xl font-bold font-poppins text-gray-700">
          Wedding Categories
        </h3>
        <Link
          to="/weddings"
          className="text-pink-500 font-bold hover:underline text-lg"
        >
          View All Categories
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.slice(0, 6).map((category, index) => (
          <Card key={index} category={category} />
        ))}
      </div>
    </div>
  );
}
