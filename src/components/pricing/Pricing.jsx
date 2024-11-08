import React from 'react'
import "../../styles/pricing.scss";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';





const [value, setValue] = React.useState('1');

const handleChange = (event, newValue) => {
    setValue(newValue);
};

const Pricing = () => {
    return (
        <div>
            <div className="pricingpage">
                <div className="pricingpage-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-5 ">
                                <h1 className="pricing-heading">Pricing</h1>
                            </div>
                            <div className="col-7">
                                <div className="">
                                    <img
                                        src="/abouttopcar.png"
                                        alt=""
                                        className="pricing-top-right-image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="choose-title" style={{ marginTop: "190px" }}>
                <div className="container-fluid">
                    <div className="choose-plans text-center">
                        <h1 className="choose-heading">choose your perfect plans</h1>
                        <p>Affordable  pricing  </p>
                    </div>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Item One" value="1" />
                                    <Tab label="Item Two" value="2" />
                                    <Tab label="Item Three" value="3" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">Item One</TabPanel>
                            <TabPanel value="2">Item Two</TabPanel>
                            <TabPanel value="3">Item Three</TabPanel>
                        </TabContext>
                    </Box>
                </div>
            </div>
        </div>


    )
}

export default Pricing
