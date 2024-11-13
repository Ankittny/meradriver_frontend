"use client"
import React from 'react'
import "../../../styles/postjobs.scss"
import { IoStar } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { PiToolbox } from "react-icons/pi";
import FeelJourney from '../../FeelJourney';
import Slider from '../../Slider';
import OnlineStore from '../../OnlineStore';
import Footer from '../../Footer';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { Divider } from '@mui/material';
import Button from '@mui/material/Button';


const PostJobs = () => {
    return (
        <div>
            <div className="pricingpage">
                <div className="post1-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-5 ">
                                <h1 className="post1-heading">Post Job</h1>
                            </div>
                            <div className="col-7">
                                <div className="">
                                    <img
                                        src="/abouttopcar.png"
                                        alt=""
                                        className="post1-top-right-image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="post1-title " style={{ marginTop: "195px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="post1-heading-left">
                               <div className='filter'>
                                <p>All Filter</p>
                               </div>
                               <Divider className='mt-2'/>
                               {/*  */}
                               <div className='experience'>
                                  <p>Experience</p>
                                  <div></div>
                               </div>

                               {/*  Salary*/}
                               <div className='salary'>
                                  <p><strong>Salary</strong></p>
                                  
                                  <div className='flex'>
                                    <input type='checkbox' />
                                    <p>0-3 lack <span>(110)</span></p>
                                  </div> 
                                  <Button>View More</Button>
                               </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="post1-headings p-4">
                                        <div className="all-main-post">
                                            <h4>Driver</h4>
                                            <div className="fleet-post d-flex gap-2">
                                                <p>Unilode Aviation Solutions</p>
                                            </div>
                                            <div className="fleet-post d-flex gap-3">
                                                <p>
                                                    <PiToolbox />  1 - 2 years &nbsp; Rs Not disclosed &nbsp;<IoLocationOutline />
                                                    Kolkata, Mumbai, N…
                                                </p>
                                            </div>
                                            <div className="fleet-post d-flex justify-content-between gap-3">
                                                <p>
                                                    Valid Driver s License or CDL-A (required). Driving
                                                    experience. Meet all stan…
                                                </p>
                                            </div>
                                            <div className=''>
                                                <ul className="d-flex bang-title gap-3 p-0 "><li>Training</li><li>Driving</li><li>Instructing</li></ul>
                                            </div>
                                            <div className=' dd d-flex justify-content-between'>
                                                <p>10 Days Ago</p>
                                                <span><BookmarkBorderOutlinedIcon fontSize={'medium'}/> Save</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="post1-headings p-4">
                                        <div className="all-main-post">
                                            <h4>Driver</h4>
                                            <div className="fleet-post d-flex gap-2">
                                                <p>Unilode Aviation Solutions</p>
                                            </div>
                                            <div className="fleet-post d-flex gap-3">
                                                <p>
                                                    <PiToolbox />  1 - 2 years &nbsp; Rs Not disclosed &nbsp;<IoLocationOutline />
                                                    Kolkata, Mumbai, N…
                                                </p>
                                            </div>
                                            <div className="fleet-post d-flex justify-content-between gap-3">
                                                <p>
                                                    Valid Driver s License or CDL-A (required). Driving
                                                    experience. Meet all stan…
                                                </p>
                                            </div>
                                            <div className=''>
                                                <ul className="d-flex bang-title gap-3 p-0 "><li>Training</li><li>Driving</li><li>Instructing</li></ul>
                                            </div>
                                            <div className=' dd d-flex justify-content-between'>
                                                <p>10 Days Ago</p>
                                                <span><BookmarkBorderOutlinedIcon fontSize={'medium'}/> Save</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="post1-headings p-4">
                                        <div className="all-main-post">
                                            <h4>Driver</h4>
                                            <div className="fleet-post d-flex gap-2">
                                                <p>Unilode Aviation Solutions</p>
                                            </div>
                                            <div className="fleet-post d-flex gap-3">
                                                <p>
                                                    <PiToolbox />  1 - 2 years &nbsp; Rs Not disclosed &nbsp;<IoLocationOutline />
                                                    Kolkata, Mumbai, N…
                                                </p>
                                            </div>
                                            <div className="fleet-post d-flex justify-content-between gap-3">
                                                <p>
                                                    Valid Driver s License or CDL-A (required). Driving
                                                    experience. Meet all stan…
                                                </p>
                                            </div>
                                            <div className=''>
                                                <ul className="d-flex bang-title gap-3 p-0 "><li>Training</li><li>Driving</li><li>Instructing</li></ul>
                                            </div>
                                            <div className=' dd d-flex justify-content-between'>
                                                <p>10 Days Ago</p>
                                                <span><BookmarkBorderOutlinedIcon fontSize={'medium'}/> Save</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feel-jou-exit">
                <FeelJourney />
            </div>
            <Slider />
            <OnlineStore />
            <Footer />
        </div>
    )
}

export default PostJobs
