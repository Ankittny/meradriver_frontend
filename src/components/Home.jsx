"use client";
// import React, { useState } from "react";
import "../styles/home.scss";
import Navbar from "./Navbar";
import CounterComponent from "./CounterComponent";
import Image from "next/image";
import BestDriver from "./BestDriver";
import AboutusMeraDriver from "./AboutusMeraDriver";
import { FaUserAlt } from "react-icons/fa";
import { FaCarRear } from "react-icons/fa6";
import { PiUsersThreeFill } from "react-icons/pi";
import FeelJourney from "./FeelJourney";
import Link from "next/link";
import OnlineStore from "./OnlineStore";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Slider from "./Slider";
import Footer from "./Footer";

// import "../styles/slider.scss";
// import Image from "next/image";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';

// import './styles.css';/

// import required modules
import { Pagination } from 'swiper/modules';



const Home = () => {
  const [formType, setFormType] = useState("individual");

  const handleTabClick = (type) => {
    setFormType(type);
  };


  return (
    <>
      <Navbar />
      <div className="home-container">
        <video autoPlay loop muted className="background-video">
          <source src="/videos/Navishkar.mp4" type="video/mp4" />
        </video>

        <div className="content-overlay mt-3">
          <div className="content">
            <h1>Meet Your Driver Needs, 24×7</h1>
            <p>
              With a commitment to professionalism and quality, MeraDriver
              transforms the driver hiring experience, ensuring precision and
              reliability in every service.
            </p>
            <button className="book-button">Book</button>
          </div>

          <div className="form-container">
            <p>ONLINE BOOKING</p>
            <p className="form-container-text">Book Your Driver Now</p>
            <div className="button-group mt-3">
              <button
                className={`tab rounded ${formType === "company" ? "active" : ""}`}
                onClick={() => handleTabClick("company")}
              >
                Company
              </button>
              <button
                className={`tab rounded  mx-3 ${formType === "individual" ? "active" : ""}`}
                onClick={() => handleTabClick("individual")}
              >
                Individual
              </button>
            </div>

            <form className="booking-form ">
              {formType === "individual" ? (
                <>
                  <div className="form-row">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="form-row">
                    <input type="tel" placeholder="Mobile No." />
                    <input type="text" placeholder="Location" />
                  </div>
                  <div className="form-row">
                    <input type="text" placeholder="Job Type" />
                    <input type="text" placeholder="Vehicle Type" />
                  </div>
                  <textarea placeholder="Additional information"></textarea>
                </>
              ) : (
                <>
                  <div className="form-row">
                    <input type="text" placeholder="Company Name" />
                    <input type="text" placeholder="Contact Person" />
                  </div>
                  <div className="form-row">
                    <input type="tel" placeholder="Company Contact No." />
                    <input type="email" placeholder="Company Email" />
                  </div>
                  <div className="form-row">
                    <input type="text" placeholder="Location" />
                    <input type="text" placeholder="Vehicle Type" />
                  </div>
                  <textarea placeholder="Additional information"></textarea>
                </>
              )}
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Counter Component */}
      <CounterComponent />

      {/* Our Services */}
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-lg-6">
            <div className="service-right">
              <Image src={"/DeWatermark.png"} width={520} height={300} alt="" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="">
              <h1 className="service-left-heading">Our Services</h1>
              <div className="service-left-para">
                <p>
                  Your satisfaction is our first priority. Hence, we assure you
                  the best driver service. Driver Bulao Mobile application also
                  provides you a mechanism to track the current location of
                  driver assigned to you.
                </p>
              </div>
              <div className="row" >
                <div className="col-lg-6 service-left-menu ">
                  <p className="" style={{ textAlign: 'center' }}>Huge Data base of several kinds of Drivers</p>
                </div>
                <div className="col-lg-6 service-left-menu ">
                  <p className="" style={{ textAlign: 'center' }}>Driver training is provided as and when required in association of reputed agency.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Driver for you */}
      <BestDriver />

      {/* About us Mera driver */}
      <AboutusMeraDriver />

      {/* Our Strenght */}
      <div className="our-strenght pt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="our-strenght-left">
                <div className="" style={{ textAlign: "end" }}>
                  <img
                    src={"/MERA-DRIVER.png"}
                    alt=""
                    className="our-strenght-logo"
                  />
                </div>
                <img
                  src={"/ourstrenght.png"}
                  alt=""
                  className="our-strenght-img"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="our-strenght-heading">
                <h1 className="strenght-title">OUR STRENGTH</h1>
              </div>

              <div className="our-strenght-right-content mt-5">
                <div>
                  <FaUserAlt size={40} />
                </div>

                <div className="text-center">
                  <div className="our-strenght-right-content-count">100+</div>
                  <div className="our-strenght-right-content-head">Satisfied Retail Customer</div>
                </div>
              </div>


              <div className="our-strenght-right-content mt-5">
                <div>
                  <FaCarRear size={40} />
                </div>

                <div className="text-center">
                  <div className="our-strenght-right-content-count">7000+</div>
                  <div className="our-strenght-right-content-head"> Registered and Verified Driver</div>
                </div>
              </div>

              <div className="our-strenght-right-content mt-5">
                <div>
                  <PiUsersThreeFill size={40} />
                </div>

                <div className="text-center">
                  <div className="our-strenght-right-content-count">50+</div>
                  <div className="our-strenght-right-content-head"> Corporate Customers</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* feel journey */}
      <FeelJourney />

      {/* driver vs taxi druvers */}
      <div className="driver-title pt-5">
        <div className="container-fluid">
          <div className="driver-heading">
            <h2 className="driver-text text-center font-lighter mx-auto">Driver Vs Taxi Services</h2>
          </div>
          <div className="map-item mt-5">
            <div className="row">
              <div className="col-lg-3">
                <div className="driver-safe-title">
                  <h3 className="text-center"> Driver </h3>
                </div>
                <div className="driver-organization position-relative">
                  <button type="submit" className="submit-button mb-5 ">Professionals who know their trad</button>
                  <button type="submit" className="submit-button mb-5">Great traffic sense with great skills</button>
                  <button type="submit" className="submit-button mb-5">Understand the society in general and
                    hence behave in a mannered way</button>
                  <button type="submit" className="submit-button">Highly aware and know their responsibilities well</button>
                  <div className="sep position-absolute"></div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="driver-organizations position-relative">
                  <button type="submit" className="submit-button mb-5 ">Highly educated drivers who understand the nitty-gritties of driving</button>
                  <button type="submit" className="submit-button mb-5">Understand technology and rules</button>
                  <button type="submit" className="submit-button mb-5">Very well trained</button>
                </div>
              </div>
              <div className="col-lg-1 position-relative">
                <div className="sketch-title position-absolute">
                  <img
                    src={"/removebg-preview.png"}
                    alt="dd3"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="driver-safe-title">
                  <h3 className="text-center"> Taxi Services </h3>
                </div>
                <div className="driver-organization position-relative">
                  <button type="submit" className="submit-button mb-5 ">Professionals who know their trad</button>
                  <button type="submit" className="submit-button mb-5">Great traffic sense with great skills</button>
                  <button type="submit" className="submit-button mb-5">Understand the society in general and
                    hence behave in a mannered way</button>
                  <div className="sep position-absolute"></div>

                </div>
              </div>
              <div className="col-lg-2">
                <div className="dri-fix">
                  <button type="submit" className="submit-button mb-5 ">Professionals who know their trad</button>
                  <button type="submit" className="submit-button mb-5">Great traffic sense with great skills</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* plqace-requirements */}
      <div className="place-title">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="place-heading">
                <h3 className="your-cls fw-bold">Place your Requirement</h3>
                <p>We provide driver, according to your requirement like you might need driver for the part
                  time or the full time or for rental purposes. We provide the driver.</p>
              </div>
              <div className="more-action">
                <Link className="showbtn" href="/">Show More</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="work-apply">
                <h4 className="text-center fw-bold">How it works?</h4>
              </div>
              <div className="animation-heading mt-3">
                <img
                  src={"/Layer_1.png"}
                  alt="dd4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* step slider */}
      <div className="swiper-titles-t ">
        <Swiper
          slidesPerView={3}
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slider-slide d-flex  gap-4 ">
              <div className="step-1">
                <h3 >Step 1
                </h3>
                <p>Lorem ipsum, dolor sit amet.</p>
              </div>
            </div>


          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-slide d-flex  gap-4">
              <div className="step-1">
                <h3> Step 2</h3>
                <p>Lorem ipsum, dolor sit amet.</p>              </div>

            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-slide d-flex gap-4">
              <div className="step-1">
                <h3> Step 3 </h3>
                <p>Lorem ipsum, dolor sit amet.</p>
              </div>
            </div>


          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-slide d-flex gap-4">
              <div className="step-1">
                <h3> Step 4</h3>
                <p>Lorem ipsum, dolor sit amet.</p>              </div>

            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-slide d-flex gap-4">
              <div className="step-1">
                <h3 >Step 1
                </h3>
                <p>Lorem ipsum, dolor sit amet.</p>                 </div>

            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-slide d-flex gap-4">
              <div className="step-1">
                <h3> Step 2</h3>
                <p>Lorem ipsum, dolor sit amet.</p>              </div>

            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-slide d-flex gap-4">
              <div className="step-1">
                <h3> Step 3</h3>
                <p>Lorem ipsum, dolor sit amet.</p>              </div>

            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-slide d-flex gap-4">
              <div className="step-1">
                <h3> Step 4</h3>
                <p>Lorem ipsum, dolor sit amet.</p>              </div>

            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-slide d-flex gap-4">

              <div className="step-1">
                <h3> Step 5</h3>
                <p>Lorem ipsum, dolor sit amet.</p>
              </div>
            </div>

          </SwiperSlide>
        </Swiper>

      </div>

      {/* mera-deriver-benifits */}
      <div className="mera-deriver-title mt-5">
        <div className="driver-mera text-center">
          <h3 className="fw-bold ">Mera Driver Benefits</h3>
        </div>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-lg-3">
              <div className="police-title py-3">
                <div className="image-little text-center">
                  <img
                    src={"/Group.png"}
                    alt="dd4" width="100px" height="100px"
                  />
                  <p className="mt-3">Hire Professional drivers for limited period/ hours</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="police-title py-3">
                <div className="image-little text-center">
                  <img
                    src={"/Frame.png"}
                    alt="dd4" width="100px" height="100px"
                  />
                  <p className="mt-3">Police Verified Drivers</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="police-title  py-3">
                <div className="image-little text-center">
                  <img
                    src={"/Group (1).png"}
                    alt="dd4" width="100px" height="100px"
                  />
                  <p className="mt-3 px-3">Hire cost is less than renting a taxi/cab</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="police-title py-3">
                <div className="image-little text-center">
                  <img
                    src={"/Group (2).png"}
                    alt="dd4" width="100px" height="100px"
                  />
                  <p className="mt-3 px-3">Centralized Call center +91 9911138139 for any assistance</p>
                </div>
              </div>
            </div>
            <div className="main-circle-icon mt-5 mx-auto">
              <div className="row">
                <div className="col-lg-4">
                  <div className="police-title py-3">
                    <div className="image-little text-center">
                      <img
                        src={"/Frame (2).png"}
                        alt="dd4" width="100px" height="100px"
                      />
                      <p className="mt-3 px-3" >Comfort of your own car</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="police-title py-3">
                    <div className="image-little text-center">
                      <img
                        src={"/Frame (1).png"}
                        alt="dd4" width="100px" height="100px"
                      />
                      <p className="mt-3 px-3">Availability of drivers as per your requirement</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="police-title py-3">
                    <div className="image-little text-center">
                      <img
                        src={"/Group (3).png"}
                        alt="dd4" width="100px" height="100px"
                      />
                      <p className="mt-3 px-3">Easy payment system</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OnlineStore />

      {/* accordian */}
      <div className="accordian-title mt-5">
        <div className="container">
          <h2 className="frequently-title text-center">Frequently Asked Questions</h2>
          <div className="accordian-map pt-3">

            <div className="row">
              <div className="col-lg-6">
                <div className="accordian-item">
                  <div>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        How do I book an airport transfer?
                      </AccordionSummary>
                      <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                      >
                        Are there any extra charges?
                      </AccordionSummary>
                      <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                      >
                        How much do I need to pay for airport transfer service?
                      </AccordionSummary>
                      <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4-content"
                        id="panel4-header"
                      >
                        Will I get to travel in a shared vehicle or privately reserved?
                      </AccordionSummary>
                      <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                      </AccordionDetails>
                    </Accordion>

                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="accordian-item">
                  <div>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        If my flight gets delayed, will I be picked up by the chauffeur?
                      </AccordionSummary>
                      <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                      >
                        At the airport where will my driver come to receive me?
                      </AccordionSummary>
                      <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                      >
                        Do you provide child seats?
                      </AccordionSummary>
                      <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4-content"
                        id="panel4-header"
                      >
                        What happens if I'm unable to find my driver at the airport?
                      </AccordionSummary>
                      <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                      </AccordionDetails>
                    </Accordion>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slider />
      <Footer />
    </>

  );
};

export default Home;
