"use client"
import React from "react";
import BestDriver from "../../BestDriver";
import FeelJourney from "../../FeelJourney";
import Slider from "../../Slider";
import OnlineStore from "../../OnlineStore";
import Footer from "../../Footer";

const Services = () => {
  return (
    <>
      <div className="servicepage ">
        <div className="service-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-5  ">
                <h1 className="service-heading">Services</h1>
              </div>
              <div className="col-lg-7">
                <div className="">
                  <img
                    src="/abouttopcar.png"
                    alt=""
                    className="service-top-right-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Driver */}
      <div style={{ marginTop: "330px" }}>
        <BestDriver />
      </div>

      {/* Our Services */}
      <div className=" our-services">
      <div className="container">
        <div className=" services-title">
          <h1 className="text-center">Our Services</h1>
        </div>
        <div className="row our-service-list">
          <div className="col-lg-6">
            <ul className="mt-3">
              <li>Provide full time job opportunity to the drivers.</li>
              <li>Police & Physical Verification on demand is provided.</li>
              <li>Prepaid model also available for registered customers.</li>
            </ul>
          </div>

          <div className="col-lg-6">
            <ul className="mt-3">
              <li>
                Commitment of providing a back-up for a particular time period
                as per the agreed terms.
              </li>
              <li>
                Driver Outsourcing is done thanks to the vast network of
                database
              </li>
              <li>Verified Drivers are provided on demand.</li>
            </ul>
          </div>
        </div>
      </div>
      </div>

      {/* Mera Driver Trainer Manual */}
      <div className=" trainer-manual">
        <div className="container">
        <div className=" mera-title-text">
          <h1 className="text-center">Mera Driver Trainer Manual</h1>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6 p-0">
            <h1 className="trainer-manual-sunheading">
              Basic Service Criteria
            </h1>
            <p className="trainer-manual-para">
              The following indicates a short pointer description of the basic
              criteria, the drivers joining the organization need to fulfill.
              These criteria are incorporated into a comprehensive legal service
              agreement which the chauffeurs and affiliates are required to
              enter into.
            </p>
          </div>

          <div className="col-lg-6 p-0">
            <div>
              <img
                src={"/trainer1.png"}
                alt=""
                className="trainer-module-img"
              />
            </div>
          </div>
        </div>

        <div className="row mt-5 service">
          <div className="col-lg-6 p-0">
            <div>
              <img
                src={"/trainer2.png"}
                alt=""
                className="trainer-module-img"
              />
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <h1 className="trainer-manual-sunheading">
              Personal Hygiene & Presentation
            </h1>
            <p className="trainer-manual-para">
              One of the most common complaints heard from he prospective
              clients is regarding the personal hygiene of chauffeurs. Despite
              this being a sensitive topic, the drivers are required to adhere
              to some minimum standards of personal grooming..
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6 p-0">
            <h1 className="trainer-manual-sunheading">Attire</h1>
            <p className="trainer-manual-para">
              The chauffeurs wear a clean, dark, woolen suit (ideally
              single-breasted), white shirt, tie (if issued) and polished shoes,
              preferably of the lace-up variety. Drivers are dissuaded from
              wearing jewellery, watches and cufflinks
            </p>
          </div>

          <div className="col-lg-6 p-0">
            <div>
              <img
                src={"/trainer3.png"}
                alt=""
                className="trainer-module-img"
              />
            </div>
          </div>
        </div>

        <div className="row mt-5 service">
          <div className="col-lg-6 p-0">
            <div>
              <img
                src={"/trainer4.png"}
                alt=""
                className="trainer-module-img"
              />
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <h1 className="trainer-manual-sunheading">Smoking</h1>
            <p className="trainer-manual-para">
              The fact that the non smoking passengers will be sensitive to the
              odour of tobacco is emphasized upon in the driver trainings
              provided. Also, chauffeurs are dissuaded from smoking in the car
              and in & around the presence of the customers.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6 p-0">
            <h1 className="trainer-manual-sunheading">Eating and Drinking</h1>
            <p className="trainer-manual-para">
              Despite the busy schedule of the chauffeurs, they  are trained to
              not eat and drink in the car, even if it means the vehicle is
              empty. No matter how busy the day, the chauffeur will eat and
              drink outside.
            </p>
          </div>

          <div className="col-lg-6 p-0">
            <div>
              <img
                src={"/trainer5.png"}
                alt=""
                className="trainer-module-img"
              />
            </div>
          </div>
        </div>

        <div className="row mt-5 service">
          <div className="col-lg-6 p-0">
            <div>
              <img
                src={"/trainer6.png"}
                alt=""
                className="trainer-module-img"
              />
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <h1 className="trainer-manual-sunheading">Mobile Telephones</h1>
            <p className="trainer-manual-para">
              All chauffeurs must have an operational mobile phone with them at
              all times and always be able to answer it in case the company
              needs to contact them or their passengers.
            </p>
          </div>
        </div>
      </div>
      </div>
      {/* Feel journet */}
      <div className="feel-jou-exit">
      <FeelJourney />
      </div>
      {/* Slider */}
      <Slider/>

      {/* Online Store */}
      <OnlineStore />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Services;
