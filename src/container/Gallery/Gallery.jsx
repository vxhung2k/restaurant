import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components'
import './Gallery.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { SiFacebook } from 'react-icons/si'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";

const Gallery = () => {

  return (
    <div className="gallery">
      <SubHeading />
      <div className="slide__gallery">
        <Swiper
          spaceBetween={5}
          slidesPerView={2}
          centeredSlides={true}
           autoplay={{
             delay: 2500,
             disableOnInteraction: false,
           }}
           breakpoints= {{
            600: {
    
              
                slidesPerView: 2,
              },
              1200: {
            
                slidesPerView: 2,
              },
            }}

          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
           <SwiperSlide>{
            <div className="boder__slider">
              <img src={images.gallery01} />
              <a href="https://facebook.com">
                <SiFacebook className='icon' />
              </a></div>}
          </SwiperSlide>
          <SwiperSlide>{
            <div className="boder__slider">
              <img src={images.gallery02} />
              <a href="https://facebook.com">
                <SiFacebook className='icon' />
              </a></div>}
          </SwiperSlide>
          <SwiperSlide>{
            <div className="boder__slider">
              <img src={images.gallery03} />
              <a href="https://facebook.com">
                <SiFacebook className='icon' />
              </a></div>}
          </SwiperSlide>
          <SwiperSlide>{
            <div className="boder__slider">
              <img src={images.gallery04} />
              <a href="https://facebook.com">
                <SiFacebook className='icon' />
              </a></div>}
          </SwiperSlide>
          <SwiperSlide>{
            <div className="boder__slider">
              <img src={images.gallery07} />
              <a href="https://facebook.com">
                <SiFacebook className='icon' />
              </a></div>}
          </SwiperSlide>
          

          

          


        </Swiper>
      </div>
      
    </div >
  );
}

export default Gallery;
