import {Box, Container} from "@mui/material";
import Footer from '../../Components/Footer/Footer'
import NavBar from "../../Components/NavBar/NavBar";
import SearchCardContainer from "./../../Components/SearchCard/SearchCardContainer"
import RightSidebar from './../../Components/rightSidebar2/RightSidebar' 
import DateSwiper from './../../Components/dateSwiper2/DateSwiper'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import {flights as data} from "./../../data/data";
import FrequentQuestions from "./../../Components/FrequentQuestions/FrequentQuestions"
import { createContext, useReducer,useContext} from "react";
import {FlightContext} from "./../../pages/index";
import reducer from './../../Components/Reducer';
import Sort from './../../Components/sort/Sort';
import theme from "../../styles/theme";
import { ThemeProvider } from "@mui/private-theming";
const cities = [{fromCity:'مشهد',toCity: 'شیراز'},
    {fromCity:'مشهد',toCity: 'تهران'},
    {fromCity:'تهران',toCity: 'شیراز'},
    {fromCity:'شیراز',toCity: 'تهران'},
    {fromCity:'شیراز',toCity: 'مشهد'},
    {fromCity:'تهران',toCity: 'مشهد'}]

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Flights({flight}) {
    const [flights, dispatch] = useReducer(reducer, flight);
    return (
        <Box bgcolor={theme.palette.bg.main}>
            <NavBar/>
            <Container sx={{marginY:'3rem'}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                    <DateSwiper/>
                    <Sort/>
                    <SearchCardContainer flight={flights}/>
                    </Grid>
                    <Grid item xs={3}>
                    <RightSidebar flight={flights} dispatch={dispatch}/>
                    </Grid>
                    <FrequentQuestions flight={flight[0]}/>
                </Grid>
            </Box>
            </Container>
            <Footer/>
        </Box>
       
    )
};

export async function getStaticPaths() {
    const paths = cities.map(city => {
        return {
            params: { fromCitytoCity: city.fromCity+'-'+city.toCity}
        }
    })
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps(context) {
    const fromCitytoCity = context.params.fromCitytoCity;
    const myArr = fromCitytoCity.split('-')
    const flight = data.filter(d => (d.from === myArr[0] && d.to === myArr[1]))
    return{
        props:{
            flight
        }
    }
}