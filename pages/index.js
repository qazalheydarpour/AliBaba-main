import { Box, Container } from "@mui/material";
import theme from "../styles/theme";
import Footer from "../Components/Footer/Footer";
import { ThemeProvider } from "@emotion/react";
import NavBar from "../Components/NavBar/NavBar";
import RecentSearch from "../Components/RecentSearch/RecentSearch";
import YourQuestions from "../Components/YourQuestions/YourQuestions";
import Advertise from "./../Components/Advertise/Advertise";
import SearchBox from "./../Components/SearchBox/SearchBox";
import { useState, createContext, useReducer } from "react";
import { flights as data } from "./../data/data";
import reducer from "./../Components/Reducer";
import PlaneTicket from "./../Components/PlaneTicket/PlaneTicket";
// import Plane_Ticket from "../Components/PlaneTicket/Plane_Ticket";

export const FlightContext = createContext({
  flights: [],
  dispatch: () => {},
});

export default function Home() {
  const [flightss, dispatch] = useReducer(reducer, []);
  return (
    <>
      <Box bgcolor={theme.palette.bg.main}>
        <NavBar />

        <SearchBox />
        <Container>
          <ThemeProvider theme={theme}>
            <FlightContext.Provider value={{ flightss, dispatch }}>
              {/* <RecentSearch/> */}
              <Advertise />
              <YourQuestions />
              <PlaneTicket />
            </FlightContext.Provider>
            {/* <Plane_Ticket/> */}
          </ThemeProvider>
        </Container>

        <Footer />
      </Box>
    </>
  );
}
