// import React from "react";
// import Slider from "react-slick";
// import { Grid, Paper } from "@mui/material";
// import VendorMsg from "./MessageVendor";
// import VendorContents from "./VendorContents";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const images = [
//   {
//     src: "https://rajbhavancatering.com/wp-content/uploads/2022/12/outdoor-catering.webp",
//     alt: "Event 1",
//     title: "Outdoor Catering",
//     description: "Description for event 1.",
//   },
//   {
//     src: "https://rajbhavancatering.com/wp-content/uploads/2022/12/wedding-catering.webp",
//     alt: "Event 2",
//     title: "Wedding Catering",
//     description: "Description for event 2.",
//   },
//   {
//     src: "https://rajbhavancatering.com/wp-content/uploads/2022/12/corporate-22.webp",
//     alt: "Event 3",
//     title: "Corporate event catering",
//     description: "Description for event 3.",
//   },
//   {
//     src: "https://rajbhavancatering.com/wp-content/uploads/2022/12/social-event-catering.webp",
//     alt: "Event 4",
//     title: "Social Event Catering",
//     description: "Description for event 4.",
//   },
//   {
//     src: "https://rajbhavancatering.com/wp-content/uploads/2022/12/school-college.webp",
//     alt: "Event 5",
//     title: "School/College",
//     description: "Description for event 5.",
//   },
//   {
//     src: "https://rajbhavancatering.com/wp-content/uploads/2022/12/industrial.webp",
//     alt: "Event 6",
//     title: "Industrial Catering",
//     description: "Description for event 6.",
//   },
// ];

// const CateringContent = () => {
//   const settings = {
//     // dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };

//   return (
//     <Grid container spacing={2} sx={{ height: "100vh" }}>
//       {/* Slider Section */}
//       <Grid item xs={12} sx={{ padding: 2 }}>
//         <Slider {...settings}>
//           {images.map((image, index) => (
//             <div key={index}>
//               <img src={image.src} alt={image.alt} className="w-full h-auto" />
//               <div className="text-center mt-2">
//                 <h3 className="font-bold text-lg">{image.title}</h3>
//                 {/* <p>{image.description}</p> */}
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </Grid>

//       {/* Main Content and Message Vendor Section */}
//       <Grid
//         container
//         item
//         xs={12}
//         sx={{ height: "calc(100vh - 60px)", padding: 2 }}
//         spacing={2}
//       >
//         {/* Vendor Contents */}
//         <Grid item xs={8} sx={{ height: "100%" }}>
//           <VendorContents />
//         </Grid>

//         {/* Message Vendor */}
//         <Grid item xs={4} sx={{ height: "100%", position: "sticky", top: 0 }}>
//           <Paper elevation={2} sx={{ height: "100%", padding: 2 }}>
//             <VendorMsg />
//           </Paper>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

// export default CateringContent;
