import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import RajeshLogo100 from '../assets/images/RajeshLogo300.png';
import './scss/Value.scss';

import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';




const footerStyles = {
  root: {
    color: '#d9d9d9',
    minHeight:'50vh',
    padding: '24px',
    marginTop: 'auto',

  },
  section: {
    display: 'flex',
    minHeight: '20vh',

    '& > *': {
      margin: '0 16px',
    },
  },
};

const Value = () => {
  return (
      <Container maxWidth="lg">
        <Grid container spacing={1} >
            <Grid item xs={6} sm={3} style={footerStyles.section}  className="value_section">
                <Box className="value_content_wrapper">
                    <h3>Quality</h3>
                    <img src='./images/compuse/qualityBox.svg'/>
                    <p>Deliver high-quality software that meets their needs</p>
                </Box>
            </Grid>
            <Grid item xs={6} sm={3} style={footerStyles.section} className="value_section">
                <Box className="value_content_wrapper">
                    <h3>Communication</h3>
                    <p>Communicate effectively with our clients and colleague</p>
                </Box>
            </Grid>
            <Grid item xs={6} sm={3} style={footerStyles.section}  className="value_section">
                <Box className="value_content_wrapper">
                    <h3>Flexibility</h3>
                    <p> Able to adapt to the needs and give quick turnaround or a custom solution</p>
                </Box>     
            </Grid>
            <Grid item xs={6} sm={3} style={footerStyles.section}  className="value_section">
                <Box className="value_content_wrapper">
                    <h3>Commitment</h3>
                    <p> Committed to providing the best possible service and solutions</p>
                </Box>
            </Grid>
        </Grid> 

      </Container>
     
  );
};

export default Value;