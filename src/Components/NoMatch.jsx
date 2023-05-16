import React from 'react';
import { Typography } from '@mui/material';
import Footer from '../Components/Footer';

const containerStyles = {
  height: '80vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};

const NotFoundPage = () => {
  return (
    <div style={containerStyles}>


      <img width={'300px'} src="./images/compuse/noMatch.svg"></img>     

      <Typography variant="body1" color="textSecondary">
        The page you are looking for does not exist.
      </Typography>

      <Footer />
    </div>
    
  );
};

export default NotFoundPage;
