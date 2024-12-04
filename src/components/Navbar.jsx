"use client"
import React from "react";
import "../styles/navbar.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Navbar = () => {
  const router = useRouter();

  const handleRegister =()=>{
    router.push('/register')
  }

  const handleLogin =() => {
    router.push("/login")
  }

  return (
    <div className="" style={{display:'flex',justifyContent:'center'}}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mt-3">
        <div className="container-fluid">
          <Link href="/">
          <Image src={'/MERA-DRIVER.png'} width={150} height={40} alt=""/>
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-4 my-2">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/about">
                  About Mera Driver
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/services">
                  Service 
                </Link>
              </li>
              {/* <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/pricing">
                  Pricing
                </Link>
              </li> */}
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/tech">
                  Tech
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/postjobs">
                  Post Job
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="contact">
                  Contact Us
                </Link>
              </li>
            </ul>

            <button className="btn btn-outline-success mx-3" type="submit" onClick={handleRegister}>
            SIGNUP DRIVER
            </button>
            <button className="btn btn-outline-success" type="submit" onClick={handleLogin}>
              LOGIN
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
