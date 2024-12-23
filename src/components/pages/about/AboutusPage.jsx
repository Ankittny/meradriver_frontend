"use client"
import React from "react";
// import "../../../styles/aboutuspage.scss";
import AboutusMeraDriver from "../../AboutusMeraDriver";
import FeelJourney from "../../FeelJourney";
import Slider from "../../Slider";
import OnlineStore from "../../OnlineStore";
import Footer from "../../Footer";


const AboutusPage = () => {
  return (
    <>
      <div className="aboutuspage">
        <div className="aboutuspage-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 ">
                <h1 className="aboutuspage-heading">About Mera Driver</h1>
              </div>
              <div className="col-lg-7">
                <div className="">
                  <img
                    src="/abouttopcar.png"
                    alt=""
                    className="aboutuspage-top-right-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about us component */}
      <div className="" style={{ marginTop: "330px" }}>
        <AboutusMeraDriver />
      </div>

      {/* stand quality */}
      <div className="row aboutclient">
        <div className="col-lg-6 p-0">
          <img src="/happy-car.png" alt="" className="stand-quality-left" />
        </div>
        <div className="col-lg-6 p-0 stand-quality-right">
          <div className="stand-quality-right-heading">
            <h1 className="">We are stand for quality</h1>
          </div>

          <div className="mt-4 p-3 stand-quality-right-para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      {/* Meet The Executive team */}
      <div className="mt-5">
        <div className="executive-team">
          <h1 className="text-center">Meet the Executive Teams</h1>
        </div>

        <div className="d-flex justify-content-center ">
          <div className="row mt-5 executive-team-shaddow ">
            <div className="col-lg-6">
              <div className="executive-team-left">
                <img src="/Ellipse.png" alt="ddd" className="" />
                <div className="mt-3 executive-team-left-name">
                  <h5 className="text-center">Mr. Mahendra Swain</h5>
                  <p>(Founder & Managing Director)</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="executive-team-right">
                <p>
                  <span className="">Mr. Mahendra Swain</span>(Founder & Managing Director) is a
                  recognized and accomplished entrepreneur of M S Infraengineers
                  Pvt. Ltd. established in 1976. Mr.Swain is instrumental in the
                  growth of his companies. He leads his companie’s goals to
                  provide excellent service through quality work performed with
                  integrity. His beliefs are based on the confidence of hiring
                  great people; challenging them to excel; and maintaining a
                  laser focus on the needs of the clients. Mr.Swain possesses
                  over thirty-seveen years of diversified experience in civil
                  and structural engineering.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center ">
          <div className="row mt-2 executive-team-shaddow shaddwo-tile">
            <div className="col-lg-6 d-flex justify-content-center align-items-center ">
              <div className="executive-team-right">
                <p>
                <span className="">Mr. Mahendra Swain</span>(Founder & Managing Director) is a
                  recognized and accomplished entrepreneur of M S Infraengineers
                  Pvt. Ltd. established in 1976. Mr.Swain is instrumental in the
                  growth of his companies. He leads his companie’s goals to
                  provide excellent service through quality work performed with
                  integrity. His beliefs are based on the confidence of hiring
                  great people; challenging them to excel; and maintaining a
                  laser focus on the needs of the clients. Mr.Swain possesses
                  over thirty-seveen years of diversified experience in civil
                  and structural engineering.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="executive-team-left">
                <img src="/Ellipse.png" alt="ddd" className="" />
                <div className="mt-3 executive-team-left-name">
                  <h5 className="text-center">Mr. Mahendra Swain</h5>
                  <p>(Founder & Managing Director)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center ">
          <div className="row mt-2 executive-team-shaddow">
            <div className="col-lg-6">
              <div className="executive-team-left">
                <img src="/Ellipse.png" alt="ddd" className="" />
                <div className="mt-3 executive-team-left-name">
                  <h5 className="text-center">Mr. Mahendra Swain</h5>
                  <p>(Founder & Managing Director)</p>
                </div>
              </div>
            </div> 
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="executive-team-right">
                <p>
                <span className="">Mr. Mahendra Swain</span>(Founder & Managing Director) is a
                  recognized and accomplished entrepreneur of M S Infraengineers
                  Pvt. Ltd. established in 1976. Mr.Swain is instrumental in the
                  growth of his companies. He leads his companie’s goals to
                  provide excellent service through quality work performed with
                  integrity. His beliefs are based on the confidence of hiring
                  great people; challenging them to excel; and maintaining a
                  laser focus on the needs of the clients. Mr.Swain possesses
                  over thirty-seveen years of diversified experience in civil
                  and structural engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feel Journey */}
      <div className="feel-jou-exit">
      <FeelJourney />
      </div>
      {/* Slider */}
      <Slider />
      {/* Onlien store */}
      <div className="online-store"><OnlineStore /></div>
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default AboutusPage;
