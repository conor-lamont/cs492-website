import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tabs from '@mui/material/Tabs';
// import TabPanel from '@mui/lab/TabPanel';
import Survey from './survey';
import styles from './styling.css'
import MissionStatement from './mission-statement';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Results from './results';

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
export default function SelectTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='full-size'>
            <div className='header'>
                WaterlooWorks - Or Does it?
            </div>
            <Box sx={{ top: '80px', position: 'sticky', height: '100%' }}>
                <Tabs sx={{ position: 'sticky', top: '80px', zIndex: 2, backgroundColor: 'white' }} value={value} onChange={handleChange}
                >
                    <Tab label="Our mission" {...a11yProps(0)} />
                    <Tab label="The Survey" {...a11yProps(1)} />
                    <Tab label="Results"{...a11yProps(2)} />
                    <Tab label="Analysis" {...a11yProps(3)} />
                    <Tab label="Item Threev2" {...a11yProps(4)} />
                </Tabs>
                <TabPanel className='tab-panel-class' value={value} index={0}>
                    <MissionStatement />
                </TabPanel>
                <TabPanel className='tab-panel-class' value={value} index={1}><Survey /></TabPanel>
                <TabPanel className='tab-panel-class' value={value} index={2}><Results /></TabPanel>
                <TabPanel className='tab-panel-class' value={value} index={3}>4Results</TabPanel>
                <TabPanel className='tab-panel-class' value={value} index={4}>R5esults</TabPanel>
                {/* </TabContext> */}
            </Box >
        </div >
    );
}