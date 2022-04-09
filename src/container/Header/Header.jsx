import React from 'react';
import images from '../../constants/images'
import { Navbar } from '../../components';
import { useCart } from 'react-use-cart'

import './Header.css';

const Header = () => (
  
  <section className="header">
    <Navbar />
    <div className="header__container">
      <div className="content">
        <div className="content__wellcome">
          <h2>Chào mừng quý khách!</h2>
          <img src={images.spoon} />
        </div>
        <div className="content__intro">
          <h1 className='text-light'>HÃY SỐNG HẾT MÌNH VỚI NIỀM ĐAM MÊ ẨM THỰC CỦA BẠN</h1>
        </div>
        <div className="content__review">
          <p>Chúng tôi sinh ra mang trong mình sứ mệnh lấy sự hiếu khách,phục vụ tận tình và sự hài lòng của quý khách làm làm phương châm trên con đường phát triển!</p>
        </div>
        <div className="button__more">
        <button className='button1'><a href="/menu">Xem Menu</a></button>
        </div>
       


      </div>

      <div className="header__img">
        <img src={images.welcome} alt="" />
      </div>
    </div>

  </section>
  
);

export default Header;
