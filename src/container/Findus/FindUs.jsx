import React from 'react';
import './Findus.css' 
import {images} from'../../constants'
const FindUs = () => (
  <div className="find__us">
    <div className="find__us__content">
      <div className="find__us__content__head">
        <h2 className='text-light'>Liện hệ chúng tôi</h2>
        <img src={images.spoon} alt="" />
        <h1 className="text-light">Hãy đến và trải nghiệm</h1>
      </div>
      <div className="find__us__content__address">
        <h2 className="text-light">Số 25,đường Vạn Bảo, Phường Liễu Giai,Hà Nội</h2>
        <h2 className="text-light">Giờ mở cửa</h2>
        <p>Mon-Fri : 10:00 AM - 22:50 PM</p>
        <p>Sat-Sun : 08:00 AM - 02:00 AM</p>
        <button className=" button"><a href="https://goo.gl/maps/nD7Anam8y1uqTKfJA">Visit Us</a></button>
      </div>
    </div>
    <div className="find__us__img">
      <img src={images.findus} alt="" />
    </div>
  </div>
);

export default FindUs;
