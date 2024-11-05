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

const Home = () => {
  const [formType, setFormType] = useState("individual");

  const handleTabClick = (type) => {
    setFormType(type);
  };

  return (
    <>
      <div className="home-container">
        <Navbar />
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
            <div className="button-group">
              <button
                className={`tab ${formType === "company" ? "active" : ""}`}
                onClick={() => handleTabClick("company")}
              >
                Company Name
              </button>
              <button
                className={`tab ${formType === "individual" ? "active" : ""}`}
                onClick={() => handleTabClick("individual")}
              >
                Individual
              </button>
            </div>

            <form className="booking-form">
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
      <div className="container mt-5">
        <div className="row ">
          <div className="col-6">
            <div className="service-right">
              <Image src={"/DeWatermark.png"} width={520} height={300} alt="" />
            </div>
          </div>

          <div className="col-6">
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

              <div className="row" style={{ gap: "3px" }}>
                <div className="col-6 service-left-menu">
                  <p className="" style={{ textAlign: "center" }}>
                    Huge Data base of several kinds of Drivers
                  </p>
                </div>
                <div className="col-6 service-left-menu">
                  <p className="" style={{ textAlign: "center" }}>
                    Driver training is provided as and when required in
                    association of reputed agency.
                  </p>
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
            <div className="col-6">
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
            <div className="col-6">
              <div className="our-strenght-heading">
                <h1>Our Strength</h1>
              </div>

              <div className="our-strenght-right-content mt-5">
                <div>
                <FaUserAlt size={40}/>
                </div>

                <div className="text-center">
                  <div className="our-strenght-right-content-count">100+</div>
                  <div className="our-strenght-right-content-head">Satisfied Retail Customer</div>
                </div>
              </div>


              <div className="our-strenght-right-content mt-5">
                <div>
                <FaCarRear size={40}/>
                </div>

                <div className="text-center">
                  <div className="our-strenght-right-content-count">100+</div>
                  <div className="our-strenght-right-content-head">Satisfied  Registered and Verified Driver</div>
                </div>
              </div>

              <div className="our-strenght-right-content mt-5">
                <div>
                <PiUsersThreeFill size={40}/>
                </div>

                <div className="text-center">
                  <div className="our-strenght-right-content-count">100+</div>
                  <div className="our-strenght-right-content-head">Satisfied  Corporate Customers</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
