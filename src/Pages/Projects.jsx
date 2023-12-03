import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid, Typography, Button, Modal, Fade, Backdrop } from '@mui/material';

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

const style = {
  position: 'absolute',
  top: '5%',
  left: '5%',
  width:'90%',
  height:'90%',
  padding:'20px',
  background:'white',
  boxShadow: 24,
  border:'1px solid #212529',
  p: 4,
};

const ProjectsTemplate = ({handleOpen,setData}) => {
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
        
                <Grid onClick={()=>{handleOpen();setData(JSON.parse(JSON.stringify(d)))}} className='projectTitleHeading' item xs={9} sm={9} >
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

const MainProjectView = ({projectDataToShow}) => {
  console.log(projectDataToShow);
  return(
    <>

      <h1 style={{textAlign:'center',marginBottom:'50px'}}>{projectDataToShow?.name}</h1>
      <Grid container spacing={3} className="mainModalToShowGrid">

        <Grid item xs={12} sm={6} >
          <span className='description_div'>
            {projectDataToShow?.description}.
          </span>

          <Grid  item  sx={{ display: { xs: 'none', sm: 'flex' } }} className='skills_div' >           
              <span>{projectDataToShow.duration}</span>
            </Grid>  
    
            <Grid  item xs={12} className='skills_div'>           
              <span><b>Technical Skill :</b> {projectDataToShow.technical_skills.join(", ")}.</span>
            </Grid>
            
            <Grid  item xs={12} className='skills_div'>           
              <span><b>Soft Skill :</b> {projectDataToShow.soft_skills.join(", ")}.</span>
            </Grid>
    
            <Grid  item xs={12} className='skills_div'>           
              <span><b>Impact :</b> {projectDataToShow.impact.join(", ")}.</span>
            </Grid>
    
            <Grid  item xs={12} className='skills_div'>           
              <span><b>Github Link : </b>
              <a  
                href={projectDataToShow.github_link} target='_blank' style={{textDecoration:'none'}}>
                  {projectDataToShow.github_link}
                </a>
              </span>
            </Grid>

        </Grid>

        <Grid className='showProjectMainImage' item xs={12} sm={6}>           
          <img className='exp_logo' src={projectDataToShow?.mainImageUrl}/>
        </Grid>
        <Grid container spacing={3} className='otherImageUrlDiv'>
          {
            projectDataToShow.otherImageUrls.map(url=>{
              return(
                <Grid  item xs={12} sm={3} >  
                  <img src={url}/>
                </Grid>
              )
            })
          }
        </Grid>


      </Grid> 
    </>
  )
}

const Projects = () => {

  const [open, setOpen] = React.useState(false);
  const [projectModalData,setProjectModalData] = React.useState('');
  const handleOpen = () => {
    setOpen(true);
  }
  const setData = (d) => {
    setProjectModalData(d);
    console.log(projectModalData);
  }

  const handleClose = () => setOpen(false);

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

      <ProjectsTemplate handleOpen={handleOpen} setData={(d)=>setData(d)}/>


      </Grid> 
      <Grid container item spacing={1} className="exp_section_div2">
              
      </Grid>
      <Button onClick={handleOpen}>Open modal</Button>
    </Container>

    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        sx={{padding:'50px'}}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box className='prjoectViewContainer'>

              <MainProjectView projectDataToShow={projectModalData}/>
              <Grid container spacing={1} style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'25px'}}>
                <Grid item xs={11} sm={6} >
                  <Button
                    href="contact"
                    textAlign="center"
                    variant="contained"
                    size="large"
                    fullWidth
                    className='project_model_section_connect_button'
                  >
                    Want to Know More Let's Connect
                  </Button>
                 </Grid>
              </Grid>
            </Box>
          </Box>
        </Fade>
      </Modal>

    <NewFooter footerEntered={true} />
          
    <Footer />
  </>
  );
};

export default Projects;
