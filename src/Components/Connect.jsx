import {React,useEffect,useState} from 'react';
import { Container, Grid, Typography, TextField, Button,Box } from '@mui/material';
import { Helmet } from 'react-helmet';

import './scss/Contact.scss'



const Connect = () => {
  const [isSubmitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted((isSubmitted)=> false)
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission logic here
    await setSubmitted((isSubmitted)=> true);
  };

  return (
  <>
      <Helmet>
        <title>Contact - Rajesh Sahu Portfolio</title>
      </Helmet>

    {!isSubmitted ? (
          <Container maxWidth="lg" className='contact_wrapper'>
            <Grid container spacing={3}>
            
              <Grid item xs={12} style={{marginBottom:'50px'}} >
                <Typography variant="h4" align="center" gutterBottom>
                  Reach Out and Let's Connect 
                </Typography>
                <span style={{display:'block',textAlign:'center'}}>Take the step and reach out to us today. We are eager to hear from you and start a meaningful conversation.</span>
              </Grid>
              <Grid item xs={12} sm={6} className='contact_side_image_div'>
                <img
                  src="./images/compuse/contactPage.svg"
                  alt="Contact us"
                  className='contact_side_image'
                />
                <Box  className="about_section_social_logo">
                    <a target='_blank' href='https://github.com/Rajesh0901-sudo/'><img src='./images/compuse/iconmonstr_github_1.svg'/></a>
                    <a target='_blank' href='https://www.linkedin.com/in/rajesh-s-sahu/'><img src='./images/compuse/iconmonstr-linkedin-3.svg'/></a>
                    <a target='_blank' href='mailto:rajesh@techgeekdeveloper.com'><img src='./images/compuse/icons8-gmail-250.png'/></a>
                </Box>
              </Grid>
              <Grid item xs={12} sm={5} className='contact_form_div'>
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                  />
                  <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth

                    className='contact_button'
                  >
                    Submit
                  </Button>
                </form>
              </Grid>

            </Grid>
          </Container>
        ) : (
          <Container maxWidth="lg" className='contact_wrapper'>
            <Grid container spacing={3}>
            
              <Grid item xs={12} style={{marginBottom:'50px'}} >
                <Typography variant="h4" align="center" gutterBottom>
                  It Is A Pleasure To Hear From You 
                </Typography>
                <span style={{display:'block',textAlign:'center'}}>
                    I appreciate your interest and look forward to connect. I will get back to you as soon as possible. 
                </span>
              </Grid>
              <Grid item xs={12} sm={12} className='contact_side_image_div'>
                <img
                  src="./images/compuse/contactSuccess.svg"
                  alt="Contact us"
                  className='contact_side_image'
                />
                <Box  className="about_section_social_logo">
                    <a target='_blank' href='https://github.com/Rajesh0901-sudo/'><img src='./images/compuse/iconmonstr_github_1.svg'/></a>
                    <a target='_blank' href='https://www.linkedin.com/in/rajesh-s-sahu/'><img src='./images/compuse/iconmonstr-linkedin-3.svg'/></a>
                    <a target='_blank' href='mailto:rajesh@techgeekdeveloper.com'><img src='./images/compuse/icons8-gmail-250.png'/></a>
                </Box>
              </Grid>
              <Grid item xs={12} style={{marginTop:'100px'}} >
                <Typography variant="h4" align="center" gutterBottom>
                   Thank You.
                </Typography>
              </Grid>

            </Grid>
          </Container>
        )
    }

  </>
  );
};

export default Connect;