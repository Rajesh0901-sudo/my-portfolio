import React from 'react';
import { Typography, Link } from '@mui/material';



const Footer = () => {

  return (
    <footer className='footer_section' style={{background:'black',height:'60px',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Typography variant="body2" color="white" align="center">
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
