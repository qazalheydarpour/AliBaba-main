import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Route from "../../styles/assest/Icons/Route";
import BottomPanel from "./BottomPanel";
import {styled, ThemeProvider} from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import theme from '../../styles/theme';
import PN from "persian-number";


const MyChip = styled(Chip)(({ theme }) => ({
    fontFamily: 'Alibaba',
    fontSize: '12px',
    fontWeight: '400',
    margin: 5,
    color: theme.palette.gray.six,//'#2B2F33',
    backgroundColor: theme.palette.gray.main
}));

export default function RightSidePanel(props) {
    return(
        <ThemeProvider theme={theme}>
        <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin:'15px'}}>
                <Avatar
                    sx={{width: 48, height: 48, border: '1px solid rgba(0, 0, 0, .1)', padding: 1, marginY: 1}}
                    src={props.data.flight.image.src}/>
                <Typography sx={{fontFamily: 'Alibaba', fontSize: '12px', fontWeight: '500'}}>{props.data.flight.airline}</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', flexGrow: '1', alignItems: 'start'}}>
                <Stack direction="row">
                    {props.data.flight.system && <MyChip size="small" label="سیستمی"/>}
                    {props.data.flight.economy && <MyChip size="small" label="اکونومی"/>}
                    {props.data.flight.model && <MyChip size="small" label="fokker 100"/>}
                </Stack>
                <Stack direction="row">
                    <Typography
                        sx={{fontFamily: 'Alibaba', fontSize: '16px', fontWeight: '400', margin: '5px'}}>{props.data.flight.from}</Typography>
                    <Typography
                        sx={{fontFamily: 'Alibaba', fontSize: '20px', fontWeight: '700'}}>{PN.convertEnToPe(props.data.flight.fromTime)}</Typography>
                    <Route/>
                    <Typography
                        sx={{fontFamily: 'Alibaba', fontSize: '16px', fontWeight: '400', margin: '5px'}}>{props.data.flight.to}</Typography>
                    <Typography
                        sx={{fontFamily: 'Alibaba', fontSize: '20px', fontWeight: '700'}}>{PN.convertEnToPe(props.data.flight.toTime)}</Typography>
                </Stack>
            </Box>
        </Box>
        </ThemeProvider>
    )
}