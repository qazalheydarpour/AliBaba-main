
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {Box, Button, InputAdornment} from "@mui/material";
import Hotel from "../../../styles/assest/Icons/Hotel";
import { styled } from '@mui/material/styles';

import MyDatePicker from "../Common/MyDatePicker";
import Selector from "../Common/Selector";
import Link from 'next/link'

import {FlightContext} from "./../../../pages/index";

import {useState,useContext} from "react";


const optionsCity = ['تهران', 'شیراز', 'مشهد'];
const optionsNum = ['1', '2', '3', '4'];

const selectorOptions = [
    'یک طرفه',
    'رفت و برگشت',
];


const sxFrom = {
        "& .css-ekiabt-MuiInputBase-root-MuiOutlinedInput-root":{
            borderRadius: '0 8px 8px 0',
            height: '48px',
        },
        width:'229px',
    direction:'rtl'
}

const sxTo = {
    "& .css-ekiabt-MuiInputBase-root-MuiOutlinedInput-root":{
        borderRadius: '8px 0 0 8px',
        height: '48px'
    },
    width:'229px',
    marginLeft: '21px'
}

const sxPassengers = {
    "& .css-ekiabt-MuiInputBase-root-MuiOutlinedInput-root":{
        borderRadius: '8px',
        height: '48px'
    },
    width:'183px',
    marginX: '21px'
}


const data = {
    id: 0,
    fromCity: '',
    toCity: '',
    passengers: '',
};




export default function DomesticFlightTabPanel(props){

    // const flights = useContext(FlightContext);
    const [searchData, setSearchData] = useState(data);

    const handleSubmit = () => {
        // const selectFlight = flights.filter(item =>
        //     (item.from.toLowerCase().includes(searchData.fromCity.toLowerCase())
        //
        //         && item.to.toLowerCase().includes(searchData.toCity.toLowerCase())))
        // console.log(searchData)
        // props.onFilterData(searchData);
    }

    return(
        <Box sx={{display:'flex',flexDirection:'column'}}>
            <Selector options={selectorOptions}/>
            <Box sx={{display:'flex',flexDirection:'row'}}>
                <Autocomplete sx={sxFrom}
                              freeSolo
                              options={optionsCity}

                              renderInput={(params) => <TextField
                                  onSelect={e => setSearchData({...searchData, fromCity: e.target.defaultValue})}
                                  size="small" {...params} label="مبدا (شهر)"/>}/>
                <Autocomplete sx={sxTo}
                              freeSolo
                              options={optionsCity}
                              renderInput={(params) => <TextField
                                  onSelect={e => setSearchData({...searchData, toCity: e.target.defaultValue})}
                                  size="small" {...params} label="مقصد (شهر)" />}/>
                <MyDatePicker/>
                <Autocomplete sx={sxPassengers}
                              freeSolo
                              options={optionsNum}
                              renderInput={(params) => <TextField
                                  onSelect={e => setSearchData({...searchData, passengers: e.target.defaultValue})}
                                  size="small" {...params} label="مسافران" />}/>
                <Link href={'/flights/'+ searchData.fromCity+'-'+searchData.toCity}>
                    <Button onClick={handleSubmit} variant="contained" sx={{width:'183px', height:'45px'}}>جستجو</Button>
                </Link>
            </Box>
        </Box>
    )
}
