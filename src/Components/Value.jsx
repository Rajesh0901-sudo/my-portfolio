import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import RajeshLogo100 from '../assets/images/RajeshLogo300.png';
import './scss/NewFooter.scss';

import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';



const footerStyles = {
  root: {
    color: '#d9d9d9',
    minHeight:'50vh',
    padding: '24px',
    marginTop: 'auto',

  },
  section: {
    display: 'flex',
    minHeight: '33vh',

    '& > *': {
      margin: '0 16px',
    },
  },
};

const Value = () => {
  return (
    <footer style={footerStyles.root} className='footer_main_wrapper'> 
      <Container maxWidth="lg">
        <Grid container spacing={3}  className='footer_main_wrapper_div'>
            <Grid item xs={12} sm={3} style={footerStyles.section}>
                <Box  className="footer_section logo_div_footer" >
                    
                </Box>
            </Grid>
            <Grid item xs={12} sm={3} style={footerStyles.section}>
                <Box  className="footer_section">

                </Box>
            </Grid>
            <Grid item xs={12} sm={3} style={footerStyles.section}>
                <Box className="footer_section">

                </Box>     
            </Grid>
            <Grid item xs={12} sm={3} style={footerStyles.section}>
                <Box  className="footer_section">

                </Box>
            </Grid>
        </Grid> 

      </Container>
     
    </footer>
  );
};

export default Value;