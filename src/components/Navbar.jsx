import React from "react";
import "../styles/navbar.scss";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Image src={'/MERA-DRIVER.png'} width={200} height={60} alt=""/>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">
                  About Mera Driver
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">
                  Service 
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">
                  Tech
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">
                  Post Job
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">
                  Contact Us
                </Link>
              </li>
            </ul>

            <button className="btn btn-outline-success" type="submit">
              Apply for Jobs
            </button>
            <button className="btn btn-outline-success" type="submit">
              Apply for Drivers
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
