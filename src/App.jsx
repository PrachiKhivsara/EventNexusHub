import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import SigninForm from "./Components/SignIn";
import SignupForm from "./Components/SignUpForm";
import UpcomingTab from "./Components/Upcoming Tab";
import BookTickets from "./Components/UpcomingEvents";
import VendorSigninForm from "./Components/VendorSignIn";
import VendorSignupForm from "./Components/VendorSignUp";
import VenueList from "./Components/Venue";
import CategoryCards from "./Components/WCategoryCards";
import Home from "./Home";
import "./index.css";
import VendorProfile from "./Components/VendorDashboard";
import BookTicketNow from "./Components/BookTicketNow";
import Payment from "./Components/Payment";
import axios from "axios";
import { useEffect, useState } from "react";
import VenuePage from "./Components/VenuePage";
// import CateringContent from "./Components/CateringContent";
// import VendorCaterers from "./Components/VendorCaterers";

function App() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleEventChange = (newEvent) => {
    console.log("Event updated successfully!");
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === newEvent.id ? { ...event, ...newEvent } : event
      )
    );
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/events")
      .then((response) => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the events!", error);
        setLoading(false);
      });
  }, []);

  // Function to get a random sample of 6 events
  const getRandomEvents = (events, count = 6) => {
    const shuffled = [...events].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  return (
    <>
      <div>
        <Router>
          <Navbar handleEventChange={handleEventChange} />
          <Routes>
            <Route
              path="/"
              element={
                <Home events={getRandomEvents(events)} loading={loading} />
              }
            />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/signin" element={<SigninForm />} />
            <Route path="/weddings" element={<CategoryCards />} />
            {/* <Route path="/weddings/catering" element={<CateringContent />} /> */}
            {/* <Route path="/weddings/caterings" element={<VendorCaterers />} /> */}
            <Route
              path="/events"
              element={<UpcomingTab events={events} loading={loading} />}
            />
            <Route path="/weddings/venues" element={<VenueList />} />
            <Route path="/event/:id" element={<BookTickets />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resort" element={<VenuePage />} />
            <Route path="/vendorsignup" element={<VendorSignupForm />} />
            <Route path="/vendorsignin" element={<VendorSigninForm />} />
            <Route path="/vendor/*" element={<VendorProfile />} />
            <Route path="/book-now" element={<BookTicketNow />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </div>
    </>
  );
}

export default App;
