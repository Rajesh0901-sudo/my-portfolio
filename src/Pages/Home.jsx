import React from "react";
import Footer from "../Components/Footer";
import NewFooter from "../Components/NewFooter";
import HeroSection from "../Components/HeroSection";
import Connect from "../Components/Connect";
import Value from "../Components/Value";
import { Slide,Fade } from "react-awesome-reveal";
import { styled } from '@mui/material/styles';
import {Box,Paper,Grid} from '@mui/material';
import './scss/Home.scss';

import { Helmet } from "react-helmet";





const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const App = () => {

    const [valueEnteredTheView, setChecked] = React.useState(false);


    const valueEnteredTheViewFunction=()=>{
        console.log('hello');
        
        setChecked((valueEnteredTheView) => !valueEnteredTheView);

    }


    return (
       <>  
            <Helmet>
                <title>Home - Rajesh Sahu Portfolio</title>
            </Helmet>
            
               
            <HeroSection />

            <Fade >
                <Value entered={true}/>
            </Fade>
            

            <Box className="home_container_box dark" >
                <img className="back_image_1" src="./images/Ellipse1.png" />
                <img className="back_image_2" src="./images/Ellipse2.png" />
                <img  className="back_image_3" src="./images/Ellipse3.png" />
                <Grid className="home_container_wrapper" container spacing={1}>
                    <Grid className="home_container_div" item xs={12} md={8}>
                        <Slide damping={1.1} direction="left" triggerOnce>
                            <h1>Building solutions that solve real problems.</h1>
                            <span>
                                Technology has always been my passion, especially when it comes to addressing pressing issues.
                                Throughout my career, I have successfully identified issues and found solutions for employers and clients alike.
                                In order to make people's lives better through technology, I am always looking for new, effective ways to do so.
                            </span>
                        </Slide>
                    </Grid>
                    <Grid className="home_container_div " item xs={12} md={4}>
                        <Slide damping={1.1} direction="right" triggerOnce>
                            <img src="./images/compuse/solution.svg"></img>quality.svg
                       </Slide>
                    </Grid>
                </Grid>
            </Box>

            <Box className="home_container_box light" >
            <img className="back_image_4" src="./images/Ellipse1.png" />
                <img className="back_image_5" src="./images/Ellipse2.png" />
                <Grid className="home_container_wrapper" container direction={{xs: "column-reverse",md:'row'}} spacing={1}>
                    <Grid className="home_container_div" item xs={12} md={4}>
                        <Slide cascade damping={1.1} direction="left" triggerOnce>
                            <img src="./images/compuse/innovation.svg"></img>
                        </Slide>
                    </Grid>
                    <Grid className="home_container_div" item xs={12} md={8}>
                        <Slide damping={1.1} direction="right"triggerOnce >
                            <h1>Creating innovative and user-friendly experiences</h1>
                             <span>
                                Developing unique and user-friendly experiences is my constant goal.
                                Technology should be used to ease people's lives rather than make them more complicated.
                                I am constantly looking for ways to make my work more intuitive and user-friendly.
                            </span>
                       </Slide>
                    </Grid>
                </Grid>
            </Box>


            <Box className="home_container_box dark">
                <img className="back_image_1" src="./images/Ellipse1.png" />
                <img className="back_image_2" src="./images/Ellipse2.png" />
                <img  className="back_image_3" src="./images/Ellipse3.png" />
                <Grid className="home_container_wrapper" container spacing={1}>
                    <Grid className="home_container_div" item xs={12} md={8}>
                        <Slide  damping={1.1} direction="left" triggerOnce>
                            <h1>Delivering high-quality work on time and within budget</h1>
                           <span>
                                On time and on budget, I deliver high-quality work.. 
                                Historically, I have stayed within budget while achieving deadlines. 
                                Additionally, I am always eager to go the extra mile for my clients and employers.
                            </span> 
                        </Slide>
                    </Grid>
                    <Grid className="home_container_div" item xs={12} md={4}>
                        <Slide damping={1.1} direction="right"triggerOnce>
                            <img src="./images/compuse/quality.svg"></img>
                       </Slide>
                    </Grid>
                </Grid>
            </Box>


            <Box className="home_container_box light">
                <img className="back_image_4" src="./images/Ellipse1.png" />
                <img  className="back_image_5" src="./images/Ellipse2.png" />
                <Grid className="home_container_wrapper" direction={{xs: "column-reverse",md:'row'}}  container spacing={1}>
                    <Grid className="home_container_div" item xs={12} md={4}>
                        <Slide cascade damping={1.1} direction="left" triggerOnce>
                            <img src="./images/compuse/collabaration.svg"></img>
                        </Slide>
                    </Grid>
                    <Grid className="home_container_div" item xs={12} md={8}>
                        <Slide damping={1.1} direction="right"triggerOnce >
                            <h1>Collaborating effectively with team members to achieve common goals</h1>
                            <span>
                                The ability to work well with others and reach common goals is one of my strongest traits.
                                Listening to people and providing my thoughts are skills I possess and am always eager to utilize.
                            </span>
                       </Slide>
                    </Grid>
                </Grid>
            </Box>

            <Box className="home_container_box dark">
                <img className="back_image_1" src="./images/Ellipse1.png" />
                <img className="back_image_2" src="./images/Ellipse2.png" />
                <img  className="back_image_3" src="./images/Ellipse3.png" />
                <Grid className="home_container_wrapper" container spacing={1}>
                    <Grid className="home_container_div" item xs={12} md={8}>
                        <Slide damping={1.1} direction="left" triggerOnce>
                            <h1>Passionate about technology and its potential to improve people's lives</h1>
                           <span>
                                In the realm of technology, my passion lies in its potential to improve people's lives and make the 
                                world a better place. I firmly believe that technology, when harnessed effectively, 
                                has the power to create a positive impact. Continuously seeking innovative ways to utilize technology for the betterment of humanity is a driving force in my endeavors.
                            </span> 
                        </Slide>
                    </Grid>
                    <Grid className="home_container_div" item xs={12} md={4}>
                        <Slide damping={1.1} direction="right"triggerOnce>
                            <img src="./images/compuse/technology.svg"></img>
                       </Slide>
                    </Grid>
                </Grid>
            </Box>

            <Box className="home_container_box light">
                <Connect/>
            </Box>

           
            <NewFooter footerEntered={true} />
          
            <Footer />

       </>
    );
};
   
export default App;