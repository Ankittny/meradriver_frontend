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
            <div className="col-3" style={{ textAlign: "center" }}>
              <img
                src={"/man1.png"}
                alt="dd"
                className="bestdrive-drivers-image"
              />
              <div className="bestdrive-drivers-type">
                <p className="">Shaleie</p>
              </div>
            </div>

            <div className="col-3" style={{ textAlign: "center" }}>
              <img
                src={"/man2.png"}
                alt="dd"
                className="bestdrive-drivers-image"
              />
            </div>

            <div className="col-3" style={{ textAlign: "center" }}>
              <img
                src={"/man3.png"}
                alt="dd"
                className="bestdrive-drivers-image"
              />
            </div>

            <div className="col-3" style={{ textAlign: "center" }}>
              <img
                src={"/man4.png"}
                alt="dd"
                className="bestdrive-drivers-image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestDriver;
