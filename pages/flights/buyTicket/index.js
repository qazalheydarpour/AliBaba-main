import { Box, Container, Button, Typography } from "@mui/material";
import theme from './../../../styles/theme'
import Footer from "../../../Components/Footer/Footer";
import { ThemeProvider } from "@emotion/react";
import NavBar from "../../../Components/NavBar/NavBar";
import Pricing from '../../../Components/pricing/Pricing'
import TicketWarning from "../../../Components/ticketWarning/TicketWarning";
import Notify from "../../../Components/Notify/Notify";
import Passengers from '../../../Components/passengers/Passengers'
export default function index(){
  return (
    <Box>
      <NavBar />

      <Container>
        <ThemeProvider theme={theme}>
          <Pricing/>
          <TicketWarning/>
          <Passengers/>
          <Notify/>
        </ThemeProvider>
      </Container>
      <Footer />
    </Box>
  );
};