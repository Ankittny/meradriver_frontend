import React from "react";

const AboutusMeraDriver = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">  
          <div className="col-6">
              <div className="aboutus-left">
               <h1 className="aboutus-left-heading">About Us Mera Driver</h1>
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
          <div className="col-6">
            <div className="aboutus-right">
                <img src={'/aboutus-right.png'} alt="" className="aboutus-right-image"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutusMeraDriver;
