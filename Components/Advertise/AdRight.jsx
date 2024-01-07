import React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import { borderRadius, palette, styled } from '@mui/system';
import { Button } from '@mui/material';
import theme from '../../styles/theme';
import {ThemeProvider} from "@emotion/react";
import AdRightButton from './AdRightButton';

const styles={
  new:{
    backgroundColor:theme.palette.success.three,
    color:'black',
    borderRadius:'10px',
    fontSize:'.75rem',
    width:'3rem',
    transform: `translate(40px,20px)` ,
    position:'sticky'
  }
}

const AdRight = () => {
  
  return <Box>
    <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex',
          flexDirection: 'row-reverse', padding:'14px 20px'}}>
      <Box>
        <Box style={styles.new}>جدید</Box>
        <img src='https://cdn.alibaba.ir/h/desktop/assets/icons/alibaba-plus-logo-gold-4bd34e37.svg'/>
      </Box>
      <Box sx={{textAlign:'right',paddingRight:'24px'}}>
        <Box sx={{fontSize:'.875rem',color:'black!important'}}>
            <Typography sx={{fontWeight:'bolder',marginBottom:'5px'}}>
          علی‌بابا پلاس؛ جمع تجربه‌های سفر
          </Typography>
          <Typography sx={{lineHeight:'1.7!important'}}>
          به علی‌بابا پلاس بیایید تا هم تجربه‌های سفرهایتان را در اختیار هزاران ‌هزار مسافر قرار دهید، هم تجربه بقیه را بخوانید
          </Typography>
        </Box>
      <AdRightButton/>
      </Box>
    </Box>
    </ThemeProvider>
  </Box>;
};

export default AdRight;
