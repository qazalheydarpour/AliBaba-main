
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {Box, Button, InputAdornment} from "@mui/material";
import Hotel from "../../../styles/assest/Icons/Hotel";

import MyDatePicker from "../Common/MyDatePicker";
import Selector from "../Common/Selector"

const optionsCity = ['تهران', 'شیراز', 'مشهد'];
const optionsNum = [1, 2, 3, 4];


const sx = {
    "& .css-ekiabt-MuiInputBase-root-MuiOutlinedInput-root":{
        borderRadius: '8px',
        height: '48px',
    },
    width:'460px',
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


export default function ResidencePanel(){
    return(
        <Box sx={{display:'flex',flexDirection:'column',marginTop:'50px'}}>
            <Box sx={{display:'flex',flexDirection:'row'}}>
                <Autocomplete sx={sx}
                              freeSolo
                              options={optionsCity}
                              renderInput={(params) => (<TextField size="small" {...params} label="مبدا (شهر)"/>
                              )}/>
                <MyDatePicker/>
                <Autocomplete sx={sxPassengers}
                              freeSolo
                              options={optionsNum}
                              renderInput={(params) => <TextField size="small" {...params} label="مسافران" />}/>
                <Button variant="contained" sx={{width:'183px', height:'45px'}}>جستجو</Button>
            </Box>
        </Box>
    )
}
