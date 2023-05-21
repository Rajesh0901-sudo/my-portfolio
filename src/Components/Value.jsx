import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import RajeshLogo100 from '../assets/images/RajeshLogo300.png';
import './scss/Value.scss';
import Grow from '@mui/material/Grow';
import Fade  from "react-awesome-reveal";

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

const Value = ({entered}) => {

  return (
      <Container maxWidth="lg">
        <Grid container spacing={3} >
          <Grow in={entered} {...(entered ? { timeout: 1000 } : {})}>
            <Grid item xs={12} sm={3} style={footerStyles.section}  className="value_section">
                <Box className="value_content_wrapper">
                    <h3>Quality</h3>
                    <img src='./images/compuse/qualityBox.svg'/>
                    <p>Deliver high-quality software that meets the requirements.</p>
                </Box>
            </Grid>
          </Grow>
          <Grow in={entered} {...(entered ? { timeout: 2000 } : {})}>
              <Grid item xs={12} sm={3} style={footerStyles.section} className="value_section">
                <Box className="value_content_wrapper">
                    <h3>Communication</h3>
                    <img src='./images/compuse/communicationBox.svg'/>
                    <p>Communicate effectively with clients and colleague.</p>
                </Box>
              </Grid>
            </Grow>

            <Grow in={entered}{...(entered ? { timeout: 3000 } : {})}>
              <Grid item xs={12} sm={3} style={footerStyles.section}  className="value_section">
                  <Box className="value_content_wrapper">
                      <h3>Flexibility</h3>
                      <img src='./images/compuse/flexibility.svg'/>
                      <p> Able to adapt to the needs and give quick turnaround or a custom solution.</p>
                  </Box>     
              </Grid>
            </Grow>

            <Grow in={entered} {...(entered ? { timeout: 4000 } : {})}>
              <Grid item xs={12} sm={3} style={footerStyles.section}  className="value_section">
                  <Box className="value_content_wrapper">
                      <h3>Commitment</h3>
                      <img src='./images/compuse/comitment.svg'/>
                      <p> Committed to provide the best possible service and solutions</p>
                  </Box>
              </Grid>
            </Grow>
        </Grid> 

      </Container>
     
  );
};

export default Value;