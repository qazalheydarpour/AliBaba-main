import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import theme from "../../styles/theme";
import CustomButton from "./CustomButton";
import PN from "persian-number";
import Link from 'next/link'

export default function LeftSidePanel(props){
    return(
        <Box sx={{
            display: 'flex',
            flexDirection: {xs: 'row', sm: 'column', md: 'column'},
            alignItems: 'center'}}>
            <Box sx={{display:'flex', flexDirection:'row',alignItems: 'center'}}>
                <Typography sx={{fontFamily: 'AliBaba', color: `${theme.palette.secondary.main}`, fontSize: '20px', fontWeight:'700'}}>
                    {PN.convertEnToPe(PN.sliceNumber(props.data.flight.price))}
                </Typography>
                <Typography sx={{fontFamily: 'AliBaba', color: theme.palette.gray.three, fontSize: '12px', fontWeight:'400', marginX:'5px'}}>
                    ریال
                </Typography>
            </Box>
            {!props.data.flight.full ?
                <>
                    <Link href={'/flights/buyTicket'}>
                    <CustomButton>انتخاب بلیط</CustomButton>
                    </Link>
                    <Typography sx={{fontFamily: 'AliBaba', color: theme.palette.danger.four, fontSize: '12px', fontWeight:'400'}}>
                        {PN.convertEnToPe(props.data.flight.seat)} صندلی باقیمانده
                    </Typography>
                </>
            :
                <>

                        <CustomButton disabled>انتخاب بلیط</CustomButton>


                    <Typography sx={{fontFamily: 'AliBaba', color: theme.palette.danger.four, fontSize: '12px', fontWeight:'400'}}>
                        تکمیل ظرفیت
                    </Typography>
                </>
            }
        </Box>
    )
}