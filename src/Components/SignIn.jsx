import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./AuthContext";

export default function SigninForm() {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });
      console.log(response.data);
      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.error(error.response.data);
        console.error(error.response.status);
        alert(error.response.data.message);
      }
      console.error(error);
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center mt-2">
      <div className="flex flex-col md:flex-row max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden mt-20">
        {/* Image Section */}
        <div className="flex-1 hidden md:block relative">
          <img
            src="https://floralife.com/wp-content/uploads/2022/04/Outdoor-event-flowers.jpg"
            alt="Event"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        {/* Sign-in Form Section */}
        <div className="flex-1 p-4 bg-gray-50">
          <div className="w-full max-w-lg mx-auto">
            <div className="bg-white p-7 space-y-6 mb-0">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required=""
                  />
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-pink-300"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-pink-600 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={handleSignIn}
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-pink-600 hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
            {/* Vendor Login Section */}
            <div className="mt-0 bg-white p-6 rounded-lg ">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Are you a vendor?
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                If you are a vendor looking to manage your business, please log
                in here.
              </p>
              <Link
                to="/vendorsignin"
                className="inline-block text-center bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700"
              >
                Business Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
