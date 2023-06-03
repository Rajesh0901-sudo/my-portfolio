import React, { useState } from 'react';
import './scss/FeedBack.scss';
import Footer from "../Components/Footer";
import NewFooter from "../Components/NewFooter";

import {
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Snackbar,
  Container,Grid
} from '@mui/material';

const FeedbackForm = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [feedbackPositive, setFeedbackPositive] = useState('');
  const [feedbackNegative, setFeedbackNegative] = useState('');
  const [problemSolvingRating, setProblemSolvingRating] = useState('');
  const [initiativeRating, setInitiativeRating] = useState('');
  const [collaborationRating, setCollaborationRating] = useState('');
  const [qualityOfRating, setqualityOfRating] = useState('');
  const [technicalSkillsRating, setTechnicalSkillsRating] = useState('');
  const [communicationSkillsRating, setCommunicationSkillsRating] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFeedbackPositiveChange = (event) => {
    setFeedbackPositive(event.target.value);
  };

  const handleFeedbackNegativeChange = (event) => {
    setFeedbackNegative(event.target.value);
  };

  const handleInitiativeRating = (event) => {
    setInitiativeRating(event.target.value);
  };

  const handleCollaborationRating = (event) => {
    setCollaborationRating(event.target.value);
  };
  const handlequalityOfRating = (event) => {
    setqualityOfRating(event.target.value);
  };
  const handleTechnicalSkillsRating = (event) => {
    setTechnicalSkillsRating(event.target.value);
  };
  const handleCommunicationSkillsRating = (event) => {
    setCommunicationSkillsRating(event.target.value);
  };

  const handleProblemSolvingRating = (event) => {
    setProblemSolvingRating(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your logic here to submit the feedback data
    // For this example, let's just show a snackbar
    setShowSnackbar(true);
    setName('');
    setEmail('');
    setFeedbackPositive('');
    setProblemSolvingRating('');
    setCollaborationRating('');
    setInitiativeRating('');
    setqualityOfRating('');
    setTechnicalSkillsRating('');
    setCommunicationSkillsRating('');
  };

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  return (
  <>
    <Container maxWidth="lg" style={{minHeight:'100vh'}} >
       <Grid container spacing={5} className="feedback_section_wrapper" 
          justifyContent="center">
          <Grid item xs={12} sm={4} className="feedback_section_div"	justifyContent="center" >
            <img src="./images/compuse/feedbackform.svg" alt="FeedBack" />
          </Grid>

        <Grid item xs={12} sm={8} className="feedback_section_second_div"	 >
          <form onSubmit={handleSubmit}>
            <Typography variant="h4" gutterBottom className='feedback_form_header'>
              Feedback Form
            </Typography>
              <span>
              Thank you for taking the time to provide feedback. 
              Your insights and comments are valuable to me as I strive to improve my skills. 
              Please take a few moments to share your thoughts and suggestions .
            </span>
            
            <FormControl fullWidth sx={{ my: 2 }}>
              <TextField
                label="Your Full Name"
                margin="normal"
                required
                value={Name}
                onChange={handleNameChange}
              />
            </FormControl>
            <FormControl fullWidth sx={{ my: 2 }}>
              <TextField
                label="Your Email"
                margin="normal"
                required
                value={Email}
                onChange={handleEmailChange}
              />
            </FormControl>


            <Grid container spacing={1} className="feedback_section_wrapper" 
            justifyContent="space-between">

              <Grid item xs={12} sm={6} className="feedback_section_div"	 >
                <FormControl component="fieldset" sx={{ my: 2 }}>
                  <FormLabel component="legend">Problem-Solving</FormLabel>
                  <RadioGroup
                    row
                    aria-label="Problem-Solving"
                    name="rating"
                    required
                    value={problemSolvingRating}
                    onChange={handleProblemSolvingRating}
                  >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                    <FormControlLabel value="5" control={<Radio />} label="5" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} className="feedback_section_div"	 >

                <FormControl component="fieldset" sx={{ my: 2 }}>
                  <FormLabel component="legend">Initiative and Proactiveness</FormLabel>
                  <RadioGroup
                    row
                    aria-label="Initiative and Proactiveness"
                    name="rating"
                    required
                    value={initiativeRating}
                    onChange={handleInitiativeRating}
                  >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                    <FormControlLabel value="5" control={<Radio />} label="5" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} className="feedback_section_div"	 >
                  <FormControl component="fieldset" sx={{ my: 2 }}>
                    <FormLabel component="legend">Teamwork and Collaboration</FormLabel>
                    <RadioGroup
                      row
                      aria-label="Teamwork and Collaboration"
                      name="rating"
                      required
                      value={collaborationRating}
                      onChange={handleCollaborationRating}
                    >
                      <FormControlLabel value="1" control={<Radio />} label="1" />
                      <FormControlLabel value="2" control={<Radio />} label="2" />
                      <FormControlLabel value="3" control={<Radio />} label="3" />
                      <FormControlLabel value="4" control={<Radio />} label="4" />
                      <FormControlLabel value="5" control={<Radio />} label="5" />
                    </RadioGroup>
                  </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} className="feedback_section_div"	 >
                 <FormControl component="fieldset" sx={{ my: 2 }}>
                  <FormLabel component="legend">Quality of Work</FormLabel>
                  <RadioGroup
                    row
                    aria-label="Quality of Work"
                    name="rating"
                    required
                    value={qualityOfRating}
                    onChange={handlequalityOfRating}
                  >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                    <FormControlLabel value="5" control={<Radio />} label="5" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} className="feedback_section_div"	 >
                  <FormControl component="fieldset" sx={{ my: 2 }}>
                    <FormLabel component="legend">Technical Skills</FormLabel>
                    <RadioGroup
                      row
                      aria-label="Technical Skills"
                      name="rating"
                      required
                      value={technicalSkillsRating}
                      onChange={handleTechnicalSkillsRating}
                    >
                      <FormControlLabel value="1" control={<Radio />} label="1" />
                      <FormControlLabel value="2" control={<Radio />} label="2" />
                      <FormControlLabel value="3" control={<Radio />} label="3" />
                      <FormControlLabel value="4" control={<Radio />} label="4" />
                      <FormControlLabel value="5" control={<Radio />} label="5" />
                    </RadioGroup>
                  </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} className="feedback_section_div"	 >
                <FormControl component="fieldset" sx={{ my: 2 }}>
                  <FormLabel component="legend">Communication Skills</FormLabel>
                  <RadioGroup
                    row
                    aria-label="Communication Skills"
                    name="rating"
                    required
                    value={communicationSkillsRating}
                    onChange={handleCommunicationSkillsRating}
                  >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                    <FormControlLabel value="5" control={<Radio />} label="5" />
                  </RadioGroup>
                </FormControl>
              </Grid>

            </Grid>

            <FormControl fullWidth sx={{ my: 2 }}>
              <TextField
                label="Highlight the specific traits or qualities that you liked about me."
                multiline
                rows={4}
                required
                value={feedbackPositive}
                onChange={handleFeedbackPositiveChange}
              />
            </FormControl>
            
            <FormControl fullWidth sx={{ my: 2 }}>
              <TextField
                label="What I can improve upon."
                multiline
                rows={4}
                required
                value={feedbackNegative}
                onChange={handleFeedbackNegativeChange}
              />
            </FormControl>
            

            
            <Button variant="contained"  fullWidth  size="large" color="primary" type="submit" className='feed_back_submit_button'>
              Submit
            </Button>
            <Snackbar
              open={showSnackbar}
              autoHideDuration={3000}
              onClose={handleSnackbarClose}
              message="Feedback submitted successfully!"
            />
          </form>
        </Grid>
      </Grid>
    </Container>
    <NewFooter footerEntered={true} />
    <Footer/>
  </>
  );
};

export default FeedbackForm;
