import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
} from "@mui/material";

function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <Container>
        <Typography
          variant="h4"
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Contact Us
        </Typography>
        <Typography variant="body1" className="text-gray-700 mb-6">
          We&rsquo;d love to hear from you! Whether you&rsquo;re planning an
          event or have questions about our services, our team is here to assist
          you every step of the way.
        </Typography>

        <Box className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <Typography
            variant="h6"
            className="text-2xl font-semibold text-gray-800 mb-4"
          >
            Contact Information
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-2">
            <strong>Phone:</strong> +1 (123) 456-7890
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-2">
            <strong>Email:</strong> info@eventnexus.com
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-4">
            <strong>Address:</strong> 123 Event Street, Celebration City, EC
            12345
          </Typography>
          <Typography
            variant="h6"
            className="text-2xl font-semibold text-gray-800 mb-4"
          >
            Office Hours
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-2">
            Monday to Friday: 9:00 AM - 6:00 PM
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-2">
            Saturday: 10:00 AM - 4:00 PM
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-4">
            Sunday: Closed
          </Typography>
        </Box>

        <Box className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <Typography
            variant="h6"
            className="text-2xl font-semibold text-gray-800 mb-4"
          >
            Follow Us
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-2">
            Stay connected and get the latest updates on upcoming events,
            special offers, and more.
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-2">
            <strong>Facebook:</strong> facebook.com/eventnexus
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-2">
            <strong>Instagram:</strong> instagram.com/eventnexus
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-4">
            <strong>LinkedIn:</strong> linkedin.com/company/eventnexus
          </Typography>
        </Box>

        <Box className="bg-white shadow-lg rounded-lg p-6">
          <Typography
            variant="h6"
            className="text-2xl font-semibold text-gray-800 mb-4"
          >
            Send Us a Message
          </Typography>
          <form>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  className="bg-gray-50 border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  className="bg-gray-50 border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  required
                  className="bg-gray-50 border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2.5 px-5 rounded-lg shadow-md"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </div>
  );
}

export default Contact;
