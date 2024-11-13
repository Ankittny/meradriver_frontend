import React from "react";

const AboutusMeraDriver = () => {
  return (
    <>
    <div className="about-us-title">
      <div className="container">
        <div className="row">  
          <div className="col-lg-6">
              <div className="aboutus-left mt-5">
               <h1 className="aboutus-left-heading text-center">About Us Mera Driver</h1>
              </div>

              <div className="mt-5">
                 <ul className="aboutus-left-ul">
                    <li> An on-line portal which provides career resources and employment information to anyone and everyone looking for a driver or a driver’s job.</li>

                    <li>
                    First online company which took the initiative of promoting the online driver concept in India.
                    </li>

                    <li>
                    Initiative taken by an experienced team, thereby understanding the need & importance of drivers in our society.
                    </li>
                    <li>Through this platform, social value and local opportunity for drivers can be increased.</li>
                 </ul>
              </div>
          </div>
          <div className="col-lg-6">
            <div className="aboutus-right">
                <img src={'/aboutus-right.png'} alt="" className="aboutus-right-image"/>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AboutusMeraDriver;
