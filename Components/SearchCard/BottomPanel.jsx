import TabContext from "@mui/lab/TabContext";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import AccordionDetails from "@mui/material/AccordionDetails";
import TabPanel from "@mui/lab/TabPanel";
import {useState} from "react";
import {Box, Button, Typography} from "@mui/material";
import Tabs from "@mui/material/Tabs";

export default function BottomPanel() {

    const [value, setValue] = useState('one');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab sx={{fontFamily: 'Alibaba'}} label="اطلاعات پرواز" value="one" />
                <Tab sx={{fontFamily: 'Alibaba'}} label="قوانین استرداد" value="two" />
            </Tabs>
        </Box>
    )
}