import {React,useEffect,useState} from 'react';
import { Container, Grid, Typography, TextField, Button,Box } from '@mui/material';
import { Helmet } from 'react-helmet';
import Connect from "../Components/Connect";
import Footer from "../Components/Footer";
import NewFooter from "../Components/NewFooter";




const Contact = () => {
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


    <Connect />
    <NewFooter  footerEntered={true} />
    <Footer />
  </>
  );
};

export default Contact;