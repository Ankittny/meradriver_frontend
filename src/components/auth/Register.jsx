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
    <div className="row login">
      <div className="col-6">
        <div className="login-left">
          <img src={"/MERA-DRIVER.png"} alt="" className="mt-4" />
          <div>
            <img src={"/register.png"} alt="" className="w-100" />
          </div>
        </div>
      </div>

      <div className="col-6">
        <div className="login-right">
          <div className=" p-5">
            <h1 className="login-right-heading">Sign Up</h1>
            <p className="login-right-subheading">
              Let’s get you all set up so you can access your personal account.
            </p>
          </div>

          <div className="loginwithother">
            <img src={"/google.png"} alt="Google Login" />
            <p className="m-0">Login with Google</p>
          </div>
          <div className="loginwithother mt-2">
            <img src={"/facebook.png"} alt="Facebook Login" />
            <p className="m-0">Login with Facebook</p>
          </div>

          <Divider className="mt-4">OR</Divider>

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
                      id="firstName"
                      label="First Name"
                      name="firstName"
                      autoComplete="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      helperText={
                        <ErrorMessage
                          name="firstName"
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
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      helperText={
                        <ErrorMessage
                          name="lastName"
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
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={handleChange}
                      helperText={
                        <ErrorMessage
                          name="email"
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
                      id="password"
                      label="Password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      helperText={
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="error"
                        />
                      }
                    />
                  </Grid>
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
  );
};

export default Register;