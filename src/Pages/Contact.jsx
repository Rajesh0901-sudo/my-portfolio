import React from 'react';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
  <>
      <Helmet>
        <title>Contact - Rajesh Sahu Portfolio</title>
      </Helmet>

    <Container maxWidth="sm">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            Contact Us
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <img
            src="images/logo/aws.png"
            alt="Contact us"
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
            >
              Submit
            </Button>
          </form>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" align="center">
            Your information:
            <br />
            Name: Your Name
            <br />
            Email: your@email
            <br />
            Phone: Your Phone Number
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </>
  );
};

export default Contact;