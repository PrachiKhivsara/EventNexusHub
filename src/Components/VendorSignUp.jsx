import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function VendorSignupForm() {
  const navigate = useNavigate();
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!document.getElementById("terms").checked) {
      alert("Please accept the terms and conditions!");
      return;
    }

    const brandName = document.getElementById("brand-name").value;
    const city = document.getElementById("city").value;
    const vendorType = document.getElementById("vendor-type").value;
    const email = document.getElementById("email").value;
    const mobileNumber = document.getElementById("mobile-number").value;
    const password = document.getElementById("password").value;

    if (!otpVerified) {
      alert("Please verify your mobile number with OTP!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/registerVendor",
        {
          brandName,
          city,
          vendorType,
          email,
          mobileNumber,
          password,
        }
      );
      console.log(response.data);
      navigate("/vendorsignin");
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.log(error.response.data);
        return alert(error.response.data.message);
      }

      alert("An error occurred during signup!");
    }
  };

  const handleSendOtp = async () => {
    const phoneNumber = document.getElementById("mobile-number").value;
    const encodedPhoneNumber = encodeURIComponent(phoneNumber);
    setOtpLoading(true);
    try {
      await axios.post(
        `http://localhost:8080/otp/send?phoneNumber=${encodedPhoneNumber}`
      );
      setOtpSent(true);
    } catch (error) {
      console.error(error);
      alert("Failed to send OTP!");
    } finally {
      setOtpLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    const phoneNumber = document.getElementById("mobile-number").value;
    const encodedPhoneNumber = encodeURIComponent(phoneNumber);

    try {
      await axios.post(
        `http://localhost:8080/otp/verify/${encodedPhoneNumber}/${otp}`
      );
      setOtpVerified(true);
      alert("OTP verified successfully!");
    } catch (error) {
      console.error(error);
      alert("Invalid OTP!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6 mt-20">
      {/* Card Container */}
      <div className="flex flex-col md:flex-row max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden w-full">
        {/* Image Section */}
        <div className="flex-1 relative md:wd-2/3">
          <img
            src="https://img.freepik.com/free-photo/wedding-table-decorated-with-flowers-garden-night_1142-41047.jpg?size=626&ext=jpg&ga=GA1.1.775211973.1722871722&semt=ais_hybrid"
            alt="Event Nexus Hub"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            style={{ objectPosition: "center" }} // Adjust the image positioning
          />
        </div>

        {/* Signup Form Section */}
        <div className="flex-1 p-10 bg-gray-50">
          <div className="w-full max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-8 space-y-6 pt-2">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Vendor Sign Up
              </h1>
              <form className="space-y-6" onSubmit={handleSignup}>
                <div>
                  <label
                    htmlFor="brand-name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Brand Name
                  </label>
                  <input
                    type="text"
                    name="brand-name"
                    id="brand-name"
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-3 transition-all duration-300 ease-in-out"
                    placeholder="Brand Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-3 transition-all duration-300 ease-in-out"
                    placeholder="City"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="vendor-type"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Select Vendor Type
                  </label>
                  <select
                    id="vendor-type"
                    name="vendor-type"
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-3 transition-all duration-300 ease-in-out"
                    required
                  >
                    <option value="">Select Vendor Type</option>
                    <option value="venue">Venue</option>
                    <option value="caterer">Caterer</option>
                    <option value="photographer">Photographer</option>
                    <option value="decorator">Decorator</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-3 transition-all duration-300 ease-in-out"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="mobile-number"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobile-number"
                    id="mobile-number"
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-3 transition-all duration-300 ease-in-out"
                    placeholder="Mobile Number"
                    required
                  />
                  {otpSent ? (
                    <div className="mt-4">
                      <label
                        htmlFor="otp"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Enter OTP
                      </label>
                      <input
                        type="text"
                        name="otp"
                        id="otp"
                        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-3 transition-all duration-300 ease-in-out"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        onClick={handleVerifyOtp}
                        className="mt-2 w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 ease-in-out"
                      >
                        Verify OTP
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      disabled={otpLoading}
                      className="mt-2 w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 ease-in-out"
                    >
                      {otpLoading ? "Sending OTP..." : "Send OTP"}
                    </button>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-3 transition-all duration-300 ease-in-out"
                    required
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-100 focus:ring-3 focus:ring-pink-300"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-600">
                      I accept the{" "}
                      <a
                        className="font-medium text-pink-600 hover:underline"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 ease-in-out"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-600">
                  Already have an account?{" "}
                  <Link
                    to="/vendorsignin"
                    className="font-medium text-pink-600 hover:underline"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
