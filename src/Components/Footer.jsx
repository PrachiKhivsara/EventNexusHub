const Footer = () => {
  return (
    <footer className="bg-pink-700 text-white">
      {/* Reach Out to Us Section */}
      <div
        className="bg-cover bg-center py-20"
        style={{
          backgroundImage:
            "url(https://assets.cntraveller.in/photos/65cb33dd094a106c6b1e7b61/16:9/w_1024%2Cc_limit/1396308275)",
        }} // Replace with your image URL
      >
        <div className="bg-black bg-opacity-50 py-10">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">REACH OUT TO US</h3>
            <h2 className="text-2xl mb-6">To stay current with updates</h2>
            <a
              className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700"
              href="https://rajbhavancatering.com/contact/"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-10">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-4">
            EventNexus - One stop Destination for your event planning
          </h3>
          <p className="mb-4">Contact Us:</p>
          <p>Vendors: vendors@example.com</p>
          <p>Users: users@example.com</p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left mb-10 pl-40 ml-10">
          <div>
            <h4 className="text-xl font-bold mb-4">Events</h4>
            <ul>
              <li>Weddings</li>
              <li>Birthdays</li>
              <li>Corporate Events</li>
              <li>Concerts</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Services</h4>
            <ul>
              <li>Catering</li>
              <li>Decorations</li>
              <li>Venue Booking</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Other Services</h4>
            <ul>
              <li>Photography</li>
              <li>Entertainment</li>
              <li>Transport</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Home</h4>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Blog</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center mb-10">
          <p>Follow us on social media:</p>
          <div className="flex justify-center space-x-4 mt-4">
            {/* Social Media Icons */}
            <a href="#" className="hover:text-pink-600">
              Facebook
            </a>
            <a href="#" className="hover:text-pink-600">
              Twitter
            </a>
            <a href="#" className="hover:text-pink-600">
              Instagram
            </a>
            <a href="#" className="hover:text-pink-600">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
