import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import './scss/NavBar.scss';
import RajeshLogo100 from '../assets/images/RajeshLogo300.png';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

      <div className='navbar_logo_div_mobile'>   
         <img src={RajeshLogo100} />
      </div>

      <Divider />
      <List className='sidebar_link_div'>
         <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
               <ListItemText >
                  <NavLink
                     className="navbar-item"
                     // activeClassName="is-active"
                     to="/"
                     
                  >
                     <div className='link_div'>
                        <CottageOutlinedIcon /> Home
                     </div>
                    
                  </NavLink>
               </ListItemText>
            </ListItemButton>
         </ListItem>
         <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
               <ListItemText >
                  <NavLink
                     className="navbar-item"
                     // activeClassName="is-active"
                     to="/about"
                     
                  >
                      <div className='link_div'>
                        <LocalLibraryOutlinedIcon /> About
                     </div>
                     
                  </NavLink>
               </ListItemText>
            </ListItemButton>
         </ListItem>
         <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
               <ListItemText >
                  <NavLink
                     className="navbar-item"
                     // activeClassName="is-active"
                     to="/experience"
                     
                  >
                      <div className='link_div'>
                        <EngineeringOutlinedIcon /> Experience
                     </div>
                     
                  </NavLink>
               </ListItemText>
            </ListItemButton>
         </ListItem>
         {/* <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
               <ListItemText >
                  <NavLink
                     className="navbar-item"
                     // activeClassName="is-active"
                     to="/skills"
                     
                  >
                      <div className='link_div'>
                        <ManageAccountsOutlinedIcon /> Skills
                     </div>
                     
                  </NavLink>
               </ListItemText>
            </ListItemButton>
         </ListItem> */}
         <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
               <ListItemText >
                  <NavLink
                     className="navbar-item"
                     // activeClassName="is-active"
                     to="/projects"
                     
                  >
                      <div className='link_div'>
                        <IntegrationInstructionsOutlinedIcon /> Projects
                     </div>
                     
                  </NavLink>
               </ListItemText>
            </ListItemButton>
         </ListItem>
         <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
               <ListItemText >
                  <NavLink
                     className="navbar-item"
                     // activeClassName="is-active"
                     to="/contact"
                     
                  >
                    <div className='link_div'>
                        <ContactPageOutlinedIcon /> Contact
                     </div>
                  </NavLink>
               </ListItemText>
            </ListItemButton>
         </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="navbar_expanded_wrapper_div"  sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
            
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ mr: 2, display: { sm: 'none' } }}
            className='name_div_navbar_collapsed'
          >

            {"<Rajesh Sahu /> "}
         </Typography>  
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          <div className='navbar_logo_div'>   
            <img src={RajeshLogo100} />
           
          </div>
          <div className='name_div_navbar'>
            {"<Rajesh Sahu /> "}
         </div>   
          </Typography>
          <Box className="expanded_navbar_div" sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button sx={{ color: '#fff' }}>
               <NavLink
                        className="navbar-item"
                        // activeClassName="is-active"
                        to="/"
                        
                     >
                     <div className='link_div'>
                        <CottageOutlinedIcon /> Home
                     </div>
               </NavLink>    
              </Button>
              <Button sx={{ color: '#fff' }}>
                <NavLink
                     className="navbar-item"
                     // activeClassName="is-active"
                     to="/about"
                     
                  >
                     <div className='link_div'>
                        <LocalLibraryOutlinedIcon /> About
                     </div>   
                  </NavLink> 
              </Button>
              <Button sx={{ color: '#fff' }}>
                  <NavLink
                     className="navbar-item"
                     // activeClassName="is-active"
                     to="/experience"
                     
                  >
                     <div className='link_div'>
                        <EngineeringOutlinedIcon /> Experience
                     </div>  
                  </NavLink>
              </Button>
              {/* <Button sx={{ color: '#fff' }}>
                  <NavLink
                     className="navbar-item"
                     // activeClassName="is-active"
                     to="/skills"
                     
                  >
                     <div className='link_div'>
                        <ManageAccountsOutlinedIcon /> Skills
                     </div>  
                  </NavLink>
              </Button> */}
              <Button sx={{ color: '#fff' }}>
                  <NavLink
                     className="navbar-item"
                     // activeClassName="is-active"
                     to="/projects"
                     
                  >
                     <div className='link_div'>
                        <IntegrationInstructionsOutlinedIcon /> Projects
                     </div>  
                  </NavLink>
              </Button>
              <Button sx={{ color: '#fff' }}>
                  <NavLink
                     className="navbar-item"
                     // activeClassName="is-active"
                     to="/contact"
                     
                  >
                     <div className='link_div'>
                        <ContactPageOutlinedIcon /> Contact
                     </div>  
                  </NavLink>
              </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
         
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;