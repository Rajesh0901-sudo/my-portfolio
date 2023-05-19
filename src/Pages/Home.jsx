import Footer from "../Components/Footer";
import NewFooter from "../Components/NewFooter";
import HeroSection from "../Components/HeroSection";
import { Slide } from "react-awesome-reveal";
import { styled } from '@mui/material/styles';
import {Box,Paper,Grid} from '@mui/material';
import './scss/Home.scss';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const App = () => {
    return (
       <>
       
               
            <HeroSection />

            <Box className="home_container_box dark" >
                <img className="back_image_1" src="./images/Ellipse1.png" />
                <img className="back_image_2" src="./images/Ellipse2.png" />
                <img  className="back_image_3" src="./images/Ellipse3.png" />
                <Grid className="home_container_wrapper" container spacing={1}>
                    <Grid className="home_container_div" item xs={12} md={8}>
                        <Slide damping={1.1} direction="left" triggerOnce>
                            <h1>Building solutions that solve real problems.</h1>
                            <span>
                                I am passionate about using technology to solve real problems. 
                                I have a proven track record of identifying and solving problems for my clients and employers. 
                                I am always looking for new ways to use technology to make people's lives easier and more efficient.
                            </span>
                        </Slide>
                    </Grid>
                    <Grid className="home_container_div" item xs={12} md={4}>
                        <Slide damping={1.1} direction="right" triggerOnce>
                            <img src="./images/compuse/solution.svg"></img>quality.svg
                       </Slide>
                    </Grid>
                </Grid>
            </Box>

            <Box className="home_container_box" >
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
                                I am always looking for new ways to create innovative and user-friendly experiences. 
                                I believe that technology should be used to make people's lives easier, not more complicated. 
                                I am always thinking about how I can make my work more intuitive and user-friendly.
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
                                I am committed to delivering high-quality work on time and within budget. 
                                I have a proven track record of meeting deadlines and staying within budget. 
                                I am also always willing to go the extra mile to make sure that my clients and employers are satisfied with my work.
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


            <Box className="home_container_box">
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
                                I am a team player and I am always willing to collaborate with others to achieve common goals. 
                                I am good at listening to others and I am always willing to share my ideas. 
                                I am also good at resolving conflicts and I am always willing to compromise.
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
                                 I am passionate about technology and its potential to improve people's lives. 
                                 I believe that technology can be used to make the world a better place. 
                                 I am always looking for new ways to use technology to help people. 
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
            <NewFooter/>
            <Footer />
       </>
    );
};
   
export default App;