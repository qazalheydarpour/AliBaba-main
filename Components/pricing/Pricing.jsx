import { Box, Container, Button, Typography } from "@mui/material";
import theme from "../../styles/theme";
import PriceCount from "./PriceCount/PriceCount";
import FlightDetail from './FlightDetail/FlightDetail'
const Pricing = () => {
  return (
    <>
    <Box
            sx={{
              mt: 3,
              mb:3,
              border: 1,
              borderColor: "grey.500",
              borderRadius: "1rem",
              display:"flex",
              flexDirection:{ xs: "column-reverse", md: "row" },
              p: 1,
            }}
          >
            <PriceCount/>
            <FlightDetail/>
          </Box>
          </>
  )
}

export default Pricing