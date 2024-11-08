"use client"
import React from 'react'
import { useState } from 'react';
import "../../styles/pricing.scss";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import FeelJourney from '../FeelJourney';
import OnlineStore from '../OnlineStore';
import Slider from '../Slider';
import Footer from '../Footer';







const Pricing = () => {
    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
                                    <Tab label="Monthly" value="1" />
                                    <Tab label="Annualy" value="2" />
                                    {/* <Tab label="Item Three" value="3" /> */}
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <div className="tabing-tab">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div className="pass-tabing">
                                                    <div className="pass-table-int"></div>
                                                    <div className="price-rate">
                                                        <h1 className="pricing-tax">500</h1>
                                                        <p>Free Subscription</p>

                                                        <ul className="tax-listing">
                                                            <li> <DownloadDoneIcon /> acces to all basic featurs  </li>
                                                            <li><DownloadDoneIcon /> acces to all basic featurs</li>
                                                            <li><DownloadDoneIcon /> acces to all basic featurs</li>
                                                            <li><DownloadDoneIcon /> acces to all basic featurs</li>
                                                            <li><DownloadDoneIcon /> acces to all basic featurs</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="pass-tabing tx-bg text-white">
                                                    <div className="pass-table-int bg-white"><h4 className="text-end">Most Popular</h4></div>
                                                    <div className="price-rate">
                                                        <h1 className="pricing-tax">1200</h1>
                                                        <p>Free Subscription</p>

                                                        <ul className="tax-listing">
                                                            <li> <DownloadDoneIcon /> acces to all basic featurs  </li>
                                                            <li><DownloadDoneIcon /> acces to all basic featurs</li>
                                                            <li><DownloadDoneIcon /> acces to all basic featurs</li>
                                                            <li><DownloadDoneIcon /> acces to all basic featurs</li>
                                                            <li><DownloadDoneIcon /> acces to all basic featurs</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="pass-tabing">
                                                    <div className="pass-table-int"></div>
                                                    <div className="price-rate">
                                                        <h1 className="pricing-tax">2200</h1>
                                                        <p>Free Subscription</p>

                                                        <ul className="tax-listing">
                                                            <li> <DownloadDoneIcon /> acces to all basic featurs  </li>
                                                            <li><DownloadDoneIcon /> acces to all basic featurs</li>
                                                            <li><DownloadDoneIcon /> acces to all basic featurs</li>
                                                            <li><DownloadDoneIcon /> acces to all basic featurs</li>
                                                            <li><DownloadDoneIcon /> acces to all basic featurs</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="pass-tabing">
                                                    <div className="pass-table-int"></div>
                                                    <div className="price-rate">
                                                        <h1 className="pricing-tax">3200</h1>
                                                        <p>Free Subscription</p>

                                                        <ul className="tax-listing">
                                                            <li> <DownloadDoneIcon /> acces to all basic featurs  </li>
                                                            <li><DownloadDoneIcon /> acces to all basic featurs</li>
                                                            <li><DownloadDoneIcon /> acces to all basic featurs</li>
                                                            <li><DownloadDoneIcon /> acces to all basic featurs</li>
                                                            <li><DownloadDoneIcon /> acces to all basic featurs</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </TabPanel>
                            <TabPanel value="2">Item Two</TabPanel>
                            {/* <TabPanel value="3">Item Three</TabPanel> */}
                        </TabContext>
                    </Box>
                </div>
            </div>
            <div className="feel-jou-exit">
                <FeelJourney />
            </div>
            <Slider />
            <OnlineStore />
            <Footer />
        </div>


    )
}

export default Pricing
