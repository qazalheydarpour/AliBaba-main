import * as React from 'react';
import TextField from '@mui/material/TextField';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
import AdapterJalali from '@date-io/date-fns-jalali';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';

const sx = {
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":{
        borderRadius: '10px',
        height: '48px',
        boxSizing: 'border-box'
    },
    width:'240px',
}


export default function MyDatePicker() {
    const [value, setValue] = React.useState([null, null]);

    return (
        <LocalizationProvider dateAdapter={AdapterJalali}>

                <DesktopDateRangePicker
                    startText="تاریخ رفت"
                    endText="تاریخ برگشت"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(startProps, endProps) => (
                        <React.Fragment>
                            <TextField {...startProps} sx={sx}/>
                            <TextField {...endProps} sx={sx}/>
                        </React.Fragment>
                    )}
                />
        </LocalizationProvider>
    );
}



