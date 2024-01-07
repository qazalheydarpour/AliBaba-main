import React from "react";
import { Box,Typography } from "@mui/system";
const DateSwiperCard = ({day,price,color}) => {
  return (
    <Box sx={{textAlign:'center',borderLeft:'1px solid rgba(0, 0, 0, .1)',marginTop:'10px'}}>
    <Box sx={{fontSize:'.75rem',color:'#6C7680'}}>{day}</Box>
    <Box sx={{color:{color}}}>{price}</Box>
    </Box>
  ); 
};

export default DateSwiperCard;
