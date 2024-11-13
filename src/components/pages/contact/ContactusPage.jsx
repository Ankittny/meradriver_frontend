"use client"
import React from 'react'
import "../../../styles/contactusPage.scss";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import OnlineStore from '../../OnlineStore';
import Footer from '../../Footer';
import Button from '@mui/material/Button';

const ContactusPage = () => {
    return (
        <div>
            <div className="pricingpage">
                <div className="contact-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-5 ">
                                <h1 className="contact-heading">Contact</h1>
                            </div>
                            <div className="col-7">
                                <div className="">
                                    <img
                                        src="/abouttopcar.png"
                                        alt=""
                                        className="contact-top-right-image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-section" style={{ marginTop: "190px" }}>
                <div className="container-fluid">
                    <div className="row py-5">
                        <div className="col-lg-6">
                            <div className="location-trace">
                                <h3>Have Any Questions?</h3>
                                <p>Get in touch to discuss your employee wellbeing needs today. Please
                                    give us a call, drop us an email or fill out the contact form.</p>
                            </div>
                            <div className="add-location">
                                <p className=""> <LocationOnIcon /> T-29,3rd Floor,Okhla Industrial Area,
                                    Phase-2,New Delhi-110020</p>  <br />
                                <p className=""> <EmailIcon /> info@meradriver</p> <br/>
                                <p className=""> <LocalPhoneIcon /> (+91) 880 013 8139</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="contact-hr">Contact With Us!</h3>
                            <form>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group row">
                                            <div className="col-lg-12">
                                                <input type="text" className="form-control" id="inputPassword" placeholder="First Name " />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group row">
                                            <div className="col-lg-12">
                                                <input type="text" className="form-control" id="inputPassword" placeholder="Last Name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group row mt-3">
                                            <div className="col-lg-12">
                                                <input type="text" className="form-control" id="inputPassword" placeholder="Email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group row mt-3">
                                            <div className="col-lg-12">
                                                <input type="digit" className="form-control" id="inputPassword" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group mt-3">
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                    </div>

                                    <div className='col-lg-12 mt-2'>
                                    <Button variant="contained">Submit</Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <OnlineStore />
            <Footer />
        </div>


    )
}

export default ContactusPage
