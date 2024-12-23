import React from 'react'
import Image from 'next/image'
import "../styles/onlinestore.css";

const OnlineStore = () => {
  return (
    <div className="online-store mt-5" >
      <div className="online-text container d-sm-none d-md-block d-none d-sm-block">
        <h1 className=" mb-5 fw-normal">GET FREE <span className="fw-bold">MERA DRIVER APP</span>  ON ONLINE STORE</h1>
      </div>

      <div className="online-car-drive d-sm-none d-md-block d-none d-sm-block">
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

      <div className=" d-md-none d-xl-none d-xxl-block d-lg-block d-lg-none d-xl-block">
        <div className="online-text">
          <h1 className=" mb-5 fw-normal text-center">GET FREE <span className="fw-bold">MERA DRIVER APP</span>  ON ONLINE STORE</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12  text-center gap-4 htp">
              <div className="google-idea mb-4">
                <img src={"/google-play.png"} width={180} alt="dd6" />
              </div>
              <div className="google-idea">
                <img src={"/app-store.png"} width={180} alt="dd7" />
              </div>
            </div>

            <div className="online-car-drive mt-5">
              <div className="row">
                <div className="d-flex gap-5">
                  <div className="driver-now  pt-5 text-center mx-2">DOWNLOAD <br />
                    MERA DRIVER APP NOW</div>
                  <div className="mobile-center " >
                    <img src={"/mobile.png"} alt="dd7" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnlineStore
