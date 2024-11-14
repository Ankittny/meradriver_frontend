import React from 'react'
import "../styles/FeelJourney.scss";
import Image from 'next/image';

const FeelJourney = () => {
    return (
        <>
            <div className="journey-image pt-5 d-sm-none d-md-block d-none d-sm-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="journey-title">
                                <h2 className="journey-hexa">Feel your journey with Mera Driver !</h2>
                                <button className="book-button mt-2">Book a driver</button>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="journey-title-listing">
                                <ul className='brand-lisyting'>
                                    <li>Get verified drivers</li>
                                    <li>Make safety a top priority.</li>
                                    <li>Fast and quick process .</li>
                                    <li>Access Mera Driver globally.</li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                        <div className="col-lg-3">
                            <div className="journey-title-image">
                                <img
                                    src={"/driver.png"}
                                    alt="dd1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" pt-5 d-md-none d-xl-none d-xxl-block d-lg-block d-lg-none d-xl-block ">
                <div className="">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="journey-title-image text-center">
                                <img
                                    src={"/driver.png"}
                                    alt="dd1"
                                />
                            </div>
                        </div>
                       
                        <div className="col-lg-12">
                            <div className="journey-title journey-image d-flex px-2 pt-3 gap-3">
                                <div className=''>
                                <h2 className="journey-hexa">Feel your journey with Mera Driver !</h2>
                                <button className="book-button mt-2">Book a driver</button>
                                </div>
                                <div className="journey-title-listing">
                                <ul className='brand-lisyting'>
                                    <li>Get verified drivers</li>
                                    <li>Make safety a top priority.</li>
                                    <li>Fast and quick process .</li>
                                    <li>Access Mera Driver globally.</li>

                                </ul>
                            </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
           
        </>

    )
}

export default FeelJourney