// The code snippet below is the implementation of the Contact component. The component is responsible for rendering the contact form and handling the form submission logic. The component uses the addMessage function from the api.js file to send the form data to the server. The handleSubmit function is called when the form is submitted, and it extracts the form data and calls the addMessage function to send the data to the server. If the message is sent successfully, the component sets the isSubmitted state to true, which triggers the rendering of a success message. If there is an error while sending the message, an error message is logged to the console. The component also uses the useEffect hook to reset the isSubmitted state when the component is mounted. The component uses the Material-UI library to render the form elements and styling.

import {React,useEffect,useState} from 'react';
import { Container, Grid, Typography, TextField, Button,Box } from '@mui/material';
import { Helmet } from 'react-helmet';
import { addMessage,getMessage } from '../services/api';
import './scss/Contact.scss'


// The Contact component is used in the Contact page to render the contact form and handle the form submission logic. The component is imported in the Contact page and rendered within the page component. The Contact page also imports the Footer and NewFooter components to render the footer sections of the page. The Contact page sets the title of the page using the Helmet component from the react-helmet library.


const Connect = () => {
  const [isSubmitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted((isSubmitted)=> false)
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    console.log(data);
    const response = await addMessage(data);

    if(response){
      console.log('Message sent successfully');
      setSubmitted((isSubmitted)=> true);
    }
    else{
      console.log('Error while sending message');
    }
  };

  return (
  <>

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
                    <a target='_blank' href='mailto:rajesh@rajeshs.co.in'><img src='./images/compuse/icons8-gmail-250.png'/></a>
                </Box>
              </Grid>
              <Grid item xs={12} sm={5} className='contact_form_div'>
                <form onSubmit= {handleSubmit} className="new_Form">
                  <TextField
                    label="Name"
                    name='name'
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                  />
                  <TextField
                    label="Email"
                    type="email"
                    name='email'
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                  />
                  <TextField
                    label="Message"
                    name='message'
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
                    <a target='_blank' href='mailto:rajesh@rajeshs.co.in'><img src='./images/compuse/icons8-gmail-250.png'/></a>
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