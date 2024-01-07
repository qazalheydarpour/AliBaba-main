import Grid from '@mui/material/Grid';
import Divider from "@mui/material/Divider";
import RightSidePanel from "./RightSidePanel";
import LeftSidePanel from "./LeftSidePanel";
import BottomPanel from "./BottomPanel";
import { styled } from "@mui/material/styles";

export default function SearchCard(props) {
    return (
        <Grid container
              sx={{width: '100%', direction: 'rtl', border: '1px solid rgba(0, 0, 0, .1)', borderRadius: '5px', marginBottom: '18px',backgroundColor:'white'}}>
            <Grid item xs={12} sm={6} md={9} sx={{padding: 2}}>
                <RightSidePanel data={props}/>
            </Grid>
            <Divider orientation="vertical" sx={{display: {xs: 'none', sm: 'flex', md: 'flex'}}} flexItem/>
            <Grid item xs={12} sm={6} md={3} sx={{padding: 2}}>
                <LeftSidePanel data={props}/>
            </Grid>
            {/*<BottomPanel/>*/}
        </Grid>
    )
}