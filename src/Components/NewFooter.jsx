import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import RajeshLogo100 from '../assets/images/RajeshLogo300.png';
import './scss/NewFooter.scss';

import Grow from '@mui/material/Grow';

import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';



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

const NewFooter = ({footerEntered}) => {

  console.log(footerEntered);

  return (
    <footer style={footerStyles.root} className='footer_main_wrapper'> 
      <Container maxWidth="lg">
        <Grid container spacing={3}  className='footer_main_wrapper_div'>
          <Grow in={footerEntered} {...(footerEntered ? { timeout: 1000 } : {})}>
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
          </Grow>

          <Grow in={footerEntered} {...(footerEntered ? { timeout: 2000 } : {})}>
            <Grid item xs={12} sm={3} style={footerStyles.section}>
                <Box  className="footer_section">
                    <h2 className='section_heading'> <BookmarkOutlinedIcon/>&nbsp; Follow me</h2>
                    <a target='_blank' href='https://github.com/Rajesh0901-sudo/'><h4  className='footer_contents'><img src='./images/compuse/iconmonstr_github_1.svg'/> &nbsp; GitHub</h4></a>
                    <a target='_blank' href='https://www.linkedin.com/in/rajesh-s-sahu/'><h4  className='footer_contents'><img src='./images/compuse/iconmonstr-linkedin-3.svg'/> &nbsp;LinkedIn</h4></a>
                    <a target='_blank' href='mailto:rajesh@rajeshs.co.in'><h4  className='footer_contents'><img src='./images/compuse/icons8-gmail-250.png'/> &nbsp;Email</h4></a>
                </Box>
            </Grid>
          </Grow>

          <Grow in={footerEntered} {...(footerEntered ? { timeout: 2000 } : {})}>
            <Grid item xs={12} sm={3} style={footerStyles.section}>
                <Box className="footer_section">
                <h2 className='section_heading'><BusinessOutlinedIcon/>&nbsp; Corporate</h2>
                <a target='_blank' href='#'><h4 className='footer_contents'> <CottageOutlinedIcon/> &nbsp;Home</h4></a>
                <a target='_blank' href='#'><h4 className='footer_contents'><LocalLibraryOutlinedIcon/>&nbsp;About</h4></a>
                <a target='_blank' href='#'><h4 className='footer_contents'><ContactPageOutlinedIcon/>&nbsp;Contact</h4></a>
                </Box>
            
            </Grid>
          </Grow>

          <Grow in={footerEntered} {...(footerEntered ? { timeout: 3000 } : {})}>
            <Grid item xs={12} sm={3} style={footerStyles.section}>
                <Box  className="footer_section">
                    <h2 className='section_heading'><MilitaryTechOutlinedIcon/> &nbsp; Freelance</h2>
                    <a target='_blank' href='#'><h4 className='footer_contents'><EngineeringOutlinedIcon /> &nbsp; Experience </h4></a>
                    <a target='_blank' href='#'><h4 className='footer_contents'> <IntegrationInstructionsOutlinedIcon />&nbsp; Projects</h4></a>
                    <a target='_blank' href='pdf/Rajesh_Resume_updated_08_may.pdf'><h4 className='footer_contents'> <IntegrationInstructionsOutlinedIcon />&nbsp; Download Resume</h4></a>
                </Box>
            </Grid>
          </Grow>
        </Grid> 

      </Container>
     
    </footer>
  );
};

export default NewFooter;