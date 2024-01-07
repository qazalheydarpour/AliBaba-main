import React from 'react';
import theme from '../../styles/theme';
// import {ThemeProvider} from "@emotion/react";
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import AdScroller from './AdScroller';
const styles = {
    boxContainer: {
        position:'relative',
        height:'175px',
        borderRadius:'.5rem',
        backgroundColor:theme.palette.primary.main,
        backgroundSize: '270px',
        backgroundPosition: '-20px -35px',
        backgroundRepeat : 'no-repeat',
        backgroundImage: `url(${"https://cdn.alibaba.ir/h/desktop/assets/images/breaking-news/rtb-d1f5b225.png"})`
    },
    whiteContainer:{
        position:'absolute',
        right:'0',
        marginTop:'5%',
        borderRadius:'1rem 0 0 1rem',
        backgroundColor:theme.palette.white.main,
        width:'372px',
        padding:'24px'
    }
}

const AdLeft = () => {
  return <>
          <Box style={styles.boxContainer}>
              <Box style={styles.whiteContainer}>
              <Typography sx={{textAlign:'right',fontSize:'1rem',fontWeight:'900',color:'black!important',marginBottom:'10px'}}>
              سفری آسان، به دلایل فراوان 
              </Typography>
            <Box sx={{display:'flex'}}>
            <AdScroller/> 
            <Box sx={{color:'black',marginTop:'5px'}}>از جمله</Box>
            </Box>
            </Box>
          </Box>
          
  </>;
};

export default AdLeft;
