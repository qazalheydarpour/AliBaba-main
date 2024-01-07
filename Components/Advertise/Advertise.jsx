import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AdRight from "./AdRight";
import AdLeft from "./AdLeft";
import AdSecond from "./second/AdSecond";
import AdThird from "./third/AdThird";
import {ThemeProvider} from "@emotion/react";
import theme from "../../styles/theme";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Advertise = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Grid container spacing={1}>
        <Grid sx={{ width: "50%" }} item xs={6}>
          <Item sx={{ padding: "0", borderRadius: ".5rem" }}>
            <AdLeft />
          </Item>
        </Grid>
        <Grid sx={{ width: "50%" }} item xs={6}>
          <Item sx={{ borderRadius: ".5rem" }}>
            <AdRight />
          </Item>
        </Grid>
      </Grid>
      <Box sx={{marginTop:'2rem'}}>
        <AdSecond/>
      </Box>
      <Box sx={{marginTop:'2rem',marginBottom:'5rem'}}>
        <AdThird/>
      </Box>
    </ThemeProvider>
    </>
  );
};

export default Advertise;
