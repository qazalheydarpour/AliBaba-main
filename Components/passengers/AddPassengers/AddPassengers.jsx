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
import AddIcon from "@mui/icons-material/Add";

const AddPassengers = ({passenger,setPassenger}) => {
  const addPassengerHandle=()=>{
    // console.log();
    setPassenger([...passenger,{id:(passenger.length+1),firstName:"",lastName:"",latinFirstName:"",latinLastName:"",Gender:"",nationalCode:"",birthDay:""}])
  }
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end"}}>
        <Button
        onClick={()=>addPassengerHandle()}
          color="secondary"
          sx={{ width: "15rem", border: 2, mt: 2, mb: 1 }}
        >
          <Typography>اضافه کردن مسافر جدید</Typography>
          <AddIcon />
        </Button>
      </Box>
    </>
  );
};

export default AddPassengers;
