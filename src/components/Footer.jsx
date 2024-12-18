import React from "react";
import "../styles/footer.scss";
import { TiSocialFacebook } from "react-icons/ti";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="footer-title pt-5 bg-black text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-heading">
              <h4 className="glad-list">SUBSCRIBE TO MAIL!</h4>
              <p>
                Get Meradriver Daily email newsletter with Special Services,
                Updates, Offers and many more
              </p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append ">
                  <span
                    className="input-group-text  text-black"
                    id="basic-addon2"
                  >
                    Subscribe
                  </span>
                </div>
              </div>
              <div className="social-icons d-flex gap-4">
                <TiSocialFacebook />
                <FaGooglePlusG />
                <FaTwitter />
                <SiIndeed />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-heading">
              <h4 className="glad-list mb-4">WE GLAD TO OFFER</h4>
              <ul className="glad-item">
                <li>24*7 Drivers Any Where Around Delhi NCR</li>
                <li>
                  Booking your personal driver through Meradriver app launching
                  soon
                </li>
                <li>24*7 Customer Support from Meradriver</li>
                <li>Personal| Professional Driver & many more</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-heading">
              <h4 className="glad-list">WHO WE ARE</h4>
              <p>
                We are a driver management company based in Delhi. It is the
                first professional driver management company in India. It is a
                platform where you can find a driver according to your
                requirements.
              </p>
            </div>
            <div className="icons-phone d-flex gap-2 ">
              <IoMdPhonePortrait />
              <p>Customer Support: +919911138139 , +919266166866</p>
            </div>
            <div className="icons-phone d-flex gap-2 ">
              <MdOutlineEmail />
              <p>Email :info@meradriver.com</p>
            </div>
          </div>
          <div className="col-lg-4 pt-5">
            <div className="footer-heading">
              <h4 className="glad-list mb-4">Company</h4>
              <ul className="glad-item">
                <li>
                  <Link href={"/about"}></Link>About Us
                </li>
                <li>Tearm and Conditions</li>
                <li>Privacy policy</li>
                <li>FAQ</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 pt-5">
            <div className="footer-heading">
              <h4 className="glad-list mb-4">Quick Link</h4>
              <ul className="glad-item">
                <li>
                  <Link href={"/blog"}></Link>Our Blogs
                </li>
                <li>Search Job</li>
                <li>Post Job</li>
                <li>Services</li>
                <li>How It Works</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 pt-5">
            <div className="footer-heading">
              <h4 className="glad-list mb-4">Download Our App</h4>
              <div className="d-flex gap-4">
                <div className="google-idea">
                  <img src="/google-play.png" width="150" alt="dd6" />
                  
                    {/* <div className="col-lg-4 pt-5">
                        <div className="footer-heading">
                            <h4 className="glad-list mb-4">Company</h4>
                            <ul className="glad-item">
                           <li><Link href={"/about"}>About Us</Link></li>
                                <li>Tearm and Conditions</li>
                                <li>Privacy policy</li>
                                <li>FAQ</li>
                                <li><Link href={"/contact"}>Contact Us</Link></li>
                            </ul>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-4 pt-5">
                        <div className="footer-heading">
                            <h4 className="glad-list mb-4">Quick Link</h4>
                            <ul className="glad-item">
                           <li><Link href={"/blog"}>Our Blogs</Link></li>
                                <li>Search Job</li>
                                <li><Link href={"/postjobs"}>Post Job</Link></li>
                                <li><Link href={"/services"}>Services</Link></li>
                                <li>How It Works</li>
                            </ul>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-4 pt-5">
                        <div className="footer-heading">
                            <h4 className="glad-list mb-4">Download Our App</h4>
                            <div className="d-flex gap-4">
                            <div className="google-idea">
                                <img src="/google-play.png" width="150" alt="dd6" />
                            </div>
                            <div className="google-idea">
                                <img src="/app-store.png" width="150" alt="dd7" />
                            </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="google-idea">
                  <img src="/app-store.png" width="150" alt="dd7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer d-flex justify-content-between pt-3 px-2">
        <ul className="listing-text d-flex gap-3">
          <li className="border-right">Faq </li>
          <li className="border-right">Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
        <div className="para-title">
          <p>copyrights © 2024 Meradriver Pvt. Ltd. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
