import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";

const Sort = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <Box sx={{display:'flex',justifyContent:'flex-end',marginY:'1rem'}}>
    <Box sx={{marginRight:'1rem',height:'38px',direction:'rtl',bgcolor: 'background.paper',border:1,borderColor: 'grey.500',borderRadius:'2rem'}}>
      <Tabs
        sx={{margin:'-5px 10px 0','& .css-1aquho2-MuiTabs-indicator':{marginBottom:'5px !important'}}}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab sx={{fontFamily:"Alibaba"}} label="پیشنهاد علی بابا" />
        <Tab sx={{fontFamily:"Alibaba"}} label="زود ترین" />
        <Tab sx={{fontFamily:"Alibaba"}} label="دیر ترین" />
        <Tab sx={{fontFamily:"Alibaba"}} label="ارزان ترین" />
        <Tab sx={{fontFamily:"Alibaba"}} label="گران ترین" />
      </Tabs>
    </Box>
    <Typography sx={{fontFamily:"Alibaba",color:'grey',marginTop:'5px'}}> : مرتب سازی</Typography>
    </Box>
  );
};

export default Sort;
