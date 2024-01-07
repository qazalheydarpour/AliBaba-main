import React from "react";
import {
  Box,
  Container,
  Button,
  Typography,
  TextField,
  Grid,
} from "@mui/material";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const Head = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" ,mb:1}}>
      <Typography sx={{ fontWeight: "bold", color: "grey.800", mr: 1 }}>
        مشخصات مسافران
      </Typography>
      <PeopleAltIcon sx={{ color: "grey.800" }} />
      
    </Box>
  );
};

export default Head;
