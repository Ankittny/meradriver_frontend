"use client";
// import React, { useState } from "react";
import "../styles/home.css";
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

import Slider from "./Slider";
import Footer from "./Footer";
import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { enquery } from "@/redux/Action/Enquery";
import 'bootstrap/dist/js/bootstrap.bundle';
import Aos from "aos";
import 'aos/dist/aos.css'
import { duration } from "@mui/material";
import Head from 'next/head';

const Home = () => {

  useEffect(() => {
    const element = document.getElementById("my-element");
    console.log("Found element:", element);
  }, []);
  const [formType, setFormType] = useState("individual");
  const [loadings, setLoading] = useState(false);


  console.log("Environment:", typeof window !== "undefined" ? "Client" : "Server");



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    location: "",
    job_type: "",
    vehicle_type: "",
    additional_info: "",
    company_name: "",
    contact_person: "",
    contact_no: "",
    company_email: "",
  });

  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.enquery);



  useEffect(() => {
    if (formType === "individual") {
      
      setFormData((prev) => ({
        ...prev,
        company_name: "",
        contact_person: "",
        contact_no: "",
        company_email: "",
      }));
    } else {
     
      setFormData((prev) => ({
        ...prev,
        name: "",
        email: "",
        mobile: "",
        job_type: "",
      }));
    }
  }, [formType]);

  useEffect(() => {
    Aos.init({ duration: 600 })
  }, []) 


  const handleTabClick = (type) => {
    setFormType(type);

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, 
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setLoading(true); 
  
    try {
      const formDataToSend = new FormData();

      formDataToSend.append("location", formData.location || "");
      formDataToSend.append("vehicle_type", formData.vehicle_type || "");
      formDataToSend.append("additional_info", formData.additional_info || "");
      formDataToSend.append(
        "company",
        formType === "individual" ? "individual" : formData.company_name || ""
      );
  
  
      if (formType === "individual") {
        formDataToSend.append("name", formData.name || "");
        formDataToSend.append("email", formData.email || "");
        formDataToSend.append("mobile", formData.mobile || "");
        formDataToSend.append("jobType", formData.job_type || "");
      } else {
       
        formDataToSend.append("contactPerson", formData.contact_person || "");
        formDataToSend.append("companyContact", formData.contact_no || "");
        formDataToSend.append("companyEmail", formData.company_email || "");
      }
  
      
      await dispatch(enquery(formDataToSend));
  
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error); 
      alert("Failed to submit the form. Please try again.");
    } finally {
      setLoading(false); 
    }
  };

  
  return (
    <>
      <Navbar />
      <div className="home-container">
        <video autoPlay loop muted className="background-video">
          <source src="/videos/Navishkar.mp4" type="video/mp4" />
        </video>

        <div className="content-overlay mt-3">
          <div className="content text-center">
            <h1 className="text-start">Meet Your Driver Needs, 24×7</h1>
            <p className="text-start">
              With a commitment to professionalism and quality, MeraDriver
              transforms the driver hiring experience, ensuring precision and
              reliability in every service.
            </p>
            <button className=" book-tickets">Book</button>
          </div>

          <div className="form-container" data-aos="fade-left">
            <p>ONLINE BOOKING</p>
            <p className="form-container-text">Book Your Driver Now</p>
            <div className="button-group mt-3">
              <button
                className={`tab rounded ${formType === "company" ? "active" : ""
                  }`}
                onClick={() => handleTabClick("company")}
              >
                Company
              </button>
              <button
                className={`tab rounded mx-3 ${formType === "individual" ? "active" : ""
                  }`}
                onClick={() => handleTabClick("individual")}
              >
                Individual
              </button>
            </div>

            <form className="booking-form" onSubmit={handleSubmit}>
  {formType === "individual" ? (
    <>
      <div className="form-row">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile No."
          value={formData.mobile}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <input
          type="text"
          name="job_type"
          placeholder="Job Type"
          value={formData.job_type}
          onChange={handleChange}
        />
        <input
          type="text"
          name="vehicle_type"
          placeholder="Vehicle Type"
          value={formData.vehicle_type}
          onChange={handleChange}
        />
      </div>
      <textarea
        name="additional_info"
        placeholder="Additional information"
        value={formData.additional_info}
        onChange={handleChange}
      />
    </>
  ) : (
    <>
      <div className="form-row">
        <input
          type="text"
          name="company_name"
          placeholder="Company Name"
          value={formData.company_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contact_person"
          placeholder="Contact Person"
          value={formData.contact_person}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <input
          type="tel"
          name="contact_no"
          placeholder="Company Contact No."
          value={formData.contact_no}
          onChange={handleChange}
        />
        <input
          type="email"
          name="company_email"
          placeholder="Company Email"
          value={formData.company_email}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />
        <input
          type="text"
          name="vehicle_type"
          placeholder="Vehicle Type"
          value={formData.vehicle_type}
          onChange={handleChange}
        />
      </div>
      <textarea
        name="additional_info"
        placeholder="Additional information"
        value={formData.additional_info}
        onChange={handleChange}
      />
    </>
  )}
  <button type="submit" className="submit-button btn-gone" disabled={loading}>
    {loading ? "Submitting..." : "Submit"}
  </button>
</form>

            {success && (
              <p className="success-text">Booking submitted successfully!</p>
            )}
            {error && <p className="error-text">Error: {error}</p>}
          </div>
        </div>
      </div>

      {/* Counter Component */}
      <CounterComponent />

      {/* Our Services */}
      <div className="container ">
        <div className="row ">
          <div className="col-lg-6">
            <div className="service-right" data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
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
              <div className="row">
                <div className="col-lg-6 service-left-menu ">
                  <p className="" style={{ textAlign: "center" }}>
                    Huge Data base of several kinds of Drivers.
                  </p>
                  <p className="" style={{ textAlign: "center" }}>
                    The behavior pattern of the driver/ employee is maintained.
                  </p>
                  <p className="" style={{ textAlign: "center" }}>
                    Drivers available with international driving experience.
                  </p>
                </div>
                <div className="col-lg-6 service-left-menu ">
                  <p className="" style={{ textAlign: "center" }}>
                    Driver training is provided as and when required in
                    association of reputed agency.
                  </p>
                  <p className="" style={{ textAlign: "center" }}>
                    If need be, English speaking drivers are provided.
                  </p>
                  <p className="" style={{ textAlign: "center" }}>
                    High profile drivers can be provided who have experience in handling VVIP customers.
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
      <div className="our-strenght pt-5">
        <div className="container">
          <div className="row flex-rm">
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
            <div className="col-lg-6 d-sm-none d-md-block d-none d-sm-block">
              <div className="our-strenght-heading">
                <h1 className="strenght-title">OUR STRENGTH</h1>
              </div>

              <div className="our-strenght-right-content mt-5">
                <div>
                  <FaUserAlt size={40} />
                </div>

                <div className="text-center">
                  <div className="our-strenght-right-content-count">100+</div>
                  <div className="our-strenght-right-content-head">
                    Satisfied Retail Customer
                  </div>
                </div>
              </div>

              <div className="our-strenght-right-content mt-5">
                <div>
                  <FaCarRear size={40} />
                </div>

                <div className="text-center">
                  <div className="our-strenght-right-content-count">7000+</div>
                  <div className="our-strenght-right-content-head">
                    {" "}
                    Registered and Verified Driver
                  </div>
                </div>
              </div>

              <div className="our-strenght-right-content mt-5">
                <div>
                  <PiUsersThreeFill size={40} />
                </div>

                <div className="text-center">
                  <div className="our-strenght-right-content-count">50+</div>
                  <div className="our-strenght-right-content-head">
                    {" "}
                    Corporate Customers
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-md-none d-xl-none d-xxl-block d-lg-block d-lg-none d-xl-block">
              <div className="our-strenght-heading">
                <h1 className="strenght-title">OUR STRENGTH</h1>
              </div>

              <div className="our-strenght-right-content mt-5">
                <div>
                  <FaCarRear size={40} />
                </div>

                <div className="">
                  <div className="our-strenght-right-content-count">7000+</div>
                  <div className="our-strenght-right-content-head">
                    {" "}
                    Registered and Verified Driver
                  </div>
                </div>
              </div>

              <div className="our-strenght-right-content mt-5">
                <div>
                  <FaUserAlt size={40} />
                </div>

                <div className="">
                  <div className="our-strenght-right-content-count">2500+</div>
                  <div className="our-strenght-right-content-head">
                    Satisfied Retail Customer
                  </div>
                </div>
                <div className="our-strenght-right-content mt-5">
                  <div>
                    <PiUsersThreeFill size={40} />
                  </div>

                  <div className="text-center">
                    <div className="our-strenght-right-content-count">50+</div>
                    <div className="our-strenght-right-content-head">
                      {" "}
                      Corporate Customers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* feel journey */}
      <FeelJourney />

      {/* driver vs taxi druvers */}
      <div className="driver-title py-5 d-sm-none d-md-block d-none d-sm-block  block-fxt-tr">
        <div className="driver-heading">
          <h2 className="driver-text text-center font-lighter mx-auto">
            Driver Vs Taxi Services
          </h2>
        </div>
        <div className="container">
          <div className="row">
            {/* <div className="map-item mt-5"> */}
            <div className="col-lg-3">
              <div className="driver-safe-title">
                <h3 className="text-center"> Driver </h3>
              </div>
              <div className="driver-organization position-relative">
                <button type="submit" className="submit-button mb-5 ">
                  Professionals who know their trad
                </button>
                <button type="submit" className="submit-button mb-5">
                  Great traffic sense with great skills
                </button>
                <button type="submit" className="submit-button mb-5">
                  Understand the society in general and hence behave in a
                  mannered way
                </button>
                <button type="submit" className="submit-button">
                  Highly aware and know their responsibilities well
                </button>
                <div className="sep position-absolute"></div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="driver-organizations position-relative">
                <button type="submit" className="submit-button mb-5 ">
                  Highly educated drivers who understand the nitty-gritties of
                  driving
                </button>
                <button type="submit" className="submit-button mb-5">
                  Understand technology and rules
                </button>
                <button type="submit" className="submit-button mb-5">
                  Very well trained
                </button>
              </div>
            </div>
            <div className="col-lg-1 position-relative">
              <div className="sketch-title position-absolute">
                <img src={"/removebg-preview.png"} alt="dd3" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="driver-safe-title">
                <h3 className="text-center"> Taxi Services </h3>
              </div>
              <div className="driver-organization position-relative">
                <button type="submit" className="submit-button mb-5 ">
                  Professionals who know their trad
                </button>
                <button type="submit" className="submit-button mb-5">
                  Great traffic sense with great skills
                </button>
                <button type="submit" className="submit-button mb-5">
                  Understand the society in general and hence behave in a
                  mannered way
                </button>
                <div className="sep position-absolute"></div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="dri-fix">
                <button type="submit" className="submit-button mb-5 ">
                  Professionals who know their trad
                </button>
                <button type="submit" className="submit-button mb-5">
                  Great traffic sense with great skills
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="driver-title hello-title py-5 d-md-block d-xl-none d-xxl-block d-lg-block d-lg-none d-xl-block">
        <div className="driver-heading">
          <h2 className="driver-text text-center font-lighter mx-auto">
            Driver Vs Taxi Services
          </h2>
        </div>
        <div className="container">
          <div className="row">
            {/* <div className="map-item mt-5"> */}
            <div className="col-lg-12">
              <div className="driver-safe-title">
                <h3 className="text-start"> Driver </h3>
              </div>
              <div className="driver-organization d-flex gap-4">
                <div className="dr-install">
                  <button type="submit" className="submit-button mb-2 ">
                    Professionals who know their trad
                  </button>
                  <button type="submit" className="submit-button mb-2">
                    Great traffic sense with great skills
                  </button>
                  <button type="submit" className="submit-button mb-2">
                    Understand the society in general and hence behave in a
                    mannered way
                  </button>
                  <button type="submit" className="submit-button mb-2">
                    Highly aware and know their responsibilities well
                  </button>
                  <button type="submit" className="submit-button mb-2 ">
                    Highly educated drivers who understand the nitty-gritties of
                    driving
                  </button>
                  <button type="submit" className="submit-button mb-2">
                    Understand technology and rules
                  </button>
                  <button type="submit" className="submit-button ">
                    Very well trained
                  </button>
                </div>

                <div className="driver-safe-title">
                  <h3 className="text-center"> Taxi Services </h3>

                  <div className="driver-organization ">

                    <button type="submit" className="submit-button mb-2 ">
                      Professionals who know their trad
                    </button>
                    <button type="submit" className="submit-button mb-2">
                      Great traffic sense with great skills
                    </button>
                    <button type="submit" className="submit-button mb-2">
                      Understand the society in general and hence behave in a
                      mannered way
                    </button>
                    <button type="submit" className="submit-button mb-2 ">
                      Professionals who know their trad
                    </button>
                    <button type="submit" className="submit-button ">
                      Great traffic sense with great skills
                    </button>



                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* plqace-requirements */}
      <div className="place-title pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="place-heading">
                <h3 className="your-cls fw-bold">Place your Requirement</h3>
                <p>
                  We provide driver, according to your requirement like you
                  might need driver for the part time or the full time or for
                  rental purposes. We provide the driver.
                </p>
              </div>
              <div className="more-action">
                <Link className="showbtn" href="/">
                  Show More
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="work-apply">
                <h4 className="text-center fw-bold">How it works?</h4>
              </div>
              <div className="animation-heading mt-3 " data-aos="fade-up"
                data-aos-anchor-placement="top-center">
                <img src={"/Layer_1.png"} alt="dd4" />
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
          breakpoints={{
            425: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
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
                <h3>Step 1</h3>
                <p>Lorem ipsum, dolor sit amet.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-slide d-flex  gap-4">
              <div className="step-1">
                <h3> Step 2</h3>
                <p>Lorem ipsum, dolor sit amet.</p>{" "}
              </div>
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
                <p>Lorem ipsum, dolor sit amet.</p>{" "}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-slide d-flex gap-4">
              <div className="step-1">
                <h3>Step 1</h3>
                <p>Lorem ipsum, dolor sit amet.</p>{" "}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-slide d-flex gap-4">
              <div className="step-1">
                <h3> Step 2</h3>
                <p>Lorem ipsum, dolor sit amet.</p>{" "}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-slide d-flex gap-4">
              <div className="step-1">
                <h3> Step 3</h3>
                <p>Lorem ipsum, dolor sit amet.</p>{" "}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-slide d-flex gap-4">
              <div className="step-1">
                <h3> Step 4</h3>
                <p>Lorem ipsum, dolor sit amet.</p>{" "}
              </div>
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
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-6 col-6">
              <div className="police-title py-3 " data-aos="zoom-out-down">
                <div className="image-little text-center">
                  <img
                    src={"/Group.png"}
                    alt="dd4"
                    width="100px"
                    height="100px"
                  />
                  <p className="mt-3">
                    Hire Professional drivers for <br /> limited period/ hours
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-6 col-6">
              <div className="police-title py-3" data-aos="zoom-out-down">
                <div className="image-little text-center">
                  <img
                    src={"/Frame.png"}
                    alt="dd4"
                    width="100px"
                    height="100px"
                  />
                  <p className="mt-3">Police Verified Drivers</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-6 col-6">
              <div className="police-title  py-3" data-aos="zoom-out-down">
                <div className="image-little text-center">
                  <img
                    src={"/Group (1).png"}
                    alt="dd4"
                    width="100px"
                    height="100px"
                  />
                  <p className="mt-3 px-3">
                    Hire cost is less than <br /> renting a taxi/cab
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-6 col-6">
              <div className="police-title py-3" data-aos="zoom-out-down">
                <div className="image-little text-center">
                  <img
                    src={"/Group (2).png"}
                    alt="dd4"
                    width="100px"
                    height="100px"
                  />
                  <p className="mt-3 px-3">
                    Centralized Call center +91 9911138139 for any assistance
                  </p>
                </div>
              </div>
            </div>
            <div className="main-circle-icon mt-5 mx-auto">
              <div className="row">
                <div className="col-lg-4 col-sm-6 col-xs-6 col-6">
                  <div className="police-title py-3" data-aos="zoom-in-down">
                    <div className="image-little text-center">
                      <img
                        src={"/Frame (2).png"}
                        alt="dd4"
                        width="100px"
                        height="100px"
                      />
                      <p className="mt-3 px-3">Comfort of your own car</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4  col-sm-6 col-xs-6 col-6">
                  <div className="police-title py-3" data-aos="zoom-in-down">
                    <div className="image-little text-center">
                      <img
                        src={"/Frame (1).png"}
                        alt="dd4"
                        width="100px"
                        height="100px"
                      />
                      <p className="mt-3 px-3">
                        Availability of drivers as per your requirement
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4  col-sm-6 col-xs-6 col-6">
                  <div className="police-title py-3" data-aos="zoom-in-down">
                    <div className="image-little text-center">
                      <img
                        src={"/Group (3).png"}
                        alt="dd4"
                        width="100px"
                        height="100px"
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
          <h2 className="frequently-title text-center">
            Frequently Asked Questions
          </h2>
        
          <div className="accordion accordian-map pt-4" id="accordionExample">
            <div className="row">
              <div className="col-lg-6">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      How do I book an airport transfer?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.</span>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mt-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Are there any extra charges?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.</span>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mt-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      How much do I need to pay for airport transfer service?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.</span>
                    </div>
                  </div>
                </div>

                <div className="accordion-item mt-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Will I get to travel in a shared vehicle or privately
                      reserved?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="accordion-item">
                  <h2 className="accordion-header">

                 
                    <button className="accordion-button" type="button"  data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="true" aria-controls="collapsefive">
                    If my flight gets delayed, will I be picked up by the
                        chauffeur?
                    </button>
                  </h2>
                  <div id="collapsefive" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.</span>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mt-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                      At the airport where will my driver come to receive me?
                    </button>
                  </h2>
                  <div id="collapsesix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.</span>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mt-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                      Do you provide child seats?
                    </button>
                  </h2>
                  <div id="collapseseven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.</span>
                    </div>
                  </div>
                </div>

                <div className="accordion-item mt-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                      What happens if I'm unable to find my driver at the
                      airport?
                    </button>
                  </h2>
                  <div id="collapseeight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.</span>
                    </div>
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
