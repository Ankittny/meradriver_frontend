"use client";
import React from "react";
import "../../styles/login.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { driverRegister } from "@/redux/Action/auth";
import Swal from "sweetalert2"; // Import SweetAlert
import { Grid, TextField } from "@material-ui/core";
import { Button } from "@mui/material";


// Validation Schema
const validationSchema = Yup.object({
  full_name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Name can only contain alphabets and spaces")
    .min(3, "Name must contain at least 3 characters")
    .required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Mobile number is required"),
  address: Yup.string()
    .min(10, "Address must be at least 10 characters")
    .required("Address is required"),
});

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(driverRegister(values)).then(() => {
      // Show SweetAlert success popup
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "Our team will be connect sortly..",
        confirmButtonText: "OK",
      });

      // Reset the form fields
      resetForm();
    });
  };

  return (
    <div className="login">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="login-left text-center">
              <img src="/MERA-DRIVER.png" alt="Logo" className="mt-4" />
              {/* <img src="/register.png" alt="Register" className="w-100 mt-3" /> */}
            </div>

            {/* Right Side */}
            <div className="login-right">
              <div className="text-center py-3">
                <h1 className="login-right-heading">Sign Up</h1>
                <p className="login-right-subheading">
                  Let’s get you all set up so you can access your personal
                  account.
                </p>
              </div>

              {/* Form Section */}
              <Formik
                initialValues={{
                  full_name: "",
                  email: "",
                  mobile: "",
                  address: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ handleChange, handleSubmit, values }) => (
                  <Form
                    onSubmit={handleSubmit}
                    className="form-container text-left"
                    noValidate
                  >
                    <Grid container spacing={2} className="form-container">
                      <Grid item xs={6}>
                        <Field
                          as={TextField}
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          autoComplete="full_name"
                          type="text"
                          id="full_name"
                          name="full_name"
                          value={values.full_name}
                          onChange={handleChange}
                          label="Full Name"
                        />
                        <ErrorMessage
                          name="full_name"
                          component="div"
                          className="error"
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <Field
                          as={TextField}
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          autoComplete="email"
                          type="email"
                          id="email"
                          name="email"
                          label="Email Id"
                          value={values.email}
                          onChange={handleChange}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="error"
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <Field
                          as={TextField}
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          autoComplete="mobile"
                          type="number"
                          id="mobile"
                          name="mobile"
                          label="Mobile Number"
                          value={values.mobile}
                          onChange={handleChange}
                        />
                        <ErrorMessage
                          name="mobile"
                          component="div"
                          className="error"
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <Field
                          as={TextField}
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          autoComplete="address"
                          type="text"
                          id="address"
                          name="address"
                          label="Address"
                          
                          value={values.address}
                          onChange={handleChange}
                        />
                        <ErrorMessage
                          name="address"
                          component="div"
                          className="error"
                        />
                      </Grid>

                      <Grid item xs={12} className="text-center mt-2 mb-2">
                        <Button
                          type="submit"
                          variant="contained"
                          className="loginButton"
                        >
                          Sign Up
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>

              <p className="mt-4 text-center">
                Already have an account?{" "}
                <a href="/login" className="cursor">
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
