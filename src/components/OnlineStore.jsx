import React from 'react'
import Image from 'next/image'
import "../styles/onlinestore.scss";

const OnlineStore = () => {
  return (
    <div className="online-store mt-5" >
      <div className="online-text container">
        <h1 className=" mb-5 fw-normal">GET FREE <span className="fw-bold">MERA DRIVER APP</span>  ON ONLINE STORE</h1>
      </div>

      <div className="online-car-drive">
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex gap-5 htp">
              <div className="google-idea">
                <img src={"/google-play.png"} width={250} alt="dd6" />
              </div>
              <div className="google-idea">
                <img src={"/app-store.png"} width={250} alt="dd7" />
              </div>
            </div>
            <div className="col-lg-3">
            </div>
            <div className="col-lg-3">
              <div className="mobile-center position-absolute" >
                <img src={"/mobile.png"} alt="dd7" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default OnlineStore
