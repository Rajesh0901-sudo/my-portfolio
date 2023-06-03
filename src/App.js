import './App.css';
// App.js
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import Loader from './Components/Loader';

// import NavBar from './Components/NavBar';
const Home = lazy(() => import('./Pages/Home'));
const NavBar = lazy(() => import('./Components/NavBar') )
const About = lazy(() => import('./Pages/About'));
const Contact = lazy(() => import('./Pages/Contact'));
const Experience = lazy(() => import('./Pages/Experience'));
const Skills = lazy(() => import('./Pages/Skills'));
const Projects = lazy(() => import('./Pages/Projects'));
const Feedback = lazy(() => import('./Pages/Feedback'));

const NoMatch = lazy(() => import('./Components/NoMatch'));


const App = () => {
 return (
    <>
       {/* <NavBar /> */}
       <NavBar />
       <div className='right_panel_wrapper'>

         <Suspense fallback={
               <div className='loading_div_for_router'>
                  <Loader color="#284B63" />
                  <div style={{textAlign:'center'}}>Just a moment, we're putting the finishing touches on our masterpiece.</div>
               </div>
             }

         >
            <Fade triggerOnce>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/feedback" element={<Feedback />} />

                  <Route path="*" element={<NoMatch />} />
               </Routes>
            </Fade>      
         </Suspense>
       
       </div>
    </>
 );
};

export default App;


