"use client";
import React, { useState } from "react";
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
                Company Name
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
      <div className="our-strenght">
        <div className="container">
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
            <h2 class="driver-text text-center font-lighter mx-auto">Driver Vs Taxi Services</h2>
          </div>
          <div className="map-item mt-5">
            <div className="row">
              <div className="col-lg-3">
                <div className="driver-safe-title">
                  <h3 className="text-center"> Driver </h3>
                </div>
                <div className="driver-organization position-relative">
                  <button type="submit" class="submit-button mb-5 ">Professionals who know their trad</button>
                  <button type="submit" class="submit-button mb-5">Great traffic sense with great skills</button>
                  <button type="submit" class="submit-button mb-5">Understand the society in general and
                    hence behave in a mannered way</button>
                  <button type="submit" class="submit-button">Highly aware and know their responsibilities well</button>
                  <div className="sep position-absolute"></div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="driver-organizations position-relative">
                  <button type="submit" class="submit-button mb-5 ">Highly educated drivers who understand the nitty-gritties of driving</button>
                  <button type="submit" class="submit-button mb-5">Understand technology and rules</button>
                  <button type="submit" class="submit-button mb-5">Very well trained</button>
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
                  <button type="submit" class="submit-button mb-5 ">Professionals who know their trad</button>
                  <button type="submit" class="submit-button mb-5">Great traffic sense with great skills</button>
                  <button type="submit" class="submit-button mb-5">Understand the society in general and
                    hence behave in a mannered way</button>
                  <div className="sep position-absolute"></div>

                </div>
              </div>
              <div className="col-lg-2">
                <div className="dri-fix">
                  <button type="submit" class="submit-button mb-5 ">Professionals who know their trad</button>
                  <button type="submit" class="submit-button mb-5">Great traffic sense with great skills</button>
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

{/* mera-deriver-benifits */}
<div className="mera-deriver-title">
  <div className="driver-mera text-center">
    <h3 className="fw-bold ">Mera Driver Benefits</h3>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-3">
        <div className="police-title">

        </div>
      </div>
    </div>
  </div>
</div>

    </>

  );
};

export default Home;
