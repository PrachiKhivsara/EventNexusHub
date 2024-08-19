import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import Select from "react-select";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const categories = [
  { value: "Entertainment", label: "Entertainment" },
  { value: "Education", label: "Education" },
  { value: "Business", label: "Business" },
  { value: "Technology", label: "Technology" },
  { value: "Sports", label: "Sports" },
  { value: "Food", label: "Food" },
  { value: "Health", label: "Health" },
];

const CreateEvent = ({ open, onClose, handleEventChange }) => {
  const [eventName, setEventName] = useState("");
  const [eventCategory, setEventCategory] = useState(null);
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState([51.505, -0.09]);
  const [eventAddress, setEventAddress] = useState("");
  const [eventPrice, setEventPrice] = useState("");
  const [eventImageVertical, setEventImageVertical] = useState("");
  const [eventImageHorizontal, setEventImageHorizontal] = useState("");

  // Event handler to set the location marker on map click
  const LocationMarker = () => {
    const map = useMapEvents({
      click(e) {
        setEventLocation([e.latlng.lat, e.latlng.lng]);
      },
    });
    return eventLocation ? (
      <Marker position={eventLocation} icon={customIcon} />
    ) : null;
  };

  const handleCreateEvent = () => {
    const eventDetails = {
      eventName,
      eventCategory: eventCategory.value,
      eventDate,
      eventTime,
      eventLocation: {
        latitude: eventLocation[0],
        longitude: eventLocation[1],
      },
      eventAddress,
      eventPrice,
      eventImageVertical,
      eventImageHorizontal,
    };

    axios
      .post("http://localhost:8080/api/events", eventDetails)
      .then((response) => {
        alert("Event created successfully!");
        handleEventChange(response.data);
        onClose();
      })
      .catch((error) => {
        alert("There was an error creating the event!");
        console.error("There was an error creating the event!", error);
      });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        style: {
          position: "relative",
          borderRadius: 8,
          padding: "20px",
        },
      }}
    >
      <DialogTitle>
        Create Event
        <Button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "#ec407a",
          }}
        >
          <CloseIcon />
        </Button>
      </DialogTitle>
      <DialogContent>
        <TextField
          label="Event Name"
          fullWidth
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          margin="normal"
          style={{ marginBottom: "16px" }}
        />
        <Select
          options={categories}
          value={eventCategory}
          onChange={(selectedOption) => setEventCategory(selectedOption)}
          placeholder="Select Category"
          styles={{
            container: (provided) => ({
              ...provided,
              marginBottom: "16px",
            }),
            menu: (provided) => ({
              ...provided,
              zIndex: 9999,
            }),
          }}
        />
        <TextField
          label="Event Date"
          type="date"
          fullWidth
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          style={{ marginBottom: "16px" }}
        />
        <TextField
          label="Event Time"
          type="time"
          fullWidth
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          style={{ marginBottom: "16px" }}
        />
        <TextField
          label="Event Address"
          fullWidth
          value={eventAddress}
          onChange={(e) => setEventAddress(e.target.value)}
          margin="normal"
          style={{ marginBottom: "16px" }}
        />
        <TextField
          label="Event Price"
          fullWidth
          value={eventPrice}
          onChange={(e) => setEventPrice(e.target.value)}
          margin="normal"
          style={{ marginBottom: "16px" }}
        />
        <TextField
          label="Vertical Image Link"
          fullWidth
          value={eventImageVertical}
          onChange={(e) => setEventImageVertical(e.target.value)}
          margin="normal"
          style={{ marginBottom: "16px" }}
        />
        <TextField
          label="Horizontal Image Link"
          fullWidth
          value={eventImageHorizontal}
          onChange={(e) => setEventImageHorizontal(e.target.value)}
          margin="normal"
          style={{ marginBottom: "16px" }}
        />
        <MapContainer
          center={eventLocation}
          zoom={13}
          style={{ height: "300px", marginTop: "16px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMarker />
        </MapContainer>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleCreateEvent}
          style={{
            backgroundColor: "#ec407a",
            color: "#FFFFFF",
            fontWeight: "bold",
            borderRadius: "8px",
            padding: "10px 20px",
            textTransform: "none",
            margin: "20px",
          }}
        >
          Create Event
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateEvent;
