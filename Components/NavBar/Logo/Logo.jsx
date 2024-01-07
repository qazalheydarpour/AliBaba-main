import { Typography, Box, SvgIcon } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SvgLogo from "../../../asset/icon/logo.svg";
import SvgTypo from "../../../asset/icon/typography.svg";
import Image from "next/image";
const Logo = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "right",
          display: { xs: "none", md: "flex" },
        }}
      >
        {/* <Typography
          variant="h6"
          align="justify"
          color="inherit"
          component="div"
        >
          Alibaba.ir
        </Typography> */}
      <Image style={{width:"6rem"}} src={SvgTypo} alt={"alibaba.ir"}/>

        <Typography sx={{color:"black",fontFamily:'Alibaba',fontSize:"0.6rem"}} variant="h6" color="inherit" component="div">
          خرید بلیط،هتل،تور
        </Typography>
      </Box>
      <Image src={SvgLogo} alt={"alibaba.ir"}/>
      {/* <img src={SvgLogo} alt={"alibaba.ir"} /> */}
    </Box>
  );
};

export default Logo;
