"use client";
import React, { useState } from "react";
// import "../../../styles/pricing.scss";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import FeelJourney from "../../FeelJourney";
import OnlineStore from "../../OnlineStore";
import Slider from "../../Slider";
import Footer from "../../Footer";

const Pricing = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const monthlyPlans = [
    {
      price: 500,
      title: "Basic Plan",
      features: [
        "Access To All Basic Features",
        "Access To All Basic Features",
        "Access To All Basic Features",
        "Access To All Basic Features",
      ],
    },
    {
      price: 1200,
      title: "Most Popular",
      features: ["Access To All Basic Features"],
      isPopular: true,
    },
    {
      price: 2200,
      title: "Enterprise Plan",
      features: ["Access To All Basic Features"],
    },
    {
      price: 3200,
      title: "Basic Plan",
      features: ["Access To All Basic Features"],
    },
  ];

  const annuallyPlans = [
    {
      price: 5000,
      title: "Basic Plan",
      features: ["Access To All Basic Features","Access To All Basic Features","Access To All Basic Features","Access To All Basic Features","Access To All Basic Features"],
    },
    {
      price: 10000,
      title: "Most Popular",
      features: ["Access To All Basic Features"],
      isPopular: true,
    },
    {
      price: 20000,
      title: "Enterprise Plan",
      features: ["Access To All Basic Features"],
    },
    {
      price: 30000,
      title: "Basic Plan",
      features: ["Access To All Basic Features"],
    },
  ];




const renderPlans = (plans) => (
    <div className="row mt-5">
      {plans.map((plan, index) => (
        <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className={`pricing-card ${plan.isPopular ? "popular" : ""}`}>
            <img
              src={"/frame1.png"}
              alt="Default Image"
              className="pricing-card-topimg"
            />
            <img
              src={"/frame2.png"} // Hover image source
              alt="Hover Image"
              className="hover-image"
            />
            <div className="p-3 mt-5 position-relative" >
              {plan.isPopular && (
                <div className="popular-badge">Most Popular</div>
              )}
              <h2 className="price mt-4">{plan.price}</h2>
              <p>Free Subscription</p>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <DownloadDoneIcon /> {feature}
                  </li>
                ))}
              </ul>
              <div className="plan-title">{plan.title}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  
  return (
    <div>
      <div className="pricingpage">
        <div className="pricingpage-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <h1 className="pricing-heading">Pricing</h1>
              </div>
              <div className="col-lg-7">
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
      <div className="choose-title" style={{ marginTop: "190px" }}>
        <div className="container-fluid">
          <div className="choose-plans text-center">
            <h1 className="choose-heading fw-bold">Choose Your Perfect Plans</h1>
            <p>Affordable pricing</p>
          </div>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="pricing tabs"
              >
                <Tab label="Monthly" value="1" className="pricing-tabs" />
                <Tab label="Annually" value="2" className="pricing-tabs" />
              </Tabs>
            </Box>
            {value === "1"
              ? renderPlans(monthlyPlans)
              : renderPlans(annuallyPlans)}
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
  );
};

export default Pricing;
