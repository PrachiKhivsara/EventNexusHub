// import React, { useState, useEffect } from "react";
// import {
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   CardMedia,
//   Box,
//   IconButton,
// } from "@mui/material";
// import StarIcon from "@mui/icons-material/Star";
// import { useNavigate } from "react-router-dom";
// import FoodImage from "./WhatsApp Image 2024-08-13 at 3.01.34 PM.jpeg"; // Ensure the file extension is correct
// import "@fontsource/cinzel-decorative"; // Import Cinzel Decorative font

// // Counter Component
// function Counter({ title, finalValue, suffix }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const duration = 2000; // Duration of the counter animation in milliseconds
//     const increment = finalValue / (duration / 10); // Calculate increment step

//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= finalValue) {
//         setCount(finalValue);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(start));
//       }
//     }, 10); // Update every 10ms for smooth animation

//     return () => clearInterval(timer); // Cleanup the timer on unmount
//   }, [finalValue]);

//   return (
//     <Grid item xs={12} sm={6} md={3}>
//       <Box>
//         <Typography
//           variant="h3"
//           component="div"
//           sx={{ fontFamily: "'Cinzel Decorative', serif", fontWeight: 800 }}
//         >
//           {count}
//           <Typography variant="h3" component="span" sx={{ fontWeight: 800 }}>
//             {suffix}
//           </Typography>
//         </Typography>
//         <Typography
//           variant="h6"
//           component="div"
//           sx={{ fontFamily: "'Cinzel Decorative', serif", fontWeight: 600 }}
//         >
//           {title}
//         </Typography>
//       </Box>
//     </Grid>
//   );
// }

// // Main VendorCaterers Component
// export default function VendorCaterers() {
//   const navigate = useNavigate();

//   // Array of objects containing image URLs and descriptions
//   const catererDetails = [
//     {
//       image:
//         "https://rajbhavancatering.com/wp-content/uploads/2023/12/Savoring-Excellence.webp",
//       name: "Rajbavan Caterers",
//       description:
//         "Rajbhavan Catering stands tall as the epitome of culinary excellence.",
//       rating: 5,
//       featured: true,
//       link: "/weddings/catering",
//     },
//     {
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgiywNh-rdtBFMjgLjJELyJimc6a4QNqwzQ0t_m8t1bPZEI7apWaP0HvkqB7EfGJKQHjw&usqp=CAU",
//       name: "Sri Balaji Catering",
//       description:
//         "Sri Balaji Catering offers delicious food prepared by chefs that provide exceptional service.",
//       rating: 4,
//       featured: true,
//     },
//     {
//       image: "https://www.shreeanandhaas.com/images/menu/Special.jpg",
//       name: "Shree Anandhaas",
//       description:
//         "A top choice for traditional dishes, this caterer serves up authentic flavors.",
//       rating: 4,
//       featured: true,
//     },
//     {
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_yIUv70ZuPU3Y2X7z-5Uu01WEaXu0LaSRg&s",
//       name: "Annapoorna Gowrishankar",
//       description:
//         "Offering a fusion of modern and classic dishes, this caterer is perfect for any event.",
//       rating: 5,
//       featured: true,
//     },
//     {
//       image:
//         "https://www.zoopgo.com/admin/uploads/vendors/2743/icon-17052399230.jpg",
//       name: "SNS Caterings",
//       description:
//         "Offering a fusion of modern and classic dishes, this caterer is perfect for any event.",
//       rating: 5,
//       featured: true,
//     },
//     {
//       image:
//         "https://5.imimg.com/data5/GH/LA/WW/GLADMIN-47838391/selection-132-500x500.png",
//       name: "Kaviya Caterings",
//       description:
//         "Offering a fusion of modern and classic dishes, this caterer is perfect for any event.",
//       rating: 5,
//       featured: true,
//     },
//     {
//       image:
//         "https://cdn0.weddingwire.in/vendor/1082/3_2/640/jpg/wedding-caterers-maharaja-bhog-food-display-1_15_461082-170419821790535.jpeg",
//       name: "Aha Caterings",
//       description:
//         "Offering a fusion of modern and classic dishes, this caterer is perfect for any event.",
//       rating: 5,
//       featured: true,
//     },
//     {
//       image:
//         "https://img1.exportersindia.com/product_images/bc-full/2022/10/4812530/catering-services-1666676103-6596400.jpeg",
//       name: "Mayura Caterings",
//       description:
//         "Offering a fusion of modern and classic dishes, this caterer is perfect for any event.",
//       rating: 5,
//       featured: true,
//     },
//   ];

//   // Corrected counterDetails array
//   const counterDetails = [
//     { title: "Completed Catering", finalValue: 700, suffix: "+" },
//     { title: "Menus", finalValue: 1000, suffix: "+" },
//     { title: "Hard Working Employees", finalValue: 100, suffix: "+" },
//     { title: "Happy Customers", finalValue: 500, suffix: "+" },
//   ];

//   return (
//     <>
//       <Grid container>
//         <Grid
//           item
//           xs={12}
//           sx={{
//             backgroundImage: `url(${FoodImage})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             height: 700,
//             display: "flex",
//             justifyContent: "flex-end",
//             alignItems: "flex-end",
//             padding: 4,
//             position: "relative",
//           }}
//         >
//           {/* Transparent grey overlay */}
//           <Box
//             sx={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               backgroundColor: "rgba(0, 0, 0, 0.5)",
//               zIndex: 1,
//             }}
//           />

//           <Typography
//             variant="h2"
//             component="div"
//             sx={{
//               color: "white",
//               fontFamily: "'Cinzel Decorative', serif",
//               textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//               // backgroundColor: "rgba(0, 0, 0, 0.5)",
//               borderRadius: 2,
//               padding: 2,
//               zIndex: 2,
//               fontWeight: 800,
//             }}
//           >
//             Savor the Moments with Our Delightful Dishes
//           </Typography>
//         </Grid>
//       </Grid>

//       {/* Grid for Caterer Cards */}
//       <Typography
//         variant="h3"
//         component="div"
//         sx={{
//           display: "flex",
//           justifyContent: "flex-start",
//           margin: 5,
//           fontWeight: 800,
//         }}
//       >
//         Catering
//       </Typography>

//       <Grid container spacing={4} sx={{ padding: 4 }}>
//         {catererDetails.map((caterer, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Card
//               sx={{
//                 maxWidth: 345,
//                 boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//               }}
//               onClick={() => navigate(caterer.link)}
//               style={{ cursor: "pointer" }}
//             >
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={caterer.image}
//                 alt={caterer.name}
//               />
//               <CardContent>
//                 <Box
//                   display="flex"
//                   alignItems="center"
//                   justifyContent="space-between"
//                 >
//                   <Typography
//                     variant="h5"
//                     component="div"
//                     sx={{ fontWeight: 800 }}
//                   >
//                     {caterer.name}
//                   </Typography>
//                   <IconButton aria-label="rating">
//                     <StarIcon
//                       sx={{ color: caterer.rating >= 4 ? "gold" : "grey" }}
//                     />
//                   </IconButton>
//                 </Box>
//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                   sx={{ fontWeight: 600 }}
//                 >
//                   {caterer.description}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Counter Section */}
//       <Grid
//         container
//         spacing={2}
//         sx={{ backgroundColor: "#f8f8f8", padding: 4, textAlign: "center" }}
//       >
//         {counterDetails.map((counter, index) => (
//           <Counter
//             key={index}
//             title={counter.title}
//             finalValue={counter.finalValue}
//             suffix={counter.suffix}
//           />
//         ))}
//       </Grid>
//     </>
//   );
// }
