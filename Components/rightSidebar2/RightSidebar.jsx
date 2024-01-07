import {useState} from "react";
import React from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import theme from "../../styles/theme";
import {Accordion, AccordionDetails, Typography} from "@mui/material";
import TypeSidebar from "./ChekboxSidebar";
import TimeSlider from "./TimeSlidebar";
import CompanySidebar from './CompanySlider'

const styles = {
    myAccordion: {
        margin: '0 !important',
        direction: 'rtl',
        border: '1px solid rgba(0, 0, 0, .1)'
    },
}
export default function RightSidebar({flight, dispatch}) {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <>
            <Accordion style={styles.myAccordion}>
                <AccordionSummary
                    id="panel1bh-header">
                    <Typography sx={{
                        fontFamily: 'AliBaba',
                        color: theme.palette.gray.five,
                        flexShrink: 0,
                        paddingY: '.8rem',
                        fontSize: '.875rem',
                        fontWeight: '500'
                    }}>نتایج:13</Typography>
                </AccordionSummary>
            </Accordion>

                <Accordion style={styles.myAccordion} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header">
                        <Typography sx={{
                            fontFamily: 'AliBaba',
                            color: theme.palette.gray.five,
                            flexShrink: 0,
                            paddingY: '.8rem',
                            fontSize: '.875rem',
                            fontWeight: '500'
                        }}>
                            {'ساعت حرکت'}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{
                            fontFamily: 'AliBaba',
                            color: theme.palette.gray.four,
                            fontSize: '1rem',
                            lineHeight: '36px',
                            marginRight: '3.2rem',
                            marginRight: '10px',
                            marginLeft: '20px'
                        }}>
                            <TimeSlider flight={flight} dispatch={dispatch}/>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={styles.myAccordion} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1bh-content"
                id="panel1bh-header">
                <Typography sx={{fontFamily:'AliBaba',color: theme.palette.gray.five,flexShrink: 0,paddingY:'.8rem',fontSize:'.875rem',fontWeight: '500'}}>
            {'نوع بلیط'}
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography sx={{fontFamily:'AliBaba',color:theme.palette.gray.four,fontSize:'1rem',lineHeight:'36px',marginRight:'3.2rem',marginRight:'10px',marginLeft:'20px'}}>
                <TypeSidebar first={'چارتر'} second={'سیستمی'} flight={flight} dispatch={dispatch}/>
                </Typography>
                </AccordionDetails>
                </Accordion>

                <Accordion style={styles.myAccordion} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1bh-content"
                id="panel1bh-header">
                <Typography sx={{fontFamily:'AliBaba',color: theme.palette.gray.five,flexShrink: 0,paddingY:'.8rem',fontSize:'.875rem',fontWeight: '500'}}>
            {'کلاس پروازی'}
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography sx={{fontFamily:'AliBaba',color:theme.palette.gray.four,fontSize:'1rem',lineHeight:'36px',marginRight:'3.2rem',marginRight:'10px',marginLeft:'20px'}}>
                <TypeSidebar first={'اکونومی'} second={'بیزینس'} flight={flight} dispatch={dispatch}/>
                </Typography>
                </AccordionDetails>
                </Accordion>

                <Accordion style={styles.myAccordion} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1bh-content"
                id="panel1bh-header">
                <Typography sx={{fontFamily:'AliBaba',color: theme.palette.gray.five,flexShrink: 0,paddingY:'.8rem',fontSize:'.875rem',fontWeight: '500'}}>
            {'شرکت‌های هواپیمایی'}
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography sx={{fontFamily:'AliBaba',color:theme.palette.gray.four,fontSize:'1rem',lineHeight:'36px',marginRight:'3.2rem',marginRight:'10px',marginLeft:'20px'}}>
                <CompanySidebar flight={flight} dispatch={dispatch} />
                </Typography>
                </AccordionDetails>
                </Accordion>

                <Accordion style={styles.myAccordion}  expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1bh-content"
                id="panel1bh-header">
                <Typography sx={{fontFamily:'AliBaba',color: theme.palette.gray.five,flexShrink: 0,paddingY:'.8rem',fontSize:'.875rem',fontWeight: '500'}}>
            {'موارد دیگر'}
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography sx={{fontFamily:'AliBaba',color:theme.palette.gray.four,fontSize:'1rem',lineHeight:'36px',marginRight:'3.2rem',marginRight:'10px',marginLeft:'20px'}}>
                <TypeSidebar first={'نمایش بلیط‌های تکراری'} second={'نمایش بلیط‌های موجود'} flight={flight} dispatch={dispatch}/>
                </Typography>
                </AccordionDetails>
                </Accordion>
        </>
    )
}