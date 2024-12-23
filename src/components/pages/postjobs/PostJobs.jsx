
"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyDriver } from "@/redux/Action/VerifyDriver";
import { Divider, Button } from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { IoLocationOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import "../../../styles/postjobs.css";

const PostJobs = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { jobs, loading, error } = useSelector((state) => state.verifyDriver);

  useEffect(() => {
    dispatch(verifyDriver());
  }, [dispatch]);

   // Helper to mask mobile number
   const maskMobile = (number) => {
    if (number && number.length >= 4) {
      return `XXXX-XXXX-${number.slice(-4)}`;
    }
    return "XXXX-XXXX-XXXX";
  };

  // Helper to mask email
  const maskEmail = (email) => {
    if (email) {
      const [name, domain] = email.split("@");
      const maskedName = name.slice(0, 2) + "***";
      return `${maskedName}@${domain}`;
    }
    return "******@email.com";
  };

  const handleDetailsClick = (id) => {
    router.push(`/postjobs/${id}`); // Navigate to the details page with the job id
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div>
      <div className="pricingpage">
        <div className="post1-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <h1 className="post1-heading">Post Job</h1>
              </div>
              <div className="col-lg-7">
                <img
                  src="/abouttopcar.png"
                  alt="Top Image"
                  className="post1-top-right-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="post1-title" style={{ marginTop: "195px" }}>
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3">
              <div className="post1-heading-left">
                <p>All Filter</p>
                <Divider className="mt-2" />
                <p>Experience</p>
                <div className="salary">
                  <p>
                    <strong>Salary</strong>
                  </p>
                  <div className="flex">
                    <input type="checkbox" />
                    <p>
                      0-3 lack <span>(110)</span>
                    </p>
                  </div>
                  <Button>View More</Button>
                </div>
              </div>
            </div>

            {/* Jobs Section */}
            <div className="col-lg-9">
              <div className="row">
                {Array.isArray(jobs) && jobs.length > 0 ? (
                  jobs.map((job, index) => (
                    <div className="col-lg-6 mb-4" key={index}>
                <div className="job-card">
                  {/* Static Left Image */}
                  <div className="job-card-image">
                    <img src="https://media.istockphoto.com/id/2158807978/photo/successful-african-american-ceo-happily-driving-new-corporate-car-in-summer.jpg?s=1024x1024&w=is&k=20&c=6gw-MMVCyk62RTi7ECN-BYYFTr5XmW7KOS56msmDEEI=" alt="Job" />
                  </div>
                  {/* Right Section */}
                  <div className="job-card-details">
                    <h4>{job.first_name || "First Name"} {job.last_name || "Last Name"}</h4>
                    <p>📞 {maskMobile(job.contact_number)}</p>
                    <p>✉ {maskEmail(job.email)}</p>
                    <button
                            className="apply-button"
                            onClick={() => handleDetailsClick(job.id)} // Pass job ID
                          >
                            Details
                          </button>
                  </div>
                </div>
              </div>
                  ))
                ) : (
                  <p>No jobs available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostJobs;



