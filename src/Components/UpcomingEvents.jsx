import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Box, Button } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import axios from "axios";

export default function BookTickets() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/events/${id}`
        );
        setEvent(response.data);
      } catch (error) {
        alert("Error fetching event data!");
        console.error("Error fetching event data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const handleBookNow = () => {
    navigate("/book-now", { state: { event } });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!event) {
    return <p>Event not found</p>;
  }

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
      }}
    >
      <Card sx={{ width: "100%", maxWidth: 1200 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{
              height: "auto",
              maxHeight: 700,
              maxWidth: "100%",
              objectFit: "cover",
              borderRadius: "20px 20px 0 0",
            }}
            image={event.eventImageHorizontal}
            alt={event.eventName}
          />
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <h2 className="text-2xl font-bold">{event.eventName}</h2>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#ec407a",
                  color: "#fff",
                  cursor: "pointer",
                  "&:hover": { bgcolor: "#ec408a" },
                }}
                onClick={handleBookNow}
              >
                Book Now
              </Button>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <p className="text-base mr-2">{event.eventDate}</p>
              <LocationOnOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
              <p className="text-base mr-2">{event.eventAddress}</p>
              <CurrencyRupeeIcon fontSize="small" sx={{ mr: 1 }} />
              <p className="text-base mr-2">{event.eventPrice}</p>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
