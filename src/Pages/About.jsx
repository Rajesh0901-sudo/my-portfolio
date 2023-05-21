import {React,useState,useEffect} from 'react';
import { Helmet } from 'react-helmet';
import data from '../Components/data/aboutMeData';
import myImage from '../assets/icons/IMG_20230219_200503-PhotoRoom-PhotoRoom-PhotoRoom (1).png'

import { Box, Container, Grid, Typography } from '@mui/material';

import Footer from "../Components/Footer";
import NewFooter from "../Components/NewFooter";




import './scss/About.scss'

const containerStyles = {
  padding: '16px',
  margin: '8px',
};

const AboutUsPage = () => {

  const [timeofday, setTimeOfDay] = useState('Morning');

  useEffect(() => {
    var today = new Date()
    var curHr = today.getHours()
    
    console.log(curHr);
  
    if (curHr < 12) {

      setTimeOfDay('Morning')
      
    } else if (curHr < 18) {

       setTimeOfDay('Afternoon')
      
    } else {

      setTimeOfDay('Evening')

    }   

  }, []);

  return (
  <>
    <Helmet>
      <title>About - Rajesh Sahu Portfolio</title>
    </Helmet>

    <Container maxWidth="lg">
        <Grid container spacing={3} className="about_section_wrapper">

            <Grid sx={{ display: { xs: 'none', sm: 'flex' } }}  item xs={0} sm={1} className="about_section_logo_div"	 >
              <Box  className="about_section_social_logo">
                  <a target='_blank' href='https://github.com/Rajesh0901-sudo/'><h4  className='footer_contents'><img src='./images/compuse/iconmonstr_github_1.svg'/></h4></a>
                  <a target='_blank' href='https://www.linkedin.com/in/rajesh-s-sahu/'><h4  className='footer_contents'><img src='./images/compuse/iconmonstr-linkedin-3.svg'/></h4></a>
                  <a target='_blank' href='mailto:rajesh@techgeekdeveloper.com'><h4  className='footer_contents'><img src='./images/compuse/icons8-gmail-250.png'/></h4></a>
              </Box>
            </Grid>
            
            <Grid container item xs={12} sm={11} >
              <Grid item xs={12} sm={8}  className="about_section">
                  <Box className="about_content_wrapper">                     
                    <h1>Good {timeofday} 👋</h1>
                    <h1> I am</h1>
                    <h1><span className="my_name">{data.name}</span></h1>
                    <center><span>(Software Development Engineer and Freelancer)</span></center>
                    
                  </Box>
              </Grid>

              <Grid item xs={12} sm={3}  sx={{marginTop:{xs:'50px',sm:'0'}}}  className="about_section">
                <Box className="about_content_wrapper my_imgae_div">

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
                  <img  className='my_image_about_section'  src={myImage}/>
                </Box>
              </Grid>

              <Grid item xs={12} sx={{marginTop:{xs:'50px',sm:'0'}}} >
                 <span className="about_div">{data.about[0]}</span>
                 <br></br><br></br>
                 <span className="about_div">{data.about[0]}</span>
              </Grid>

            </Grid>
        </Grid> 

        <Grid container spacing={3}  className="second_section_about">

            <Grid item xs={12} sm={3}   className="second_section_heading">
         
              <h1>My Strength</h1>

            </Grid>

              <Grid item xs={12} sm={3}  className="second_section_box">
                <Box className="second_about_content_wrapper">
                    <h3>DSA</h3>
                    <img src='./images/logo/Folder 13.png'/>
                    <p>I have developed a solid understanding of Data Structures and Algorithms through the completion of over 400 practice questions.</p>
                </Box>
              </Grid>
 

              <Grid item xs={12} sm={3}   className="second_section_box">
                  <Box className="second_about_content_wrapper">
                      <h3>Development</h3>
                      <img src='./images/compuse/development.svg'/>
                    
                      <p>I possess two years of practical experience in full stack web development, actively engaging in various projects and honing my skills.</p>
                  </Box>     
              </Grid>


              <Grid item xs={12} sm={3}   className="second_section_box">
                  <Box className="second_about_content_wrapper">
                      <h3>Quick Learning</h3>
                      <img src='./images/compuse/comitment.svg'/>
                      <p> My postgraduate education in computer applications has equipped me with the proficiency to swiftly adapt to new technologies in the software development field.</p>
                  </Box>
              </Grid>
        </Grid> 

        <br/>

        <Grid container item className="education_section_about">

            <Grid item xs={12} sm={3}   className="education_section_heading">
         
              <h1>My Education</h1>

            </Grid>

            <Grid item xs={12} sm={9}  className="education_section_box">


              <h1 className="education_institute_name"><img src="./images/compuse/nitrai-13.png" />
                 <span className="name_institute_span">{data.education.institute}</span>
              </h1>

              <span>{data.education.degree } &nbsp; <span>(Post Grad)</span></span><br></br>
              <span><b>SGPA - {data.education.sgpa}</b></span>
            
              
              <br/><br/>


              <span>Courses - <b>{data.education.courses.join(", ")}.</b></span><br/><br/>

              <span>{data.education.descreption}</span>
              
            </Grid>

        </Grid> 

      </Container>

      <NewFooter footerEntered={true} />
          
          <Footer />
  </>
  );
};

export default AboutUsPage;
