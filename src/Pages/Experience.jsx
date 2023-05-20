import React from 'react';
import { Typography, Paper } from '@mui/material';
import { Helmet } from 'react-helmet';

const containerStyles = {
  padding: '16px',
  margin: '8px',
};

const Experience = () => {
  return (
  <>
    <Helmet>
      <title>Experience - Rajesh Sahu Portfolio</title>
    </Helmet>
    <Paper elevation={3} style={containerStyles}>
      <Typography variant="h4" color="primary" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Welcome to our company! We are a dedicated team of professionals
        committed to delivering exceptional products and services.
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        auctor dolor non ex tincidunt commodo.
      </Typography>
    </Paper>
  </>
  );
};

export default Experience;
