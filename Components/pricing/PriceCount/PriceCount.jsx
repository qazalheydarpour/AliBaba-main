import { Box, Container, Button, Typography } from "@mui/material";
import theme from "../../../styles/theme";

const PriceCount = () => {
  return (
    <Box sx={{ p: 2 ,borderRight: 1,borderColor:"grey.500"}}>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ width:"10rem", mb: 4}}
              >
                تغییر بلیط
              </Button>
              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  color: "grey.800",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Typography sx={{ fontSize: "0.9rem" }}>ریال</Typography>
                  <Typography sx={{ fontSize: "0.9rem" }}>9,500,000</Typography>
                </Box>
                <Typography sx={{ fontSize: "0.9rem" }}>بزرگسال</Typography>
              </Box>
              <hr></hr>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  color: "grey.800",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Typography sx={{ fontSize: "0.9rem" }}>ریال</Typography>
                  <Typography sx={{ fontSize: "0.9rem" }}>9,500,000</Typography>
                </Box>
                <Typography sx={{ fontSize: "0.9rem" }}>مجموع</Typography>
              </Box>
            </Box>
  )
}

export default PriceCount