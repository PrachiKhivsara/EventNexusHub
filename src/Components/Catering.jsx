// import { useState, useEffect } from "react";
// import {
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   CardMedia,
//   Box,
// } from "@mui/material";
// import FoodImage from "./image3-4.jpg"; // Ensure the file extension is correct
// import "@fontsource/cinzel-decorative"; // Import Cinzel Decorative font

// // Counter Component
// function Counter({ title, finalValue, suffix }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const duration = 2000;
//     const increment = finalValue / (duration / 10);

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
//           sx={{ fontFamily: "'Cinzel Decorative', serif", fontWeight: 600 }}
//         >
//           {count}
//           <Typography variant="h3" component="span" sx={{ fontWeight: 600 }}>
//             {suffix}
//           </Typography>
//         </Typography>
//         <Typography
//           variant="h6"
//           component="div"
//           sx={{ fontFamily: "'Cinzel Decorative', serif" }}
//         >
//           {title}
//         </Typography>
//       </Box>
//     </Grid>
//   );
// }

// // Main VendorCaterers Component
// export default function VendorCaterers() {
//   // Array of objects containing image URLs and descriptions
//   const catererDetails = [
//     {
//       image:
//         "https://rajbhavancatering.com/wp-content/uploads/2023/12/Savoring-Excellence.webp",
//       name: "Rajbavan Caterers",
//       description:
//         "Rajbhavan Catering stands tall as the epitome of culinary excellence.",
//     },
//     {
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgiywNh-rdtBFMjgLjJELyJimc6a4QNqwzQ0t_m8t1bPZEI7apWaP0HvkqB7EfGJKQHjw&usqp=CAU",
//       name: "Sri Balaji Catering",
//       description:
//         "Sri Balaji Catering offers delicious food prepared by chefs that provide exceptional service.",
//     },
//     {
//       image: "https://www.shreeanandhaas.com/images/menu/Special.jpg",
//       name: "Shree Anandhaas",
//       description:
//         "A top choice for traditional dishes, this caterer serves up authentic flavors.",
//     },
//     {
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_yIUv70ZuPU3Y2X7z-5Uu01WEaXu0LaSRg&s",
//       name: "Annapoorna Gowrishankar",
//       description:
//         "Offering a fusion of modern and classic dishes, this caterer is perfect for any event.",
//     },
//     {
//       image:
//         "https://rajbhavancatering.com/wp-content/uploads/2023/12/Savoring-Excellence.webp",
//       name: "Rajbavan Caterers",
//       description:
//         "Rajbhavan Catering stands tall as the epitome of culinary excellence.",
//     },
//     {
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgiywNh-rdtBFMjgLjJELyJimc6a4QNqwzQ0t_m8t1bPZEI7apWaP0HvkqB7EfGJKQHjw&usqp=CAU",
//       name: "Sri Balaji Catering",
//       description:
//         "Sri Balaji Catering offers delicious food prepared by chefs that provide exceptional service.",
//     },
//     {
//       image: "https://www.shreeanandhaas.com/images/menu/Special.jpg",
//       name: "Shree Anandhaas",
//       description:
//         "A top choice for traditional dishes, this caterer serves up authentic flavors.",
//     },
//     {
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_yIUv70ZuPU3Y2X7z-5Uu01WEaXu0LaSRg&s",
//       name: "Annapoorna Gowrishankar",
//       description:
//         "Offering a fusion of modern and classic dishes, this caterer is perfect for any event.",
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
//           }}
//         >
//           <Typography
//             variant="h2"
//             component="div"
//             sx={{
//               color: "white",
//               fontFamily: "'Cinzel Decorative', serif",
//               textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//               backgroundColor: "rgba(0, 0, 0, 0.5)",
//               borderRadius: 2,
//               padding: 2,
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
//         }}
//       >
//         Catering
//       </Typography>
//       <Grid container spacing={4} sx={{ padding: 4 }}>
//         {catererDetails.map((caterer, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Card sx={{ maxWidth: 345 }}>
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={caterer.image}
//                 alt={caterer.name}
//               />
//               <CardContent>
//                 <Typography variant="h5" component="div">
//                   {caterer.name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
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
