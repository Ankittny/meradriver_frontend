"use client";
import React, { useEffect, useState } from "react";
import "../../../styles/postjobs.scss";
import { IoStar } from "react-icons/io5";
import { PiToolbox } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import FeelJourney from "../../FeelJourney";
import Slider from "../../Slider";
import OnlineStore from "../../OnlineStore";
import Footer from "../../Footer";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { driverDetail } from "@/redux/Action/DriverDetail";

const PostJobDetails = ({ params }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [id, setId] = useState();

  const { Details, loading, error } = useSelector(
    (state) => state.driverDetail
  );

  // console.log("DETAHJDKNDK",Details)

  useEffect(() => {
    const url = window.location.href; // Current URL
    const idFromUrl = url.split("/").pop(); // Extract last part of URL
    setId(idFromUrl);
  }, []);

  // Fetch data when 'id' is set
  useEffect(() => {
    if (id) {
      dispatch(driverDetail(id));
    }
  }, [id, dispatch]);

  return (
    <div>
      <div className="pricingpage">
        <div className="post-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 ">
                <h1 className="post-heading">Post Job</h1>
              </div>
              <div className="col-lg-7">
                <div className="">
                  <img
                    src="/abouttopcar.png"
                    alt=""
                    className="post-top-right-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="post-title" style={{ marginTop: "195px" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="all-main-post bg-white p-4">
                {id ? <p>Job ID: {id}</p> : <p>Loading Job ID...</p>}
                <h4 className="fw-bold">Driver Trainer</h4>
                <div className="fleet-post d-flex gap-2">
                  <p>Everest Fleet</p>
                  <span>
                    <IoStar /> &nbsp; 3.5 | 113 Reviews
                  </span>
                </div>
                <div className="fleet-post d-flex gap-3">
                  <p>
                    <PiToolbox />1 - 2 years
                  </p>
                  <span>Rs | 2.75-3.5 Lacs P.A.</span>
                </div>
                <div className="fleet-post d-flex justify-content-between gap-3">
                  <p>
                    <IoLocationOutline />
                    New Delhi( Uttam Nagar )
                  </p>
                  <span>Send me jobs like this</span>
                </div>
                <hr />
                <div className="fleet-post d-flex justify-content-between  gap-3">
                  <p>Posted: <strong>21 days ago </strong>| Openings: <strong>1</strong> | Applicants: <strong>94</strong> </p>
                  <div className="d-flex gap-3">
                  <button className="book-button">Register To APPLY</button>
                    <button className="book-button">APPLY</button>
                  </div>
                </div>
              </div>

              <div className="job-title p-4 mt-4 bg-white">
                {/* <h3>Job description</h3>
                <h4 className="mt-3">Role & responsibilities</h4>
                <p>
                  Need to Teach driving and Uber Application use to newly hired
                  Drivers
                </p>
                <h4>Preferred candidate profile</h4>
                <p>Driving Instructor</p>
                <h4>Perks and benefits</h4>
                <p>Good salary Hike</p> */}
                <div className="role-post mt-5">
                  {/* <p>
                    <strong>Role: </strong> Teaching & Training - Other
                  </p>
                  <p>
                    <strong>Industry Type: : </strong> Facility Management
                    Services
                  </p>
                  <p>
                    <strong>Department: </strong> Teaching & Training
                  </p> */}
                  <p>
                    <strong>Employment Type: </strong> Full Time, Permanent
                  </p>
                  {/* <p>
                    <strong>Role Category: </strong> Teaching & Training - Other
                  </p> */}
                  {/* <h4 className="mt-3">Education</h4>
                  <p>
                    <strong>UG:</strong> Graduation Not Required
                  </p> */}
                  <h4 className="mt-3">Key Skills</h4>
                  <p>
                    Skills highlighted with ‘
                    <IoStar />‘ are preferred keyskills
                  </p>
                  {/* <div className="d-flex gap-3">
                    <button className="book-button">
                      <IoStar /> &nbsp; driver
                    </button>
                    <button className="book-button  ">
                      <IoStar /> &nbsp; Driving
                    </button>
                  </div> */}
                </div>
                <hr />
                {/* <div className="social-icon m-lg-1 gap-4">
                  <FacebookIcon color={"primary"} />
                  <XIcon />
                  <LinkedInIcon color={"primary"} />
                </div> */}
              </div>
              <div className="company-title p-4 mt-4 bg-white mb-5">
                <h4>About company</h4>
                <p>
                  Transforming Indias shared mobility scene, one journey at a
                  time. Our fleet, packed with 16,500+ cars, fuels the heart of
                  seven bustling metro cities in seamless collaboration with
                  premier taxi aggregators...
                </p>
                <h4>Company Info</h4>
                <p>
                  <strong>Address: </strong> Everest Fleet, New Delhi
                </p>
              </div>
              {/* <div className="beware-title p-4 mt-4 bg-white">
                <h4>Beware of imposters!</h4>
                <p>
                  Naukri.com does not promise a job or an interview in exchange
                  of money. Fraudsters may ask you to pay in the pretext of
                  registration fee...
                </p>
              </div> */}

              {/* Similar jobs */}
              {/* <div className="similar-title mt-4">
                <h4> Similar jobs</h4>
                <div className="similar-post p-4 mt-4 bg-white">
                  <h4>Driving Instructor</h4>
                  <p>
                    <IoLocationOutline />
                    Bengaluru(Singasandra)
                  </p>
                </div>
              </div> */}
            </div>
            <div className="col-lg-4">
              <div className="all-main-post bg-white p-4">
                <h4>Jobs you might be interested in</h4>
                <div className="fleet-post d-flex gap-2">
                  <h6 className="mt-2">
                    Driver (car + Trucks) For THE Company - DELHI NCR - LMV OR
                    HMV Licence
                  </h6>
                </div>
                <div>
                  <p>Shelendra Singh</p>
                </div>
                <div className="fleet-post d-flex justify-content-between gap-3">
                  <p>
                    <IoLocationOutline />
                    New Delhi( Uttam Nagar )
                  </p>

                  <p>Posted 27 Days Ago</p>
                </div>
                <hr />


                <div className="fleet-post d-flex gap-2">
                  <h6 className="mt-2">
                    Driver (car + Trucks) For THE Company - DELHI NCR - LMV OR
                    HMV Licence
                  </h6>
                </div>
                <div>
                  <p>Shelendra Singh</p>
                </div>
                <div className="fleet-post d-flex justify-content-between gap-3">
                  <p>
                    <IoLocationOutline />
                    New Delhi( Uttam Nagar )
                  </p>

                  <p>Posted 27 Days Ago</p>
                </div>
                <hr />


                <div className="fleet-post d-flex gap-2">
                  <h6 className="mt-2">
                    Driver (car + Trucks) For THE Company - DELHI NCR - LMV OR
                    HMV Licence
                  </h6>
                </div>
                <div>
                  <p>Rahul Singh</p>
                </div>
                <div className="fleet-post d-flex justify-content-between gap-3">
                  <p>
                    <IoLocationOutline />
                    New Delhi( Uttam Nagar )
                  </p>

                  <p>Posted 27 Days Ago</p>
                </div>
                <hr />



                <div className="fleet-post d-flex gap-2">
                  <h6 className="mt-2">
                    Driver (car + Trucks) For THE Company - DELHI NCR - LMV OR
                    HMV Licence
                  </h6>
                </div>
                <div>
                  <p>Ankit Singh</p>
                </div>
                <div className="fleet-post d-flex justify-content-between gap-3">
                  <p>
                    <IoLocationOutline />
                    New Delhi( Uttam Nagar )
                  </p>

                  <p>Posted 27 Days Ago</p>
                </div>
                <hr />
              </div>
            </div>
          </div>

        </div>
      </div>
      <FeelJourney />
      <Slider />
      <OnlineStore />
      <Footer />
    </div>
  );
};

export default PostJobDetails;
