
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {Box, Button, InputAdornment} from "@mui/material";

import MyDatePicker from "../Common/MyDatePicker";
import Selector from "../Common/Selector"

const optionsCity = ['تهران', 'شیراز', 'مشهد'];
const sxFrom = {
    "& .css-ekiabt-MuiInputBase-root-MuiOutlinedInput-root":{
        borderRadius: '0 8px 8px 0',
        height: '48px',
    },
    width:'229px',
}

const sxTo = {
    "& .css-ekiabt-MuiInputBase-root-MuiOutlinedInput-root":{
        borderRadius: '8px 0 0 8px',
        height: '48px'
    },
    width:'229px',
    marginLeft: '21px'
}

export default function BusTabPanel(){
    return(
            <Box sx={{display:'flex',flexDirection:'row',marginTop:'50px',marginRight:'80px'}}>
                <Autocomplete sx={sxFrom}
                              freeSolo
                              options={optionsCity}
                              renderInput={(params) => (<TextField size="small" {...params} label="مبدا (شهر)"/>
                              )}/>
                <Autocomplete sx={sxTo}
                              freeSolo
                              options={optionsCity}
                              renderInput={(params) => <TextField size="small" {...params} label="مقصد (شهر)" />}/>
                <MyDatePicker/>
                <Button variant="contained" sx={{width:'183px', height:'45px',marginRight:'21px'}}>جستجو</Button>
            </Box>
    )
}