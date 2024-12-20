
import "../styles/slider.scss";
import Image from "next/image";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';

// import './styles.css';/

// import required modules
import { Pagination } from 'swiper/modules';

const Slider = () => {
  return (
    <div className="swiper-title pt-5">
      <div className='heading-title'>
        <h1 className="text-center fw-bold"> Our Happy Drivers </h1>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          375: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          425: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper pt-5"
      >
        <SwiperSlide>
          <div className="slider-slide d-flex  gap-4 ">
            <img src={"/testimonial_img.png"} alt="dd7" />
            <p>Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatu Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatu Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatu</p>
          </div>
          <div className="icons text-end ">
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-slide d-flex  gap-4">
            <img src={"/testimonial_img1.png"} alt="dd7" />
            <p>Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatu Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatu Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatu</p>
          </div>
          <div className="icons text-end">
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-slide d-flex gap-4">
            <img src={"/testimonial_img2.png"} alt="dd7" />
            <p>Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatu Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatu Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatu</p>
          </div>
          <div className="icons text-end ">
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-slide d-flex gap-4">
            <img src={"/testimonial_img3.png"} alt="dd7" />
            <p>Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatu Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatu Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatu</p>
          </div>
          <div className="icons text-end ">
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="slider-slide d-flex gap-4">
            <img src={"/testimonial_img.png"} alt="dd7" />
            <p>Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatu Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatu Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatu</p>
          </div>
          <div className="icons text-end ">
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-slide d-flex gap-4">
            <img src={"/testimonial_img1.png"} alt="dd7" />
            <p>Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatu Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatu Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatu</p>
          </div>
          <div className="icons text-end ">
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-slide d-flex gap-4">
            <img src={"/testimonial_img2.png"} alt="dd7" />
            <p>Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatu Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatu Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatu</p>
          </div>
          <div className="icons text-end ">
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-slide d-flex gap-4">
            <img src={"/testimonial_img3.png"} alt="dd7" />
            <p>Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatu Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatu Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatu</p>
          </div>
          <div className="icons text-end ">
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Slider
