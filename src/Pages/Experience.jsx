import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid, Typography } from '@mui/material';

import Footer from "../Components/Footer";
import NewFooter from "../Components/NewFooter";

import './scss/Experience.scss';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import data from '../Components/data/aboutMeData';


const ExperienceTemplate = () => {
  return Object.entries(data.experience).map(experienceData=>{
    return (
      <>
        <div className='exp_section_heading_wrapper'>
          <h1 className='exp_section_heading' >
            <BusinessOutlinedIcon/>
            &nbsp; {experienceData[0]}
          </h1> 
        </div>
        {
          experienceData[1].map(d=>{
            return(
               <Grid container item spacing={1} className="exp_section_div2">
                  <Grid  item xs={3} sm={1}  >           
                    <img style={{width:'80px'}} className='exp_logo_company' src={d.logoImageUrl}/>
                  </Grid>
                
                  <Grid item xs={9} sm={9} >
                    <h2>{d.position}</h2>
                    <span><b>{d.company}</b></span> &nbsp; 
                  </Grid>

                  <Grid  item  sx={{ display: { xs: 'none', sm: 'flex' } }}  >           
                    <span>{d.duration}</span>
                  </Grid>  

                  <Grid  item xs={12}>           
                    <span>{d.responsibilities}</span>
                  </Grid>  

                  <Grid  item xs={12} className='skills_div'>           
                    <span><b>Technical Skill :</b> {d.technical_skills.join(", ")}.</span>
                  </Grid>
                  
                  <Grid  item xs={12} className='skills_div'>           
                    <span><b>Soft Skill :</b> {d.soft_skills.join(", ")}.</span>
                  </Grid>

                  <Grid  item xs={12} className='skills_div'>           
                    <span><b>Impact :</b> {d.impact.join(", ")}.</span>
                  </Grid>
              </Grid>
            )
          })
        }
      </>
    )
  })
}


const Experience = () => {
  return (
  <>
    <Helmet>
      <title>Experience - Rajesh Sahu Portfolio</title>
    </Helmet>

    
    <Container maxWidth="lg" style={{minHeight:'100vh'}}>
      <Grid container spacing={3} className="exp_section_wrapper">

          <Grid item xs={12} sm={6} className="exp_section_div"	 >
            <h1>Dynamic Software Engineering Journey: Coding Enthusiast and Problem Solver</h1>
            <span>Explore my software engineering journey characterized by a passion for coding and problem-solving. From conquering 400+ coding challenges to showcasing expertise in diverse technologies, join me in discovering the highlights of my dynamic journey in software engineering</span>
          </Grid>
          
          <Grid  item xs={12} sm={6}  className="exp_section_div" >           
             <img className='exp_logo' src='./images/compuse/experience.svg'/>
          </Grid>
      </Grid> 

      <Grid container spacing={3} className="exp_section_wrapper">


        <ExperienceTemplate />

        <Grid container item spacing={1} className="exp_section_div2">
            
        </Grid>

      </Grid> 

    </Container>

    <NewFooter footerEntered={true} />
          
    <Footer />
  </>
  );
};

export default Experience;
