// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Paper,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
// } from "@mui/material";
// import { Link } from "react-scroll";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import ReviewSection from "./VendorInfoCaterers";

// // Map icon configuration
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
//   iconUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// });

// const EventLocationMap = ({ location }) => {
//   const position = [11.0168, 76.9558]; // Use actual coordinates based on location

//   return (
//     <div className="bg-[#EEEEEE] p-4 rounded-lg shadow-md">
//       <Typography variant="h4" className="font-bold mb-4 text-[#151515]">
//         Event Location
//       </Typography>
//       <Typography
//         variant="body1"
//         className="mb-4 text-[#151515] flex items-center"
//       >
//         <LocationOnOutlinedIcon className="mr-2 text-[#A91D3A] text-2xl" />
//         {location}
//       </Typography>
//       <div className="w-full h-80">
//         <MapContainer
//           center={position}
//           zoom={13}
//           className="w-full h-full rounded-lg"
//         >
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           />
//           <Marker position={position}>
//             <Popup>{location}</Popup>
//           </Marker>
//         </MapContainer>
//       </div>
//     </div>
//   );
// };

// const AboutSection = ({ about }) => (
//   <Grid item xs={12} id="about">
//     <Paper elevation={2} sx={{ p: 2 }}>
//       <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
//         About
//       </Typography>
//       <Typography variant="body1">{about}</Typography>
//     </Paper>
//   </Grid>
// );

// const DetailsSection = ({ location, onOpenMap }) => (
//   <Grid item xs={12} id="details">
//     <Paper elevation={2} sx={{ p: 2 }}>
//       <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
//         Details
//       </Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="body1">
//             <strong>Established:</strong> 1995
//           </Typography>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="body1">
//             <strong>Caterer Type:</strong> Full-service
//           </Typography>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="body1">
//             <strong>Cuisines:</strong> Indian, Chinese, Continental
//           </Typography>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="body1">
//             <strong>Min Capacity:</strong> 50
//           </Typography>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="body1">
//             <strong>Max Capacity:</strong> 1000
//           </Typography>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="body1">
//             <strong>Food Type:</strong> Veg & Non-veg
//           </Typography>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="body1">
//             <strong>Price Starts From:</strong> ₹500
//           </Typography>
//         </Grid>
//       </Grid>
//     </Paper>
//   </Grid>
// );

// const PricingSection = ({ pricing }) => (
//   <Grid item xs={12} id="pricing">
//     <Paper elevation={2} sx={{ p: 2 }}>
//       <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
//         Pricing
//       </Typography>
//       <Typography variant="h6">
//         Veg: ₹{pricing.vegPerPlate} per plate
//       </Typography>
//       <Typography variant="h6">
//         Non-Veg: ₹{pricing.nonVegPerPlate} per plate
//       </Typography>
//     </Paper>
//   </Grid>
// );

// const ReviewsSection = () => (
//   <Grid item xs={12} id="reviews">
//     <Paper elevation={2} sx={{ p: 2 }}>
//       <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
//         Reviews
//       </Typography>
//       <ReviewSection />
//     </Paper>
//   </Grid>
// );

// const ContactSection = () => (
//   <Grid item xs={12} id="contact">
//     <Paper elevation={2} sx={{ p: 2 }}>
//       <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
//         Contact
//       </Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="body1">
//             <strong>Phone:</strong> +91-123-456-7890
//           </Typography>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="body1">
//             <strong>Email:</strong> info@rajbhavancaterers.com
//           </Typography>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="body1">
//             <strong>Address:</strong> 123 Main Street, City, State, ZIP Code,
//             India
//           </Typography>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="body1">
//             <strong>Website:</strong> www.rajbhavancaterers.com
//           </Typography>
//         </Grid>
//       </Grid>
//     </Paper>
//   </Grid>
// );

// const VendorContents = () => {
//   const [openMapDialog, setOpenMapDialog] = useState(null);

//   const catererData = {
//     about:
//       "Rajbhavan Caterers has been providing catering services since 1993, specializing in diverse culinary offerings from various cuisines. We are delighted to offer an extensive array of culinary choices, including Chettinad Style, Kerala Sadhya, North Indian, and Continental cuisine, all carefully preserving their authentic flavors and cultural roots. Our food preparation follows strict guidelines and upholds high cleanliness standards. We are proud to have an experienced international chef on our team, ensuring top-notch service. Rajbhavan Caterer takes great pleasure in providing delicious cuisine with impeccable presentation and service, leaving a lasting impact on every occasion. Our commitment is to ensure that each event becomes a memorable experience for all who attend.",
//     cLocation: "Coimbatore, Tamil Nadu",
//     pricing: {
//       vegPerPlate: 500,
//       nonVegPerPlate: 700,
//     },
//   };

//   const handleOpenMapDialog = (location) => {
//     setOpenMapDialog(location);
//   };

//   const handleCloseMapDialog = () => {
//     setOpenMapDialog(null);
//   };

//   return (
//     <Box sx={{ p: 2 }}>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           mb: 4,
//         }}
//       >
//         <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//           <Typography variant="h4" sx={{ flexGrow: 1, fontWeight: "bold" }}>
//             Rajbhavan Caterers
//           </Typography>
//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             <FavoriteBorderIcon fontSize="large" sx={{ ml: 2, color: "red" }} />
//             <StarBorderPurple500OutlinedIcon
//               fontSize="large"
//               sx={{ ml: 2, color: "red" }}
//             />
//             <Typography sx={{ ml: 1 }}>4.5</Typography>
//           </Box>
//         </Box>
//         <Typography sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//           <LocationOnOutlinedIcon
//             fontSize="large"
//             sx={{ mr: 1, color: "red" }}
//           />
//           Arunachalam Street, Mettupalayam Rd, near Saibabakoil, Coimbatore
//           <Button
//             variant="outlined"
//             color="warning"
//             onClick={() => handleOpenMapDialog(catererData.cLocation)}
//             sx={{ ml: 2 }}
//           >
//             View on Map
//           </Button>
//         </Typography>
//       </Box>
//       <Paper elevation={2} sx={{ p: 1, mb: 3 }}>
//         {/* Navigation Links */}
//         <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
//           <Typography variant="h6">
//             <Link to="about" smooth={true} duration={500}>
//               About
//             </Link>
//           </Typography>
//           <Typography variant="h6">
//             <Link to="details" smooth={true} duration={500}>
//               Details
//             </Link>
//           </Typography>
//           <Typography variant="h6">
//             <Link to="pricing" smooth={true} duration={500}>
//               Pricing
//             </Link>
//           </Typography>
//           <Typography variant="h6">
//             <Link to="reviews" smooth={true} duration={500}>
//               Reviews
//             </Link>
//           </Typography>
//           <Typography variant="h6">
//             <Link to="contact" smooth={true} duration={500}>
//               Contact
//             </Link>
//           </Typography>
//         </Box>
//       </Paper>
//       <Grid container spacing={2}>
//         <AboutSection about={catererData.about} />
//         <DetailsSection
//           location={catererData.cLocation}
//           onOpenMap={handleOpenMapDialog}
//         />
//         <PricingSection pricing={catererData.pricing} />
//         <ReviewsSection />
//         <ContactSection />
//       </Grid>
//       {/* Map Dialog */}
//       <Dialog
//         open={!!openMapDialog}
//         onClose={handleCloseMapDialog}
//         maxWidth="md"
//         fullWidth
//       >
//         <DialogTitle>Event Location</DialogTitle>
//         <DialogContent>
//           <EventLocationMap location={openMapDialog} />
//         </DialogContent>
//       </Dialog>
//     </Box>
//   );
// };

// export default VendorContents;
