import {useState, useContext} from "react";
import {FlightContext} from "./../../pages/index";
import {ThemeProvider} from "@emotion/react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import DomesticPlanes from "../../styles/assest/Icons/DomesticPlanes"
import ForeignPlanes from "../../styles/assest/Icons/ForeignPlanes";
import Train from "../../styles/assest/Icons/Train";
import Bus from "../../styles/assest/Icons/Bus";
import Tour from "../../styles/assest/Icons/Tour";
import Hotel from "../../styles/assest/Icons/Hotel";
import Residence from "../../styles/assest/Icons/Residence";

import DomesticFlightTabPanel from "./DomesticFlightTabPanel/DomesticFlightTabPanel";
import ForeignFlightTabPanel from "./ForeignPlaneTabPanel/ForeignFlightTabPanel";
import TrainTabPanel from "./TrainTabPanel/TrainTabPanel";
import BusTabPanel from "./BusTabPanel/BusTabPanel";
import TourPanel from "./TourPanel/TourPanel";
import HotelPanel from "./HotelPanel/HotelPanel";
import ResidencePanel from "./ResidencePanel/ResidencePanel";
import RecentSearch from "./../RecentSearch/RecentSearch";

import FlightImg from "./../../asset/images/Flight.jpg"
import TrainImg from "./../../asset/images/Train.jpg"
import BusImg from "./../../asset/images/Bus.jpg"
import TourImg from "./../../asset/images/Tour.jpg"
import HotelImg from "./../../asset/images/Hotel.jpg"
import ResidenceImg from "./../../asset/images/Residence.jpg"

const style = {
    imageStyles: {
        width: '100%',
        transition: 'easeIn'
    }
}
const sx = {
    direction: 'rtl',
    height: '265px',
    borderRadius: '8px',
    zIndex: 5,
    display: 'inline-block',
    marginTop: '-50px',
    boxShadow: '0 2px 1px -1px rgba(0, 0, 0, .08)',
    border: 'solid 1px rgba(0, 0, 0, .1)',
    backgroundColor: 'white!important',
    marginBottom:'1.5rem',
}

export default function SearchBox() {
    const {flightss,dispatch} = useContext(FlightContext)

    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            {(value === "1" || value === "2") && <img src={FlightImg.src} style={style.imageStyles}/>}
            {value === "3" && <img src={TrainImg.src} style={style.imageStyles}/>}
            {value === "4" && <img src={BusImg.src} style={style.imageStyles}/>}
            {value === "5" && <img src={TourImg.src} style={style.imageStyles}/>}
            {value === "6" && <img src={HotelImg.src} style={style.imageStyles}/>}
            {value === "7" && <img src={ResidenceImg.src} style={style.imageStyles}/>}

            <Container>
                <ThemeProvider theme={theme}>
                    <Container sx={sx}>
                        <TabContext sx={{direction: 'rtl'}} value={value}>
                            <Box sx={{borderBottom: 1, borderColor: 'divider', direction: 'rtl'}}>
                                <TabList onChange={handleChange} textColor="secondary" indicatorColor="secondary"
                                         centered>
                                    <Tab icon={<DomesticPlanes/>} label="پرواز داخلی" value="1"/>
                                    <Tab icon={<ForeignPlanes/>} label="پرواز خارجی" value="2"/>
                                    <Tab icon={<Train/>} label="قطار" value="3"/>
                                    <Tab icon={<Bus/>} label="اتوبوس" value="4"/>
                                    <Tab icon={<Tour/>} label="تور" value="5"/>
                                    <Tab icon={<Hotel/>} label="هتل" value="6"/>
                                    <Tab icon={<Residence/>} label="ویلا و اقامتگاه" value="7"/>
                                </TabList>
                            </Box>
                            <TabPanel value="1"><DomesticFlightTabPanel/></TabPanel>
                            <TabPanel value="2"><ForeignFlightTabPanel/></TabPanel>
                            <TabPanel value="3"><TrainTabPanel/></TabPanel>
                            <TabPanel value="4"><BusTabPanel/></TabPanel>
                            <TabPanel value="5"><TourPanel/></TabPanel>
                            <TabPanel value="6"><HotelPanel/></TabPanel>
                            <TabPanel value="7"><ResidencePanel/></TabPanel>
                        </TabContext>
                    </Container>
                </ThemeProvider>
            </Container>
        </>
    )
}

