
"use client";

import React, { useEffect, useState } from "react";
import "../../../styles/postjobs.scss";
import { IoStar, IoLocationOutline } from "react-icons/io5";
import { PiToolbox } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { driverDetail } from "@/redux/Action/DriverDetail";
import { hireDriver } from "@/redux/Action/HireDriver";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import FeelJourney from "../../FeelJourney";
import Slider from "../../Slider";
import OnlineStore from "../../OnlineStore";
import Footer from "../../Footer";

const PostJobDetails = ({ params }) => {
  const dispatch = useDispatch();
  const [id, setId] = useState(null);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile_number, setMobile] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const { Details, loading, error } = useSelector(
    (state) => state.driverDetail
  );

  const { success } = useSelector((state) => state.hireDriver);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const url = window.location.href;
    const idFromUrl = url.split("/").pop();
    setId(idFromUrl);
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(driverDetail(id));
    }
  }, [id, dispatch]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setName("");
    setAddress("");
    setMobile("");
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleHireNow = (e) => {
    e.preventDefault();
    const driver_id = id;
    // Basic validation
    if (!name || !address || !mobile_number) {
      setSnackbarMessage("Please fill out all fields.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    if (!/^\d{10}$/.test(mobile_number)) {
      setSnackbarMessage("Please enter a valid mobile number.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("mobile_number", mobile_number);
    formData.append("driver_id", driver_id);

    dispatch(hireDriver(formData))
      .then(() => {
        setSnackbarMessage("Hire request submitted successfully!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        handleClose();
      })
      .catch(() => {
        setSnackbarMessage("Failed to submit hire request. Please try again.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      });
  };

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div>
      <div className="pricingpage">
        <div className="post-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <h1 className="post-heading">Post Job</h1>
              </div>
              <div className="col-lg-7">
                <img
                  src="/abouttopcar.png"
                  alt="Post Job Top"
                  className="post-top-right-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="post-title" style={{ marginTop: "195px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {Details && Details.id ? (
                <div>
                  <div className="all-main-post bg-white p-4">
                    <h4 className="fw-bold">
                      {Details.first_name || "Driver Trainer"} <span>{Details.last_name || "Driver Trainer"}</span>
                    </h4>
                    <div className="fleet-post d-flex gap-2">
                      <IoStar /> &nbsp; {Details.rating || "3.5"} |{" "}
                      {Details.reviews || "113 Reviews"}
                    </div>
                    <div className="fleet-post d-flex gap-3">
                      <p>
                        <PiToolbox /> {Details.experience || "1 - 2 years"}
                      </p>
                      <span>{Details.salary || "Rs | 2.75-3.5 Lacs P.A."}</span>
                    </div>
                    <div className="fleet-post d-flex justify-content-between gap-3">
                      <p>
                        <IoLocationOutline />{" "}
                        {Details.address || "New Delhi (Uttam Nagar)"}
                      </p>
                      <span>Send me jobs like this</span>
                    </div>
                    <hr />
                    <div className="fleet-post d-flex justify-content-between gap-3">
                      <p>
                        Posted: <strong>{Details.postedDays || "21 days ago"}</strong> | Openings:{" "}
                        <strong>{Details.openings || "1"}</strong> | Applicants:{" "}
                        <strong>{Details.applicants || "94"}</strong>
                      </p>
                      <div className="d-flex gap-3">
                        <button
                          className="book-button"
                          onClick={handleClickOpen}
                        >
                          Hire Now
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Dialog Box */}
                  <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                    className="custom-dialog"
                  >
                    <DialogTitle id="responsive-dialog-title" className="dialog-title">
                      {"Enter Your Details"}
                    </DialogTitle>
                    <DialogContent className="dialog-content">
                      <DialogContentText>
                        Please provide your details to proceed with the hire request.
                      </DialogContentText>
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        name="name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="dialog-input"
                      />
                      <TextField
                        margin="dense"
                        id="address"
                        label="Address"
                        type="text"
                        fullWidth
                        name="address"
                        variant="standard"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="dialog-input"
                      />
                      <TextField
                        margin="dense"
                        id="mobile-number"
                        label="Mobile Number"
                        type="text"
                        fullWidth
                        name="mobile-number"
                        variant="standard"
                        value={mobile_number}
                        onChange={(e) => setMobile(e.target.value)}
                        className="dialog-input"
                      />
                    </DialogContent>
                    <DialogActions className="dialog-actions">
                      <Button onClick={handleClose} color="secondary" className="cancel-button">
                        Cancel
                      </Button>
                      <Button
                        onClick={handleHireNow}
                        color="primary"
                        className="submit-button-hire"
                        autoFocus
                      >
                        Submit
                      </Button>
                    </DialogActions>
                  </Dialog>

                  <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={6000}
                    onClose={handleSnackbarClose}
                    anchorOrigin={{ vertical: "top", horizontal: "center", }}
                  >
                    <Alert
                      onClose={handleSnackbarClose}
                      severity="success"
                      variant="filled"
                      sx={{ width: "100%" }}
                    >
                      {snackbarMessage}
                    </Alert>
                  </Snackbar>

                  <div className="job-title p-4 mt-4 bg-white">
                    <h4>Key Skills</h4>
                    <p>Skills highlighted with ‘<IoStar />’ are preferred key skills</p>
                    <p>
                      <strong>Employment Type: </strong> Full Time, Permanent
                    </p>
                    <hr />
                  </div>

                  <div className="company-title p-4 mt-4 bg-white mb-5">
                  <h4>About Company</h4>
                    <p>
                      Transforming India's shared mobility scene, one journey at a time. Our fleet, packed with 16,500+ cars, fuels the heart of seven bustling metro cities in seamless collaboration with premier taxi aggregators...
                    </p>
                    <h4>Company Info</h4>
                    <p>
                      <strong>Address: </strong> {Details.companyAddress || "Everest Fleet, New Delhi"}
                    </p>
                  </div>
                </div>
              ) : (
                <p>No driver details available.</p>
              )}
            </div>

            <div className="col-lg-4">
              <div className="all-main-post bg-white p-4">
                <h4>Jobs you might be interested in</h4>
                {[...Array(3)].map((_, i) => (
                  <div key={i}>
                    <div className="fleet-post d-flex gap-2">
                      <h6 className="mt-2">
                        Driver (Car + Trucks) For THE Company - DELHI NCR - LMV OR
                        HMV Licence
                      </h6>
                    </div>
                    <div>
                      <p>Shelendra Singh</p>
                    </div>
                    <div className="fleet-post d-flex justify-content-between gap-3">
                      <p>
                        <IoLocationOutline /> New Delhi (Uttam Nagar)
                      </p>
                      <p>Posted 27 Days Ago</p>
                    </div>
                    <hr />
                  </div>
                ))}
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
