import React from 'react';
import { Typography, Link } from '@mui/material';
import gcp_icon from '../assets/icons/pngegg.png';



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
        {'. '}
        {'Hosted on'} 
        <img src={gcp_icon} alt="GCP Icon" style={{ width: '20px', height: '20px', marginLeft: '5px' }} />
        {'Google Cloud Platform '}
      </Typography>
      <Typography variant="body2" color="white" align="center">
       
      </Typography>
    </footer>
  );
};

export default Footer;
