import { Button, Menu, MenuItem, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreOptionsMenu from "../MoreOptionsMenu/MoreOptionsMenu";
import FlightMenu from "../FlightMenu/FlightMenu";
import Dvider from "../Dvider/Dvider";
import { SafetyDividerRounded } from "@mui/icons-material";
import React,{useState} from "react";

const NavBarMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <MoreOptionsMenu />
      <Dvider />
      <Button sx={{color:"black",fontFamily:'Alibaba'}}>{"قطار"}</Button>
      <Dvider />
      <Button sx={{color:"black",fontFamily:'Alibaba'}}>{"اتوبوس"}</Button>
      <Dvider />
      <Button sx={{color:"black",fontFamily:'Alibaba'}}>{"تور"}</Button>
      <Dvider />
      <Button sx={{color:"black",fontFamily:'Alibaba'}}>{"هتل"}</Button>
      <Dvider />
      <Button sx={{color:"black",fontFamily:'Alibaba'}}>{"ویلا و اقامتگاه"}</Button>
      <Dvider />
      <FlightMenu />
    </Box>
  );
};

export default NavBarMenu;
