import {createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        white:{
            main : '#FFFFFF',
        } ,
        black:{
            main : '#000',
        } ,
        bg:{
            main : '#F6F6F6',
        } ,
        primary: {
            light: '#FFE19C',
            main: '#FDB713',
            dark: '#DB9A02',
        },
        secondary: {
          one: '#F2F9FF',
            two: '#C9E3F8',
            three : '#51A2E7',
           main: '#0077DB',
            five: '#00569E',
            six: '#004075',
            seven: '#001C33',
        },
        success: {
           main: '#EAFAEE',
            three: '#84E199',
            four: '#28A745',
            five: '#1E7B33',
            seven: '#11461D',
        },
        warning: {
           main: '#FFF5E5',
            two: '#FFCE85',
            four: '#FF9800',
            five: '#A85D00',
            seven: '#4D2800',
        },
        info: {
           main: '#E8F9FC',
            two: '#A0E8F3',
            four: '#17A2B8',
            five: '#0F697A',
            seven: '#072F36',
        },
        danger: {
           main:'#FDF2F3',
            two:'#F2B5BB',
            four:'#DC3545',
            five:'#871722',
            seven:'#410B10',
        },
        gray: {
           main: '#F8FAFB',
           one: '#E2E6E9',
            two: '#BEC6CC',
            three: '#959EA6',
            four: '#6C7680',
            five: '#4B5259',
            six: '#2B2F33',
            seven: '#0A0B0C',
        },
        border1:{
            main : 'rgba(0, 0, 0, .1)',
        } ,
        border2:{
            main : 'rgba(0, 0, 0, .2)',
        } ,
        shadowCard:{
            main : 'rgba(0, 0, 0, .08)',
        } ,
        shadowButton:{
            main : 'rgba(0, 0, 0, .08)',
        } ,
        shadowSheet:{
            main : 'rgba(0, 0, 0, .09)',
        } ,
        shadowModal:{
            main : 'rgba(0, 0, 0, .12)',
        } ,
        shadowNavbar:{
           main : 'rgba(0, 0, 0, .15)',
        } ,
        overlay:{
            main : 'rgba(10, 11, 12, .65)',
         } ,
    },
    
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 640,
            laptop: 1024
        },

},
    typography: {
        fontFamily: "Alibaba",
    }});
export default theme;