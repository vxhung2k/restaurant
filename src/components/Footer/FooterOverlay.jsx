import React from 'react';
import { images } from '../../constants';
import { FiFacebook, FiInstagram, FiMail } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import './FooterOverlay.css';

const FooterOverlay = () => (
  <div className="footerOverlay__container">
    <div className="footerOverlay">
      <div className="contact">
        <h1 className="text-light">Contact Us</h1>
        <h2 className="text-light"><HiOutlineLocationMarker className='icon' /><a href="https://goo.gl/maps/kxoL5YULvvgJpzYd8">Số 25-Vạn Bảo-Liễu Giai-Ba Đình-Hà Nội</a></h2>
        <h2 ><BsFillTelephoneFill className='icon' /><a href="tel:+0985577152">:0985577152</a></h2>
      </div>
      <div className="address">
        <div className="address__head">
          <h1 className="text-name">Ẩm Thực Việt</h1>
          <h2 className="text-light">Chúng tôi chân thành cảm ơn sự quan tâm của quý khách tới cửa hàng chúng tôi!</h2>
          <img src={images.spoon} alt="" />
          <div className="social__network">
            <a href="https://facebook.com"><FiFacebook className='icon' /></a>
            <a href="https://instagram.com"><FiInstagram className='icon' /></a>
            <a href="https://gmail.com"><FiMail className='icon' /></a>
          </div>
        </div>
      </div>
      <div className="work__on">
        <h1 className="text-light">Working House</h1>
        <p>Monday - Friday:<br />
          10:00 AM - 22:50 PM
        </p>
        <p>Saturday - Sunday:<br />
          08:00 AM - 02:00 AM
        </p>
      </div>
    </div>
    <div className="copyright">
      <p>2022 - Ẩm Thực Phố. All Rights Reserved</p>
    </div>
  </div>


);

export default FooterOverlay;
