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


import data from '../Components/data/aboutMeData';



const Projects = () => {
  return (
  <>
    <Helmet>
      <title>Experience - Rajesh Sahu Portfolio</title>
    </Helmet>

    
    <Container maxWidth="lg" style={{minHeight:'100vh'}}>
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

          <div className='exp_section_heading_wrapper'>
            <h1 className='project_section_heading' >
              <LinkOutlinedIcon/>
              &nbsp; Blockchain
            </h1> 
          </div> 


          <Grid container item spacing={1} className="exp_section_div2">
              {/* <Grid  item xs={3} sm={1}  >           
                <img className='exp_logo_company' src='./images/compuse/appeq.png'/>
              </Grid> */}

              <Grid item xs={9} sm={9} >
                <h2>{data.projects[0].name}</h2>

              </Grid>

              <Grid  item  sx={{ display: { xs: 'none', sm: 'flex' } }}  >           
                <span>{data.projects[0].duration}</span>
              </Grid>  

              <Grid  item xs={12}>           
                <span>{data.projects[0].description}</span>
              </Grid>  

              <Grid  item xs={12} className='skills_div'>           
                <span><b>Technical Skill :</b> {data.projects[0].technical_skills.join(", ")}.</span>
              </Grid>
              
              <Grid  item xs={12} className='skills_div'>           
                <span><b>Soft Skill :</b> {data.projects[0].soft_skills.join(", ")}.</span>
              </Grid>

              <Grid  item xs={12} className='skills_div'>           
                <span><b>Impact :</b> {data.projects[0].impact.join(", ")}.</span>
              </Grid>

              <Grid  item xs={12} className='skills_div'>           
                <span><b>Github Link : </b>
                 <a  
                   href={data.projects[0].github_link} target='_blank' style={{textDecoration:'none'}}>
                    {data.projects[0].github_link}
                  </a>
                </span>
              </Grid>
          </Grid>

          <div className='exp_section_heading_wrapper'>
            <h1 className='project_section_heading' >
              <DocumentScannerOutlinedIcon/>
              &nbsp; Web Development
            </h1> 
          </div> 

          <Grid container item spacing={1} className="exp_section_div2">
              {/* <Grid  item xs={3} sm={1}  >           
                <img className='exp_logo_company' src='./images/compuse/appeq.png'/>
              </Grid> */}

              <Grid item xs={9} sm={9} >
                <h2>{data.projects[1].name}</h2>

              </Grid>

              <Grid  item  sx={{ display: { xs: 'none', sm: 'flex' } }}  >           
                <span>{data.projects[1].duration}</span>
              </Grid>  

              <Grid  item xs={12}>           
                <span>{data.projects[1].description}</span>
              </Grid>  

              <Grid  item xs={12} className='skills_div'>           
                <span><b>Technical Skill :</b> {data.projects[1].technical_skills.join(", ")}.</span>
              </Grid>
              
              <Grid  item xs={12} className='skills_div'>           
                <span><b>Soft Skill :</b> {data.projects[1].soft_skills.join(", ")}.</span>
              </Grid>

              <Grid  item xs={12} className='skills_div'>           
                <span><b>Impact :</b> {data.projects[1].impact.join(", ")}.</span>
              </Grid>

              <Grid  item xs={12} className='skills_div'>           
                <span><b>Github Link : </b>
                 <a  
                   href={data.projects[1].github_link} target='_blank' style={{textDecoration:'none'}}>
                    {data.projects[1].github_link}
                  </a>
                </span>
              </Grid>
          </Grid>

          <div className='exp_section_heading_wrapper'>
            <h1 className='project_section_heading' >
              <MicrowaveOutlinedIcon/>
              &nbsp; Machine Learning
            </h1> 
          </div> 

          <Grid container item spacing={1} className="exp_section_div2">
              {/* <Grid  item xs={3} sm={1}  >           
                <img className='exp_logo_company' src='./images/compuse/appeq.png'/>
              </Grid> */}

              <Grid item xs={9} sm={9} >
                <h2>{data.projects[2].name}</h2>

              </Grid>

              <Grid  item  sx={{ display: { xs: 'none', sm: 'flex' } }}  >           
                <span>{data.projects[2].duration}</span>
              </Grid>  

              <Grid  item xs={12}>           
                <span>{data.projects[2].description}</span>
              </Grid>  

              <Grid  item xs={12} className='skills_div'>           
                <span><b>Technical Skill :</b> {data.projects[2].technical_skills.join(", ")}.</span>
              </Grid>
              
              <Grid  item xs={12} className='skills_div'>           
                <span><b>Soft Skill :</b> {data.projects[2].soft_skills.join(", ")}.</span>
              </Grid>

              <Grid  item xs={12} className='skills_div'>           
                <span><b>Impact :</b> {data.projects[2].impact.join(", ")}.</span>
              </Grid>

              <Grid  item xs={12} className='skills_div'>           
                <span><b>Github Link : </b>
                 <a  
                   href={data.projects[2].github_link} target='_blank' style={{textDecoration:'none'}}>
                    {data.projects[2].github_link}
                  </a>
                </span>
              </Grid>
          </Grid>

          <div className='exp_section_heading_wrapper'>
            <h1 className='project_section_heading' >
              <MilitaryTechOutlinedIcon/>
              &nbsp; Data Analysis
            </h1> 
          </div> 

          <Grid container item spacing={1} className="exp_section_div2">
              {/* <Grid  item xs={3} sm={1}  >           
                <img className='exp_logo_company' src='./images/compuse/appeq.png'/>
              </Grid> */}

              <Grid item xs={9} sm={9} >
                <h2>{data.projects[3].name}</h2>

              </Grid>

              <Grid  item  sx={{ display: { xs: 'none', sm: 'flex' } }}  >           
                <span>{data.projects[3].duration}</span>
              </Grid>  

              <Grid  item xs={12}>           
                <span>{data.projects[3].description}</span>
              </Grid>  

              <Grid  item xs={12} className='skills_div'>           
                <span><b>Technical Skill :</b> {data.projects[3].technical_skills.join(", ")}.</span>
              </Grid>
              
              <Grid  item xs={12} className='skills_div'>           
                <span><b>Soft Skill :</b> {data.projects[3].soft_skills.join(", ")}.</span>
              </Grid>

              <Grid  item xs={12} className='skills_div'>           
                <span><b>Impact :</b> {data.projects[3].impact.join(", ")}.</span>
              </Grid>

              <Grid  item xs={12} className='skills_div'>           
                <span><b>Github Link : </b>
                 <a  
                   href={data.projects[3].github_link} target='_blank' style={{textDecoration:'none'}}>
                    {data.projects[3].github_link}
                  </a>
                </span>
              </Grid>
          </Grid>

          <div className='exp_section_heading_wrapper'>
            <h1 className='project_section_heading' >
              <MilitaryTechOutlinedIcon/>
              &nbsp; C++ (OOPS - CLI)
            </h1> 
          </div> 

          <Grid container item spacing={1} className="exp_section_div2">
              {/* <Grid  item xs={3} sm={1}  >           
                <img className='exp_logo_company' src='./images/compuse/appeq.png'/>
              </Grid> */}

              <Grid item xs={9} sm={9} >
                <h2>{data.projects[4].name}</h2>

              </Grid>

              <Grid  item  sx={{ display: { xs: 'none', sm: 'flex' } }}  >           
                <span>{data.projects[4].duration}</span>
              </Grid>  

              <Grid  item xs={12}>           
                <span>{data.projects[4].description}</span>
              </Grid>  

              <Grid  item xs={12} className='skills_div'>           
                <span><b>Technical Skill :</b> {data.projects[4].technical_skills.join(", ")}.</span>
              </Grid>
              
              <Grid  item xs={12} className='skills_div'>           
                <span><b>Soft Skill :</b> {data.projects[4].soft_skills.join(", ")}.</span>
              </Grid>

              <Grid  item xs={12} className='skills_div'>           
                <span><b>Impact :</b> {data.projects[4].impact.join(", ")}.</span>
              </Grid>

              <Grid  item xs={12} className='skills_div'>           
                <span><b>Github Link : </b>
                 <a  
                   href={data.projects[4].github_link} target='_blank' style={{textDecoration:'none'}}>
                    {data.projects[4].github_link}
                  </a>
                </span>
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

export default Projects;
