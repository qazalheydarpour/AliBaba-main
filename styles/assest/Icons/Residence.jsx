import theme from '../../theme';
import Box from '@mui/material/Box';

const styles={
    new:{
        backgroundColor:theme.palette.success.three,
        color:'black',
        borderRadius:'10px',
        fontSize:'.75rem',
        width:'47px',
        height:'20px',
        transform: `translate(-35px,0px)`,
        position:'absolute'
    }
}

export default function Residence(){
    return(
        <Box sx={{paddingLeft:'20px'}}>
            <Box style={styles.new}>جدید</Box>
            <svg viewBox="0 0 32 32" width="36px" height="36px" fill="currentColor"
                 className="block mx-auto mb-1">
                <path
                    d="M15.362 4.23a.777.777 0 011.099-.005l11.308 11.222a.777.777 0 01-.547 1.328h-1.42c.01.076.015.154.015.233v8.341a1.7 1.7 0 01-1.7 1.7H7.976a1.7 1.7 0 01-1.7-1.7v-8.341c0-.079.005-.157.016-.233H4.778a.777.777 0 01-.551-1.324L15.362 4.23zm8.964 12.632H7.766v8.632h5.771a1.817 1.817 0 01-.016-.247v-4.588a1.8 1.8 0 011.8-1.8h1.357a1.8 1.8 0 011.8 1.8v4.588c0 .084-.006.166-.017.247h5.865v-8.632zm-7.245 3.517h-2.163v5.114h2.163v-5.114zM10.74 18.86c.51 0 .922.414.922.924v2.307a.923.923 0 11-1.846 0v-2.307c0-.51.414-.924.924-.924zm10.523 0c.51 0 .923.414.923.924v2.307a.923.923 0 01-1.846 0v-2.307c0-.51.413-.924.923-.924zM15.917 5.875l-9.275 9.347 2.979-.001 5.766-6.142a.777.777 0 011.048-.078l.08.074 5.859 6.146h2.962l-9.419-9.346zm-.516 5.457l-3.65 3.89 3.65-.001v-3.889zm1.197.081v3.808h3.63l-3.63-3.808z"/>
            </svg>

        </Box>
    )
}