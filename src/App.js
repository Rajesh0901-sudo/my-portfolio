import './App.css';
// App.js
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';


// import NavBar from './Components/NavBar';
const Home = lazy(() => import('./Pages/Home'));
const NavBar = lazy(() => import('./Components/NavBar') )
const About = lazy(() => import('./Pages/About'));
const Products = lazy(() => import('./Pages/Products'));
const ProductDetails = lazy(() => import('./Pages/ProductDetails'));
const NoMatch = lazy(() => import('./Components/NoMatch'));


const App = () => {
 return (
    <>
       {/* <NavBar /> */}
       <NavBar />
       <div className='right_panel_wrapper'>

         <Suspense fallback={<div className="container">Loading...</div>}>
            <Fade triggerOnce>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/:slug" element={<ProductDetails />} />
                  <Route path="*" element={<NoMatch />} />
               </Routes>
            </Fade>      
         </Suspense>
       
       </div>
    </>
 );
};

export default App;


