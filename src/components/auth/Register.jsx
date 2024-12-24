"use client";
import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { driverRegister } from "@/redux/Action/auth";
import Swal from "sweetalert2";
import { Grid, TextField, Button, Typography, Box, CircularProgress } from "@mui/material";
import Image from "next/image";
import Loader from "../Loader";
import Link from "next/link";
import "../../styles/register.css";

// Validation Schema
const validationSchema = Yup.object({
  full_name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Only alphabets and spaces are allowed")
    .min(3, "Full Name must be at least 3 characters")
    .required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  mobile: Yup.string()
    .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits")
    .required("Mobile number is required"),
  address: Yup.string()
    .min(10, "Address must be at least 10 characters long")
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
        text: response?.message || "Our team will connect shortly.",
        confirmButtonText: "OK",
      });
      resetForm();
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
                <Typography variant="h4">Sign Up</Typography>
                <Typography variant="subtitle1" color="textSecondary" className="tyrpo-text mt-3 mb-5">
                  Let’s get you all set up so you can access your personal account.
                </Typography>
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
                  <Form onSubmit={handleSubmit} className="form-container text-left" noValidate>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Field
                          as={TextField}
                          variant="outlined"
                          fullWidth
                          id="full_name"
                          name="full_name"
                          label="Full Name"
                          value={values.full_name}
                          onChange={handleChange}
                          error={Boolean(values.full_name)}
                        />
                        <ErrorMessage name="full_name" component="div" className="error" />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Field
                          as={TextField}
                          variant="outlined"
                          fullWidth
                          id="email"
                          name="email"
                          label="Email"
                          type="email"
                          value={values.email}
                          onChange={handleChange}
                        />
                        <ErrorMessage name="email" component="div" className="error" />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Field
                          as={TextField}
                          variant="outlined"
                          fullWidth
                          id="mobile"
                          name="mobile"
                          label="Mobile Number"
                          type="text"
                          value={values.mobile}
                          onChange={handleChange}
                        />
                        <ErrorMessage name="mobile" component="div" className="error" />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Field
                          as={TextField}
                          variant="outlined"
                          fullWidth
                          id="address"
                          name="address"
                          label="Address"
                          type="text"
                          value={values.address}
                          onChange={handleChange}
                        />
                        <ErrorMessage name="address" component="div" className="error" />
                      </Grid>

                      <Grid item xs={12} className="text-center">
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          disabled={loading}
                          fullWidth
                          className="btn-secondry-success"
                        >
                          {loading ? <CircularProgress size={24} /> : "Sign Up"}
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>

              <Typography align="center" variant="body2" className="mt-4 mb-4">
                Already have an account?{" "}
                <Link href="/login" className="cursor">
                  Login
                </Link>
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
