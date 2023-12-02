import React from 'react';
import { Box, Typography, Button,CardMedia,Container,Grid, } from '@mui/material';
import RajeshLogo from '../assets/images/RajeshLogoWithoutBackground.png';
import './scss/HeroSection.scss';


const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        padding: '80px 0',
        textAlign: 'center',
      }}
      className='hero_div_wrapper'
    >

        <Typography variant="h2" component="h2" sx={{ marginBottom: '16px' }}>
            Welcome to My - <span className='hero_header_diff'>Portfolio</span>
        </Typography>

    <div className="hero-banner-one">
        <div className="hero-upper-container">
          <div className="icon-box-one">
            <img src="images/logo/aws.png" alt="logo" />
          </div>
          <div className="icon-box-two">
            <img src="images/logo/js.png" alt="logo" />
          </div>
          <div className="icon-box-three">
            <img src="images/logo/Folder 12.png" alt="logo" />
          </div>
          <div className="icon-box-four">
            <img src="images/logo/Folder 13.png" alt="logo" />
          </div>
          <div className="icon-box-five">
            <img src="images/logo/Shape 1 copy 3.png" alt="logo" />
          </div>
          <div className="icon-box-six">
            <img src="images/logo/Shape 1 copy 5.png" alt="logo" />
          </div>
          <div className="icon-box-seven">
            <img src="images/logo/Shape 1 copy 6.png" alt="logo" />
          </div>
          <div className="icon-box-eight">
            <img src="images/logo/Shape 1 copy 7.png" alt="logo" />
          </div>
          <div className="icon-box-nine">
            <img src="images/logo/Shape 1 copy 9.png" alt="logo" />
          </div>
          <div className="icon-box-ten">
            <img src="images/logo/Shape 1 copy 10.png" alt="logo" />
          </div>


          <div className="bubble-one"></div>
          <div className="bubble-two"></div>
          <div className="bubble-three"></div>
          <div className="bubble-four"></div>
          <div className="bubble-five"></div>
          <div className="bubble-six"></div>
          {/* End all bubble images */}

        </div>
        {/* /.hero-upper-container */}
      </div>

        <br />

      <CardMedia
        component="img"
        src={RajeshLogo}
        alt="Hero Image"
        className='hero_image'
      />



      <br  />

      <Typography variant="h5" component="p" sx={{ fontSize: '36px',fontWeight:'500',zIndex:'2' }}>
        Software Development <span className='hero_header_diff'>Engineer</span>
      </Typography>
      <Typography variant="h5" component="p" sx={{ marginBottom: '32px',zIndex:'2' }}>
        creating <span className='hero_header_diff'>innovative solutions</span> and pushing the boundaries of technology.
      </Typography>

      <Container maxWidth="lg">
          <Grid container spacing={1} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Grid item xs={6} sm={3} >
              <Button
                href="contact"
                variant="contained"
                size="large"
                fullWidth
                className='home_section_connect_button'
              >
                Let's Connect
              </Button>
            </Grid>
            <Grid item xs={6} sm={3} >
              <Button
                href="pdf/Rajesh_Resume_updated_2nd_December.pdf"
                target='_blank'
                variant="contained"
                size="large"
                fullWidth

                className='home_section_resume_button'
              >
                Get Resume
              </Button>
            </Grid>
          </Grid>
      </Container>



        <div className="container">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
        </div>  

    </Box>
  );
};

export default HeroSection;
