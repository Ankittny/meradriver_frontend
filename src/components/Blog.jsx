"use client"
import React from 'react'
// import "../styles/blog.scss";
import FeelJourney from './FeelJourney';
import Slider from './Slider';
import OnlineStore from './OnlineStore';
import Footer from './Footer';



const Blog = () => {
  return (
    <div>
      <div className="pricingpage">
        <div className="blog-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 ">
                <h1 className="blog-heading">Blog</h1>
              </div>
              <div className="col-lg-7">
                <div className="">
                  <img
                    src="/abouttopcar.png"
                    alt=""
                    className="blog-top-right-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='blog-title' style={{ marginTop: "195px" }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='start-blog-title'>
                <img src='/post1.png' alt='car' />
                {/* <div className='bussiness-title'>
                BUSINESS
              </div> */}
                <div className='main-blogs-image p-3 mt-2'>
                  <div className='main-blog d-flex gap-4'>
                    <div className='jan'>Jan 01 2022</div>
                    <div className='elliot '>Elliot Alderson</div>
                  </div>
                  <div className='blog-days mt-3'>
                    <h3 className='fw-bold'>How to Start initiating an startup in few
                      days.</h3>
                    <p>Financial experts support or help you to to find out which way you can raise your funds more... </p>
                  </div>
                  <div className='read-more-blog mt-3'>
                    Read More
                  </div>
                </div>
              </div>
              <div className='start-blog-title mt-5'>
                <img src='/post2.png' alt='car' />
                {/* <div className='bussiness-title'>
                BUSINESS
              </div> */}
                <div className='main-blogs-image p-3 mt-2'>
                  <div className='main-blog d-flex gap-4'>
                    <div className='jan'>Jan 01 2022</div>
                    <div className='elliot '>Elliot Alderson</div>
                  </div>
                  <div className='blog-days mt-3'>
                    <h3 className='fw-bold'>How to Start initiating an startup in few
                      days.</h3>
                    <p>Financial experts support or help you to to find out which way you can raise your funds more... </p>
                  </div>
                  <div className='read-more-blog mt-3'>
                    Read More
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='start-blog-title title-action'>
                <img src='/post3.png' alt='car' />
                {/* <div className='bussiness-title'>
                BUSINESS
              </div> */}
                <div className='main-blogs-image p-3 mt-2'>
                  <div className='main-blog d-flex gap-4'>
                    <div className='jan'>Jan 01 2022</div>
                    <div className='elliot '>Elliot Alderson</div>
                  </div>
                  <div className='blog-days mt-3'>
                    <h3 className='fw-bold'>How to Start initiating an startup in few
                      days.</h3>
                    <p>Financial experts support or help you to to find out which way you can raise your funds more... </p>
                  </div>
                  <div className='read-more-blog mt-3'>
                    Read More
                  </div>
                </div>
              </div>
              <div className='start-blog-title mt-5'>
                <img src='/post4.png' alt='car' />
                {/* <div className='bussiness-title'>
                BUSINESS
              </div> */}
                <div className='main-blogs-image p-3 mt-2'>
                  <div className='main-blog d-flex gap-4'>
                    <div className='jan'>Jan 01 2022</div>
                    <div className='elliot '>Elliot Alderson</div>
                  </div>
                  <div className='blog-days mt-3'>
                    <h3 className='fw-bold'>How to Start initiating an startup in few
                      days.</h3>
                    <p>Financial experts support or help you to to find out which way you can raise your funds more... </p>
                  </div>
                  <div className='read-more-blog mt-3'>
                    Read More
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='category-title p-4'>
                <div className='ct-exam-int'>
                <h3 className=''>Categories</h3>
                </div>
                <div className='title-category-summury d-flex justify-content-between mt-4'>
                <div className='date-summery'>
                 <p> Business Strategy</p>
                 <p> Project Management</p>
                 <p> Digital Marketing</p>
                 <p> Customer Experience</p>
                 <p> Partnership System</p>
                  </div>
                  <div className='date-summerys'>
                 <p>23</p>
                 <p>05</p>
                 <p>18</p>
                 <p>04</p>
                 <p>15</p>
                  </div>
                </div>
              </div>
              <div className='category-title p-4 mt-5'>
                <div className='ct-exam-int'>
                <h3 className=''>Recent Articles</h3>
                </div>
                <div className='title-category-summury d-flex justify-content-between mt-4 gap-3'>
                <div className='date-summery'>
                  <img src="/post-thumb.png" alt='img'/>
                  </div>
                  <div className='date-summerys'>
                 <p>How To Go About Initiating An
                 Startup In Few Days.</p>
                 <span>Jan 01 2022</span>
                
                  </div>
                  
                </div>
                <div className='title-category-summury d-flex justify-content-between mt-4 gap-3'>
                <div className='date-summery'>
                  <img src="/List → Item.png" alt='img'/>
                  </div>
                  <div className='date-summerys'>
                 <p>Financial Experts Support Help You
                 To Find Out.</p>
                 <span>Jan 01 2022</span>
                
                  </div>
                  
                </div>
                <div className='title-category-summury d-flex justify-content-between mt-4 gap-3'>
                <div className='date-summery'>
                  <img src="/List → Item (1).png" alt='img'/>
                  </div>
                  <div className='date-summerys'>
                 <p>Innovative Helping Business All Over
                 The World.</p>
                 <span>Jan 01 2022</span>
                
                  </div>
                  
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
      
      <div className="feel-jou-exit">
    <FeelJourney  />
    </div>
    <Slider />
    <OnlineStore />
    <Footer />
    </div>
  )
}

export default Blog
