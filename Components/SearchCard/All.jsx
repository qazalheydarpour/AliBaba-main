
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchCard from "./SearchCard";
import {Box} from "@mui/material";
import {useState} from "react";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function All(){
    const [value, setValue] = useState('one');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
            <Accordion sx={{width:'100%'}}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <SearchCard/>
                </AccordionSummary>
                <AccordionDetails>
                    <TabPanel onChange={() => handleChange} value={value} index={'one'}>
                        Item One
                    </TabPanel>
                    <TabPanel onChange={() => handleChange} value={value} index={'two'}>
                        Item Two
                    </TabPanel>
                </AccordionDetails>
            </Accordion>
    )
}