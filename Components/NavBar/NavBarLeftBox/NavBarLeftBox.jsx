import { Box, Button } from "@mui/material";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
const NavBarLeftBox = () => {
  return (
  <Box sx={{ flexGrow: 1 }}>
    <Button sx={{color:"black",fontFamily:'Alibaba'}} endIcon={<PersonOutlineIcon />}>
      {"ورود یا ثبت نام"}
    </Button>
    <Button sx={{color:"black",fontFamily:'Alibaba'}}  endIcon={<ReceiptLongIcon />}>
      {"پیگیری خرید"}
    </Button>
  </Box>
    )
};

export default NavBarLeftBox;
