import React, { useState } from "react";
import { Box, Grid, TextField, Radio, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import PropTypes from "prop-types";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const EventLocationMap = ({ location }) => {
  const position = [11.0168, 76.9558]; // Default position (latitude and longitude)

  return (
    <div className="bg-[#EEEEEE] p-8 m-8 rounded-lg shadow-md">
      <Typography variant="h4" className="font-bold mb-4 text-[#151515]">
        Event Location
      </Typography>
      <Typography
        variant="body1"
        className="mb-4 text-[#151515] flex items-center"
      >
        <FaMapMarkerAlt className="mr-2 text-[#A91D3A] text-2xl" />
        {location}
      </Typography>
      <div className="w-full h-80">
        <MapContainer
          center={position}
          zoom={13}
          className="w-full h-full rounded-lg"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>{location}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

//Props Validation
EventLocationMap.propTypes = {
  location: PropTypes.string.isRequired,
};

export default function VenuePage() {
  const [selectedValue1, setSelectedValue1] = useState("a");
  const [selectedValue2, setSelectedValue2] = useState("c");

  const handleChange1 = (event) => {
    setSelectedValue1(event.target.value);
  };

  const handleChange2 = (event) => {
    setSelectedValue2(event.target.value);
  };

  const cards = [
    {
      image:
        "https://image.wedmegood.com/resized/1000X/uploads/member/2876203/1722076704_ed856f84.jpg?crop=7,33,1186,667",
      title: "CSR Landmark Resorts",
      description: "Formerly known as The French Town",
      location: "Mathipalyam, Thenkarai, Coimbatore",
      review: "5.0 (133 reviews)",
      price: "5000 onwards",
    },
  ];

  return (
    <Box className="flex justify-center items-center h-screen p-2 mt-60">
      <Grid container spacing={3} sx={{ marginTop: "20px" }}>
        {cards.map((card, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12} md={6}>
              <Card className="h-full">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    className="h-full object-cover rounded-t-lg"
                    image={card.image}
                    alt={card.title}
                  />
                  <CardContent>
                    <Box className="flex justify-between items-center mb-2">
                      <Box>
                        <Typography
                          className="text-xl font-semibold"
                          gutterBottom
                        >
                          {card.title}
                        </Typography>
                        <Typography className="text-gray-600">
                          {card.description}
                        </Typography>
                      </Box>
                      <Box className="flex items-center">
                        <StarBorderIcon className="text-yellow-500" />
                        <Typography className="ml-1 text-gray-600">
                          {card.review}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className="flex-col items-center mt-1">
                      <div className="flex">
                        <LocationOnOutlinedIcon className="text-gray-600 mr-1" />
                        <Typography className="text-gray-600">
                          {card.location}
                        </Typography>
                      </div>
                      <EventLocationMap location={card.location} />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className="h-full p-4">
                <CardContent>
                  <Typography className="text-xl font-semibold" gutterBottom>
                    Booking Details
                  </Typography>
                  <Box className="mb-2">
                    <Box className="flex justify-between items-center">
                      <Typography className="text-gray-600">
                        Price:
                        <CurrencyRupeeIcon className="text-gray-600 ml-1" />
                        1000 per plate
                      </Typography>
                      <Box className="flex items-center">
                        <Typography className="ml-1 text-gray-600">
                          Veg
                        </Typography>
                      </Box>
                    </Box>
                    <Box className="flex justify-between items-center mt-1">
                      <Typography className="text-gray-600">
                        Price:
                        <CurrencyRupeeIcon className="text-gray-600 ml-1" />
                        1250 per plate
                      </Typography>
                      <Box className="flex items-center">
                        <Typography className="ml-1 text-gray-600">
                          Non-veg
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Grid>
                    <Grid sx={{ paddingBottom: "10px" }}>
                      <TextField
                        label="Name"
                        variant="standard"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid sx={{ paddingBottom: "10px" }}>
                      <TextField
                        label="Email"
                        variant="standard"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid sx={{ paddingBottom: "10px" }}>
                      <TextField
                        label="Phone"
                        variant="standard"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid sx={{ paddingBottom: "10px" }}>
                      <TextField
                        label="Number of Guests"
                        variant="standard"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid sx={{ paddingBottom: "10px" }}>
                      <TextField
                        label="Function Date"
                        variant="standard"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        className="text-lg font-medium"
                        gutterBottom
                        sx={{ paddingTop: "10px", paddingBottom: "10px" }}
                      >
                        Function Type
                      </Typography>
                      <Box className="flex items-center">
                        <Radio
                          checked={selectedValue1 === "a"}
                          onChange={handleChange1}
                          value="a"
                          name="function-type"
                          className="text-pink-600"
                        />
                        <Typography className="ml-2 text-gray-600">
                          Pre-Wedding
                        </Typography>
                        <Radio
                          checked={selectedValue1 === "b"}
                          onChange={handleChange1}
                          value="b"
                          name="function-type"
                          className="text-pink-600 ml-4"
                        />
                        <Typography className="ml-2 text-gray-600">
                          Wedding
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        className="text-lg font-medium"
                        gutterBottom
                        sx={{ paddingTop: "10px", paddingBottom: "10px" }}
                      >
                        Function Time
                      </Typography>
                      <Box className="flex items-center">
                        <Radio
                          checked={selectedValue2 === "c"}
                          onChange={handleChange2}
                          value="c"
                          name="function-time"
                          className="text-pink-600"
                        />
                        <Typography className="ml-2 text-gray-600">
                          Evening
                        </Typography>
                        <Radio
                          checked={selectedValue2 === "d"}
                          onChange={handleChange2}
                          value="d"
                          name="function-time"
                          className="text-pink-600 ml-4"
                        />
                        <Typography className="ml-2 text-gray-600">
                          Morning
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{ paddingTop: "20px", paddingBottom: "20px" }}
                    >
                      <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg w-full py-2">
                        Book Now
                      </button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
}
