import React, { useState, useEffect } from "react";
import { Card, Grid, CircularProgress, Box } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Link } from "react-router-dom";
import FilteringComponent from "./FilteringComponent";

function UpcomingTab({ events, loading }) {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const filtered = events.filter((event) => {
      const isCategoryMatch = category
        ? event.eventCategory === category
        : true;
      const isPriceMatch =
        (!minPrice || event.eventPrice >= minPrice) &&
        (!maxPrice || event.eventPrice <= maxPrice);

      return isCategoryMatch && isPriceMatch;
    });
    filtered.reverse();
    setFilteredEvents(filtered);
  }, [category, minPrice, maxPrice, events]);

  const handleFilterChange = (filters) => {
    setCategory(filters.category);
    setMinPrice(filters.minPrice);
    setMaxPrice(filters.maxPrice);
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          p: 4,
          marginTop: "90px",
          position: "relative",
        }}
      >
        <CircularProgress
          sx={{ color: "crimson", size: 60, position: "absolute" }}
        />
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "row", pt: 5, ml: 0 }}>
      <FilteringComponent onFilterChange={handleFilterChange} />
      <Box
        sx={{
          flexGrow: 1,
          pl: 4,
          ml: { xs: 0, md: "320px" },
          pr: 2,
        }}
      >
        <h3 className="text-2xl font-bold font-poppins text-gray-800 mt-20 ml-7">
          Upcoming Events
        </h3>
        <Grid container spacing={3} sx={{ mt: 4, ml: 3 }}>
          {filteredEvents.map((event, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ minWidth: 250, maxWidth: 300 }}>
                <Link
                  to={`/event/${event.id}` || "#"}
                  style={{ textDecoration: "none" }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      sx={{
                        height: 480,
                        objectFit: "cover",
                        borderRadius: "20px",
                      }}
                      image={event.eventImageVertical}
                      alt={event.eventName}
                    />
                    <CardContent>
                      <h3 className="text-lg font-semibold mb-2">
                        {event.eventName}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {event.eventAddress}
                      </p>
                      <div className="flex items-center">
                        <CurrencyRupeeIcon fontSize="small" />
                        <span className="ml-1">{event.eventPrice}</span>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default UpcomingTab;
