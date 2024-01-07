import {useState} from "react";

import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';

import theme from "../../styles/theme";
import {Accordion, AccordionDetails, Typography} from "@mui/material";

// const MyAccordion = styled(Accordion)({
//     borderRadius:'5px',
//     direction: 'rtl',
//     marginBottom: '1rem',
//     :hover {color()}
// })
// const TypographyTitle = styled(Typography)({
//     color: theme.palette.gray.five,
//     flexShrink: 0,
//     paddingY:'.8rem',
//     fontSize:'1.25rem',
//     fontWeight: '700'
// });
// const TypographyDescription = styled('Typography')({
//     color:theme.palette.gray.four,
//     fontSize:'1rem',
//     lineHeight:'36px',
//     marginRight:'3.2rem'
// })

export default function YourQuestionsItem({title, description}){
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return(
        <Accordion sx={{borderRadius: '5px',direction: 'rtl',marginBottom: '1rem'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header">
                <QuestionMarkOutlinedIcon sx={{margin:'.8rem',width:'30px',height:'30px',borderRadius:'50%',backgroundColor:theme.palette.info.main,color:theme.palette.info.four,}}/>
                <Typography sx={{fontFamily:'AliBaba',color: theme.palette.gray.five,flexShrink: 0,paddingY:'.8rem',fontSize:'1rem',fontWeight: '700'}}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{fontFamily:'AliBaba',color:theme.palette.gray.four,fontSize:'1rem',lineHeight:'36px',marginRight:'3.2rem'}}>{description}</Typography>
            </AccordionDetails>
        </Accordion>
    )
}