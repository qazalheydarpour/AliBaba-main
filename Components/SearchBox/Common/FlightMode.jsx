import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Typography from "@mui/material/Typography"
import { styled } from '@mui/system';

const sxInput = {
    "& .css-19ygod6-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input":{
    border: 'solid 1px black',
    },
    marginBottom: '18px',
    width: '99px',
    height: '14px',
    "& .css-zd47np-MuiInputBase-root-MuiInput-root":{
        borderBottom: 'none',
    },
    "& .css-19ygod6-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input.css-19ygod6-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input.css-19ygod6-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input":{
        paddingRight: 0,
    },
    "& .css-1g12qau-MuiSvgIcon-root-MuiNativeSelect-icon":{
        display:'none',
    }

}

export default function FlightMode() {
    return (
        <Box>
            <FormControl >
                <NativeSelect
                    sx={sxInput}
                    defaultValue={1}
                    inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                    }}>
                    <option value={1}>یک طرفه</option>
                    <option value={2}>رفت و برگشت</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
}