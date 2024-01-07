import React, { useState } from "react";
import {
  Box,
  Container,
  Button,
  Typography,
  TextField,
  Grid,
} from "@mui/material";
import theme from "../../styles/theme";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Head from "./Head/Head";
import Options from "./Options/Options";
import Inputs from "./Inputs/Inputs";
import AddPassengers from "./AddPassengers/AddPassengers";
const Passengers = () => {
  const [passenger, setPassenger] = useState([
    {
      id: 1,
      firstName: "",
      lastName: "",
      latinFirstName: "",
      latinLastName: "",
      Gender: "",
      nationalCode: "",
      birthDay: "",
    },
  ]);
  return (
    <Box
      sx={{
        border: 1,
        borderColor: "grey.500",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        p: 2,
        mb: 3,
      }}
    >
      <Head />

      {passenger.map((item) => (
        <Box key={item.id}>
          <Options passengerId={item.id} passenger={passenger} setPassenger={setPassenger}/>
          <Inputs passenger={passenger} />
        </Box>
      ))}
      {/* <Options />
      <Inputs passenger={passenger} /> */}
      <AddPassengers passenger={passenger} setPassenger={setPassenger} />
    </Box>
  );
};

export default Passengers;
