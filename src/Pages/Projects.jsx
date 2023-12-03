import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid, Typography } from '@mui/material';

import Footer from "../Components/Footer";
import NewFooter from "../Components/NewFooter";

import './scss/Experience.scss';
import './scss/Projects.scss';

import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import MicrowaveOutlinedIcon from '@mui/icons-material/MicrowaveOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';


import data from '../Components/data/aboutMeData';

const ProjectsTemplate = () => {
  return Object.entries(data.projects).map(projectData=>{
    return (
      <>
        <div className='exp_section_heading_wrapper'>
          <h1 className='project_section_heading' >
            <DocumentScannerOutlinedIcon/>
            &nbsp; {projectData[0]}
          </h1> 
        </div> 

        {
          projectData[1].map(d => {
            return (
              <Grid container item spacing={1} className="exp_section_div2">
                {/* <Grid  item xs={3} sm={1}  >           
                  <img className='exp_logo_company' src='./images/compuse/appeq.png'/>
                </Grid> */}
        
                <Grid item xs={9} sm={9} >
                  <h2>{d.name}</h2>
        
                </Grid>
        
                <Grid  item  sx={{ display: { xs: 'none', sm: 'flex' } }}  >           
                  <span>{d.duration}</span>
                </Grid>  
        
                <Grid  item xs={12}>           
                  <span>{d.description}</span>
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
        
                <Grid  item xs={12} className='skills_div'>           
                  <span><b>Github Link : </b>
                  <a  
                    href={d.github_link} target='_blank' style={{textDecoration:'none'}}>
                      {d.github_link}
                    </a>
                  </span>
                </Grid>
              </Grid>
            )
          })
        }
      </>
    
    )
  })
}

const Projects = () => {
  return (
  <>
    <Helmet>
      <title>Projects - Rajesh Sahu Portfolio</title>
    </Helmet>

    
    <Container maxWidth="lg" style={{minHeight:'100vh',marginBottom:'150px'}} >
      <Grid container spacing={3} className="exp_section_wrapper">

          <Grid item xs={12} sm={6} className="exp_section_div"	 >
            <h1>Accomplished Projects</h1>
            <span>
              Implemented cutting-edge technologies to develop user-friendly websites, established predictive models, and provided robust web applications. 
            </span>
          </Grid>
          
          <Grid  item xs={12} sm={6}  className="exp_section_div" >           
             <img className='exp_logo' src='./images/compuse/projectsHeader.svg'/>
          </Grid>
      </Grid> 

      <Grid container spacing={3} className="exp_section_wrapper">  

      <ProjectsTemplate />


      </Grid> 
      <Grid container item spacing={1} className="exp_section_div2">
              
      </Grid>

    </Container>

    <NewFooter footerEntered={true} />
          
    <Footer />
  </>
  );
};

export default Projects;
