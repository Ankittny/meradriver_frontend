"use client";
import React, { useState, useEffect } from "react";
import "../../styles/login.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { driverRegister } from "@/redux/Action/auth";
import Swal from "sweetalert2"; // SweetAlert for feedback
import { Grid, TextField } from "@material-ui/core";
import { Button } from "@mui/material";
import Image from "next/image";
import Loader from "../Loader";

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
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { success, error, loading } = useSelector((state) => state.driverRegister);

  useEffect(() => {
    // Simulate loading state for initial load
    const timeout = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await dispatch(driverRegister(values));
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: response?.message &&  "Our team will connect shortly.",
        confirmButtonText: "OK",
      });
      resetForm(); // Reset form fields after success
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.message || "An error occurred. Please try again.",
        confirmButtonText: "OK",
      });
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className="login">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <Image
                src="/MERA-DRIVER.png"
                alt="Logo"
                className="mt-4"
                width={170}
                height={50}
                priority
              />
            </div>

            <div className="login-right">
              <div className="text-center py-3">
                <h1 className="login-right-heading">Sign Up</h1>
                <p className="login-right-subheading">
                  Let’s get you all set up so you can access your personal
                  account.
                </p>
              </div>

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
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
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

                      <Grid item xs={12} md={6}>
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

                      <Grid item xs={12} md={6}>
                        <Field
                          as={TextField}
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          autoComplete="mobile"
                          type="text"
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

                      <Grid item xs={12} md={6}>
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
                          color="primary"
                          className="loginButton"
                          disabled={loading}
                        >
                          {loading ? "Submitting..." : "Sign Up"}
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
