"use client";
import React from "react";
import "../styles/bestdriver.scss";
import Image from "next/image";

const BestDriver = () => {
  return (
    <>
      <div className="bestdriver-background">
        <div className="container ">
          <div className="bestdriver mt-2">
            <h1 className="bestdriver-heading ">
              Best Driver Services For You
            </h1>
          </div>

          <div className="row bestdrive-drivers">
            <div className="col-lg-3" style={{ textAlign: "center" }}>
              <img
                src={"/man1.png"}
                alt="dd"
                className="bestdrive-drivers-image"
              />
              <div className="bestdrive-drivers-type">
                <p className="">PART TIME DRIVER</p>
              </div>
            </div>

            <div className="col-lg-3" style={{ textAlign: "center" }}>
              <img
                src={"/man2.png"}
                alt="dd"
                className="bestdrive-drivers-image"
              />
                <div className="bestdrive-drivers-type">
                <p className="">FULL TIME DRIVER</p>
              </div>
            </div>

            <div className="col-lg-3" style={{ textAlign: "center" }}>
              <img
                src={"/man3.png"}
                alt="dd"
                className="bestdrive-drivers-image"
              />
                <div className="bestdrive-drivers-type">
                <p className="">DRIVER FOR TRIP</p>
              </div>
            </div>

            <div className="col-lg-3" style={{ textAlign: "center" }}>
              <img
                src={"/man4.png"}
                alt="dd"
                className="bestdrive-drivers-image"
              />
                <div className="bestdrive-drivers-type">
                <p className="">DRIVER FOR Agreement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestDriver;
