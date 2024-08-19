import PopularSearches from "./Components/PopularSearches";
import { NavCategoryCards } from "./Components/WCategoryCards";
import Footer from "./Components/Footer";
import EventCarousel from "./Components/EventCarousel";
import Chatbot from "./Components/Chatbot";

const Home = ({ events, loading }) => {
  return (
    <div>
      <EventCarousel events={events} loading={loading} />
      <PopularSearches />
      <NavCategoryCards />
      <Chatbot />
      <Footer />
      {/* <VendorProfile /> */}
      {/* <VendorDashboard /> */}
    </div>
  );
};

export default Home;
