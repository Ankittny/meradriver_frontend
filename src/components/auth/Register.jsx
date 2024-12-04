"use client";
import React, { useState } from "react";
import "../../styles/login.scss";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { InputAdornment, IconButton, Link, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Navbar from "../Navbar";
import Footer from "../Footer";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email"
    )
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login">
      <Navbar/>
      <div className="container ">
        <div className="row ">
          <div className="col-lg-12">
            <div className="login-left text-center">
              <img src={"/MERA-DRIVER.png"} alt="" className="mt-4" />
              {/* <div>
                <img src={"/register.png"} alt="" className="w-100" />
              </div> */}
            </div>

            <div className="login-right">
              <div className="  text-center py-3">
                <h1 className="login-right-heading">Sign Up</h1>
                <p className="login-right-subheading">
                  Let’s get you all set up so you can access your personal account.
                </p>
              </div>



              {/* <Divider className="mt-4">OR</Divider> */}

              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  handleSubmit(values);
                }}
              >
                {({ values, handleChange, handleSubmit }) => (
                  <Form onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={2} className="form-container">
                      <Grid item xs={6}>
                        <Field
                          as={TextField}
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          id="Full Name"
                          label="Full Name"
                          name="FullName"
                          autoComplete="FullName"
                          value={values.FullName}
                          onChange={handleChange}
                          helperText={
                            <ErrorMessage
                              name="FullName"
                              component="div"
                              className="error"
                            />
                          }
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Field
                          as={TextField}
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          id="Email"
                          label="Email"
                          name="Email"
                          autoComplete="Email"
                          value={values.text}
                          onChange={handleChange}
                          helperText={
                            <ErrorMessage
                              name="Email"
                              component="div"
                              className="error"
                            />
                          }
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <Field
                          as={TextField}
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          id="Mobile"
                          label="Mobile Number"
                          name="Mobile"
                          autoComplete="Mobile"
                          value={values.Mobile}
                          onChange={handleChange}
                          helperText={
                            <ErrorMessage
                              name="Mobile"
                              component="div"
                              className="error"
                            />
                          }
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Field
                          as={TextField}
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          id="Address"
                          label="Address"
                          name="Address"
                          autoComplete="Address"
                          value={values.Address}
                          onChange={handleChange}
                          helperText={
                            <ErrorMessage
                              name="Address"
                              component="div"
                              className="error"
                            />
                          }
                        />
                      </Grid>
                      {/* <Grid item xs={6}>
                        <Field
                          as={TextField}
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          id="Address"
                          label="Address"
                          name="Address"
                          // type={showPassword ? "text" : "text"}
                          value={values.text}
                          onChange={handleChange}
                          InputProps={{
                            endAdornment: (
                              // <InputAdornment position="end">
                              //   <IconButton
                              //     aria-label="toggle password visibility"
                              //     onClick={() => setShowPassword(!showPassword)}
                              //   >
                              //     {showPassword ? <VisibilityOff /> : <Visibility />}
                              //   </IconButton>
                              // </InputAdornment>
                            ),
                          }}
                          helperText={
                            <ErrorMessage
                              name="Address"
                              component="div"
                              className="error"
                            />
                          }
                        />
                      </Grid> */}
                      <Grid item xs={12} className="text-center mt-2 mb-2">
                        <Button type="submit" variant="contained" className="loginButton">
                          Sign Up
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>

              <Grid container>
                <Grid item xs>
                  <p className="mt-4 text-center">
                    Already have an account?{" "}
                    <span>
                      <Link href="/login" className="curser">Login</Link>
                    </span>
                  </p>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Register;
