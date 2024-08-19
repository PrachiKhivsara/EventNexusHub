import { useState } from "react";
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
} from "@mui/material";

const VendorMsg = () => {
  const [people, setPeople] = useState("");

  const handleChange = (event) => {
    setPeople(event.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item>
        {/* <Paper elevation={2} sx={{ padding: 2 }}> */}
        <Typography variant="h4">Message Vendor</Typography>
        <form>
          <TextField
            type="text"
            placeholder="First name"
            required
            margin="normal"
          />
          <TextField
            type="text"
            placeholder="Last name"
            required
            margin="normal"
          />
          <TextField
            type="email"
            placeholder="Email"
            required
            fullWidth
            margin="normal"
          />
          <TextField
            type="text"
            placeholder="Event Name"
            required
            fullWidth
            margin="normal"
          />
          <TextField
            type="tel"
            placeholder="Phone Number"
            required
            fullWidth
            margin="normal"
          />
          <FormControl variant="standard" fullWidth margin="normal">
            <InputLabel id="guest-count-label">No of guests</InputLabel>
            <Select
              labelId="guest-count-label"
              id="guest-count"
              value={people}
              onChange={handleChange}
              label="Guest Count"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={100}>0-100</MenuItem>
              <MenuItem value={200}>100-200</MenuItem>
              <MenuItem value={300}>200-300</MenuItem>
              <MenuItem value={400}>300-400</MenuItem>
              <MenuItem value={500}>400-500</MenuItem>
            </Select>
          </FormControl>
          <Button
            sx={{
              mt: 2,
              bgcolor: "#d32f2f",
              color: "white",
              "&:hover": {
                backgroundColor: "pink",
                borderColor: "red",
              },
            }}
          >
            Check for Availability
          </Button>
        </form>
        {/* </Paper> */}
      </Grid>
    </Grid>
  );
};

export default VendorMsg;
