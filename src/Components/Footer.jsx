import React from 'react';
import { Typography, Link } from '@mui/material';



const Footer = () => {

  return (
    <footer className='footer_section'>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Made with ❤️ by '}
        <Link color="inherit">
          Rajesh Sahu
        </Link>
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  );
};

export default Footer;
