import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import RajeshLogo100 from '../assets/images/RajeshLogo300.png';
import './scss/NewFooter.scss';

import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';



const footerStyles = {
  root: {
    backgroundColor: '#212529',
    color: '#d9d9d9',
    minHeight:'50vh',
    padding: '24px',
    marginTop: 'auto',
  },
  section: {
    display: 'flex',
    minHeight: '33vh',

    '& > *': {
      margin: '0 16px',
    },
  },
};

const NewFooter = () => {
  return (
    <footer style={footerStyles.root}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
            <Grid item xs={12} sm={3} style={footerStyles.section}>
                <Box  className="footer_section logo_div_footer" >
                    <div className='navbar_logo_div' style={{width:'100px',height:'100px'}}>   
                        <div className="hero-banner-one">
                          <div className="hero-upper-container">
                              <div className="bubble-one"></div>
                              <div className="bubble-two"></div>
                              <div className="bubble-three"></div>
                              <div className="bubble-four"></div>
                              <div className="bubble-five"></div>
                              <div className="bubble-six"></div>
                          </div>
                        </div>
                        <img className='footer_section_icon' src={RajeshLogo100} />
                    </div>
                </Box>
            </Grid>
            <Grid item xs={12} sm={3} style={footerStyles.section}>
                <Box  className="footer_section">
                    <h2 className='section_heading'> <BookmarkOutlinedIcon/>&nbsp; Follow me</h2>
                    <a target='_blank' href='https://github.com/Rajesh0901-sudo/'><h4  className='footer_contents'><img src='./images/compuse/iconmonstr_github_1.svg'/> &nbsp; GitHub</h4></a>
                    <a target='_blank' href='https://www.linkedin.com/in/rajesh-s-sahu/'><h4  className='footer_contents'><img src='./images/compuse/iconmonstr-linkedin-3.svg'/> &nbsp;LinkedIn</h4></a>
                    <a target='_blank' href='mailto:rajesh@techgeekdeveloper.com'><h4  className='footer_contents'><img src='./images/compuse/icons8-gmail-250.png'/> &nbsp;Gmail</h4></a>
                </Box>
            </Grid>
            <Grid item xs={12} sm={3} style={footerStyles.section}>
                <Box className="footer_section">
                    <h2 className='section_heading'><BusinessOutlinedIcon/>&nbsp; Corporate</h2>
                    <h4 className='footer_contents'> <CottageOutlinedIcon/> &nbsp;Home</h4>
                    <h4 className='footer_contents'><LocalLibraryOutlinedIcon/>&nbsp;About</h4>
                    <h4 className='footer_contents'><ContactPageOutlinedIcon/>&nbsp;Contact</h4>
                </Box>
            
            </Grid>
            <Grid item xs={12} sm={3} style={footerStyles.section}>
                <Box  className="footer_section">
                    <h2 className='section_heading'><MilitaryTechOutlinedIcon/> &nbsp; Freelance</h2>
                    <h4 className='footer_contents'> <CottageOutlinedIcon/> &nbsp; Home</h4>
                    <h4 className='footer_contents'><LocalLibraryOutlinedIcon/>&nbsp;About</h4>
                    <h4 className='footer_contents'><ContactPageOutlinedIcon/>&nbsp;Contact</h4>
                </Box>
            </Grid>
        </Grid> 

      </Container>
     
    </footer>
  );
};

export default NewFooter;