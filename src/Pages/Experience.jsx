import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid, Typography } from '@mui/material';

import Footer from "../Components/Footer";
import NewFooter from "../Components/NewFooter";

import './scss/Experience.scss';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import data from '../Components/data/aboutMeData';



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

        <div className='exp_section_heading_wrapper'>
            <h1 className='exp_section_heading' >
              <BusinessOutlinedIcon/>
              &nbsp;  Corporate
            </h1> 
        </div>
            
          


          <Grid container item spacing={1} className="exp_section_div2">
              <Grid  item xs={3} sm={1}  >           
                <img className='exp_logo_company' src='./images/compuse/appeq.png'/>
              </Grid>

              <Grid item xs={9} sm={9} >
                <h2>{data.work_experience[0].position}</h2>
                <span><b>{data.work_experience[0].company}</b></span> &nbsp; 
              </Grid>

              <Grid  item  sx={{ display: { xs: 'none', sm: 'flex' } }}  >           
                <span>{data.work_experience[0].duration}</span>
              </Grid>  

              <Grid  item xs={12}>           
                <span>{data.work_experience[0].responsibilities}</span>
              </Grid>  

              <Grid  item xs={12} className='skills_div'>           
                <span><b>Technical Skill :</b> {data.work_experience[0].technical_skills.join(", ")}.</span>
              </Grid>
              
              <Grid  item xs={12} className='skills_div'>           
                <span><b>Soft Skill :</b> {data.work_experience[0].soft_skills.join(", ")}.</span>
              </Grid>

              <Grid  item xs={12} className='skills_div'>           
                <span><b>Impact :</b> {data.work_experience[0].impact.join(", ")}.</span>
              </Grid>
          </Grid>

          <Grid container item spacing={1} className="exp_section_div2">
              <Grid  item xs={3} sm={1}  >           
                <img style={{width:'80px'}} className='exp_logo_company' src='./images/compuse/atplc_logo.png'/>
              </Grid>

              <Grid item xs={9} sm={9} >
                <h2>{data.work_experience[1].position}</h2>
                <span><b>{data.work_experience[1].company}</b></span> &nbsp; 
              </Grid>

              <Grid  item  sx={{ display: { xs: 'none', sm: 'flex' } }}  >           
                <span>{data.work_experience[1].duration}</span>
              </Grid>  

              <Grid  item xs={12}>           
                <span>{data.work_experience[1].responsibilities}</span>
              </Grid>  

              <Grid  item xs={12} className='skills_div'>           
                <span><b>Technical Skill :</b> {data.work_experience[1].technical_skills.join(", ")}.</span>
              </Grid>
              
              <Grid  item xs={12} className='skills_div'>           
                <span><b>Soft Skill :</b> {data.work_experience[1].soft_skills.join(", ")}.</span>
              </Grid>

              <Grid  item xs={12} className='skills_div'>           
                <span><b>Impact :</b> {data.work_experience[1].impact.join(", ")}.</span>
              </Grid>
          </Grid>

        <div className='exp_section_heading_wrapper'>
          <h1 className='exp_section_heading' >
            <MilitaryTechOutlinedIcon/>
            &nbsp;  Freelance
          </h1> 
        </div>

        <Grid container item spacing={1} className="exp_section_div2">
              <Grid  item xs={3} sm={1}  >           
                <img className='exp_logo_company' src='./images/compuse/fliqcard_logo.png'/>
              </Grid>

              <Grid item xs={9} sm={9} >
                <h2>{data.freelance_work_experience[0].position}</h2>
                <span><b>{data.freelance_work_experience[0].company}</b></span> &nbsp; 
              </Grid>

              <Grid  item  sx={{ display: { xs: 'none', sm: 'flex' } }}  >           
                <span>{data.freelance_work_experience[0].duration}</span>
              </Grid>  

              <Grid  item xs={12}>           
                <span>{data.freelance_work_experience[0].responsibilities}</span>
              </Grid>  

              <Grid  item xs={12} className='skills_div'>           
                <span><b>Technical Skill :</b> {data.freelance_work_experience[0].technical_skills.join(", ")}.</span>
              </Grid>
              
              <Grid  item xs={12} className='skills_div'>           
                <span><b>Soft Skill :</b> {data.freelance_work_experience[0].soft_skills.join(", ")}.</span>
              </Grid>

              <Grid  item xs={12} className='skills_div'>           
                <span><b>Impact :</b> {data.freelance_work_experience[0].impact.join(", ")}.</span>
              </Grid>
        </Grid>

          <Grid container item spacing={1} className="exp_section_div2">
              <Grid  item xs={3} sm={1}  >           
                <img className='exp_logo_company' src='./images/compuse/upwork_logo.png'/>
              </Grid>

              <Grid item xs={9} sm={9} >
                <h2>{data.freelance_work_experience[1].position}</h2>
                <span><b>{data.freelance_work_experience[1].company}</b></span> &nbsp; 
              </Grid>

              <Grid  item  sx={{ display: { xs: 'none', sm: 'flex' } }}  >           
                <span>{data.freelance_work_experience[1].duration}</span>
              </Grid>  

              <Grid  item xs={12}>           
                <span>{data.freelance_work_experience[1].responsibilities}</span>
              </Grid>  

              <Grid  item xs={12} className='skills_div'>           
                <span><b>Technical Skill :</b> {data.freelance_work_experience[1].technical_skills.join(", ")}.</span>
              </Grid>
              
              <Grid  item xs={12} className='skills_div'>           
                <span><b>Soft Skill :</b> {data.freelance_work_experience[1].soft_skills.join(", ")}.</span>
              </Grid>

              <Grid  item xs={12} className='skills_div'>           
                <span><b>Impact :</b> {data.freelance_work_experience[1].impact.join(", ")}.</span>
              </Grid>
          </Grid>

          <Grid container item spacing={1} className="exp_section_div2">
              <Grid  item xs={3} sm={1}  >           
                <img className='exp_logo_company' src='./images/compuse/Planora_logo.png'/>
              </Grid>

              <Grid item xs={9} sm={9} >
                <h2>{data.freelance_work_experience[2].position}</h2>
                <span><b>{data.freelance_work_experience[2].company}</b></span> &nbsp; 
              </Grid>

              <Grid  item  sx={{ display: { xs: 'none', sm: 'flex' } }}  >           
                <span>{data.freelance_work_experience[2].duration}</span>
              </Grid>  

              <Grid  item xs={12}>           
                <span>{data.freelance_work_experience[2].responsibilities}</span>
              </Grid>  

              <Grid  item xs={12} className='skills_div'>           
                <span><b>Technical Skill :</b> {data.freelance_work_experience[2].technical_skills.join(", ")}.</span>
              </Grid>
              
              <Grid  item xs={12} className='skills_div'>           
                <span><b>Soft Skill :</b> {data.freelance_work_experience[2].soft_skills.join(", ")}.</span>
              </Grid>

              <Grid  item xs={12} className='skills_div'>           
                <span><b>Impact :</b> {data.freelance_work_experience[2].impact.join(", ")}.</span>
              </Grid>
          </Grid>

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
