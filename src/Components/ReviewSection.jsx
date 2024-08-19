// import React, { useState } from "react";

// const ReviewSection = () => {
//   const [review, setReview] = useState("");
//   const [reviews, setReviews] = useState([]);

//   const handleReviewChange = (e) => {
//     setReview(e.target.value);
//   };

//   const handleSubmitReview = () => {
//     if (review.trim()) {
//       setReviews([...reviews, review]);
//       setReview(""); // Clear the text field
//     }
//   };

//   return (
//     <div className="review-detail-row bg-white rounded-lg shadow-md">
//       <div className="flex flex-wrap">
//         {/* Review Summary */}
//         <div className="w-full sm:w-2/3 lg:w-1/2">
//           <div className="review-details-item">
//             <div className="review-details-header flex flex-col items-center">
//               <div className="review-details-rating text-center">
//                 <h2 className="text-5xl font-bold text-gray-900">5</h2>
//                 <div className="body1 text-gray-700 text-lg">out of 5.0</div>
//               </div>
//               <div className="review-stars-wrapper flex mb-4">
//                 {[...Array(5)].map((_, index) => (
//                   <svg
//                     key={index}
//                     className="icon w-8 h-8 text-yellow-500 mx-1"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                   >
//                     <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z"></path>
//                   </svg>
//                 ))}
//               </div>
//               <div className="reviews-count-text text-gray-700">18 reviews</div>
//             </div>
//           </div>
//         </div>

//         {/* Review Buckets */}
//         <div className="w-full sm:w-1/3 lg:w-1/2">
//           <div className="w-full sm:w-1/2 md:w-2/3">
//             <div className="flex flex-wrap">
//               {["5 Star", "4 Star", "3 Star", "2 Star", "1 Star"].map(
//                 (star, index) => (
//                   <button
//                     key={index}
//                     type="button"
//                     className="review-bucket flex items-center w-full p-2 border rounded"
//                   >
//                     <div className="star-text text-gray-700">{star}</div>
//                     <div className="progress-bar-column flex-grow">
//                       <div className="progress-bar-wrapper">
//                         <div
//                           className="progress-bar"
//                           role="progressbar"
//                           aria-valuemin="0"
//                           aria-valuemax="100"
//                           aria-valuenow="0"
//                           style={{
//                             width: "0%", // Adjust this value as needed
//                             backgroundColor: "#FBAF00",
//                           }}
//                         >
//                           <div className="bar-container">
//                             <div className="bar"></div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="pct-text text-gray-700 ml-2">0%</div>
//                   </button>
//                 )
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="review-form mt-6 ml-40">
//           <textarea
//             className="w-full p-4 border rounded-lg mb-4"
//             rows="6"
//             placeholder="Write your review here..."
//             value={review}
//             onChange={handleReviewChange}
//           ></textarea>
//           <button
//             className="btn bg-red-700 text-white px-6 py-3 rounded-lg mb-6"
//             onClick={handleSubmitReview}
//           >
//             Submit Review
//           </button>
//         </div>
//         {reviews.length > 0 && (
//           <div className="reviews-list mt-6">
//             <h3 className="text-lg font-semibold mb-2">Reviews:</h3>
//             <ul>
//               {reviews.map((r, index) => (
//                 <li key={index} className="border-b py-2">
//                   {r}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReviewSection;
