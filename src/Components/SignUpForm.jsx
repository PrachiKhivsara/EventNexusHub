// export default function SignupForm() {
//   return (
//     <section
//       className="bg-gray-50 bg-cover bg-center"
//       style={{
//         backgroundImage:
//           'url("https://images.inc.com/uploaded_files/image/1920x1080/getty_479977238_253066.jpg")',
//       }}
//     >
//       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//         <a
//           href="#"
//           className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
//         >
//           <img
//             src={myImage}
//             className="h-12"
//             alt="Event Nexus Hub"
//             style={{ borderRadius: "80%" }}
//           />
//           EventNexus Hub
//         </a>
//         <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
//               Create an account
//             </h1>
//             <form className="space-y-4 md:space-y-6" action="#">
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block mb-2 text-sm font-medium text-gray-900"
//                 >
//                   Your email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                   placeholder="name@company.com"
//                   required=""
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block mb-2 text-sm font-medium text-gray-900"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   placeholder="••••••••"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                   required=""
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="confirm-password"
//                   className="block mb-2 text-sm font-medium text-gray-900"
//                 >
//                   Confirm password
//                 </label>
//                 <input
//                   type="password"
//                   name="confirm-password"
//                   id="confirm-password"
//                   placeholder="••••••••"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                   required=""
//                 />
//               </div>
//               <div className="flex items-start">
//                 <div className="flex items-center h-5">
//                   <input
//                     id="terms"
//                     aria-describedby="terms"
//                     type="checkbox"
//                     className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
//                     required=""
//                   />
//                 </div>
//                 <div className="ml-3 text-sm">
//                   <label htmlFor="terms" className="font-light text-gray-500">
//                     I accept the{" "}
//                     <a
//                       className="font-medium text-pink-600 hover:underline"
//                       href="#"
//                     >
//                       Terms and Conditions
//                     </a>
//                   </label>
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//               >
//                 Create an account
//               </button>
//               <p className="text-sm font-light text-gray-500">
//                 Already have an account?{" "}
//                 <a
//                   href="#"
//                   className="font-medium text-pink-600 hover:underline"
//                 >
//                   Login here
//                 </a>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignupForm() {
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    if (!document.getElementById("terms").checked) {
      alert("Please accept the terms and conditions!");
      return;
    }

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/register", {
        email,
        password,
      });
      console.log(response.data);
      navigate("/signin");
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.log(error.response.data);
        return alert(error.response.data.message);
      }

      alert("An error occurred during signup!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6 m-10">
      {/* Card Container */}
      <div className="flex flex-col md:flex-row max-w-1xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="flex-1 hidden md:block relative">
          <img
            src="https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1588202699404-B8V1QQZ8SRO9GTVK8LC3/luxury-event-planner-nyc-new-england?format=1500w"
            alt="Event Nexus Hub"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        {/* Signup Form Section */}
        <div className="flex-1 p-8 bg-gray-50">
          <div className="w-full max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-8 space-y-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create an account
              </h1>
              <form className="space-y-6" action="#">
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
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-3 transition-all duration-300 ease-in-out"
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
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-3 transition-all duration-300 ease-in-out"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-3 transition-all duration-300 ease-in-out"
                    required=""
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-100 focus:ring-3 focus:ring-pink-300"
                      required=""
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
                  onClick={handleSignup}
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-600">
                  Already have an account?{" "}
                  <Link
                    to="/signin"
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
