import React from "react";
import {
  Box,
  Container,
  Button,
  Typography,
  TextField,
  Grid,
} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Divider from "@mui/material/Divider";

const Inputs = () => {
  return (
    <Box sx={{width:"100%"}}>
        <Box>
          <Grid
            
            container
            spacing={2}
            sx={{
              justifyContent: "flex-end",
              width: "100%",
              direction: "rtl",
              justifyContent: "flex-start",
            }}
          >
            <Grid item md={4} sm={12}>
              <TextField
                color="secondary"
                id="outlined-basic"
                label="نام لاتین"
                variant="outlined"
              />
            </Grid>
            <Grid item md={4} sm={12}>
              <TextField
                color="secondary"
                id="outlined-basic"
                label="نام خانوادگی لاتین"
                variant="outlined"
              />
            </Grid>
            <Grid item md={4} sm={12}>
              <TextField
                color="secondary"
                id="outlined-basic"
                label="جنسیت"
                variant="outlined"
              />
            </Grid>
            <Grid item md={4} sm={12}>
              <TextField
                color="secondary"
                id="outlined-basic"
                label="کد ملی"
                variant="outlined"
              />
            </Grid>
            <Grid item md={4} sm={12}>
              <TextField
                color="secondary"
                id="outlined-basic"
                label="نام"
                variant="outlined"
              />
            </Grid>
            <Grid item md={4} sm={12}>
              <TextField
                color="secondary"
                id="outlined-basic"
                label="نام خانوادگی"
                variant="outlined"
              />
            </Grid>
            <Grid item md={4} sm={12}>
              <TextField
                color="secondary"
                id="outlined-basic"
                label="تاریخ تولد"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Divider sx={{mt:2,mb:2}}/>
        </Box>

    </Box>
  );
};

export default Inputs;
