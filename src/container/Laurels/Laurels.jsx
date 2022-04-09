import React from 'react';
import {images} from '../../constants'
import './Laurels.css';

const Laurels = () => (
  <div className="laurels">
    <div className="list__laurels">
      <h2 className='text-light'> Huy chương của sự cố gắng</h2>
      <img src={images.spoon}/>
      <h1 className='text-light'>Những gì mà chúng tôi có <span>🍵</span></h1>
      <div className="laurels__items">
        <img src={images.award01} />
        <div className="slogan">
          <h2 className='text-light'>Kiểm định về vệ sinh an toàn thực phẩm</h2>
          <p><a href="https://luatvietan.vn/giay-chung-nhan-ve-sinh-an-toan-thuc-pham.html">Chi tiết tại đây!</a></p>
        </div>
      </div>
      <div className="laurels__items">
        <img src={images.award02} />
        <div className="slogan">
          <h2 className='text-light'>Đội ngũ nhân viên chuyên nghiệp</h2>
          <p><a href="https://luatvietan.vn/giay-chung-nhan-ve-sinh-an-toan-thuc-pham.html">Chi tiết tại đây!</a></p>
        </div>
      </div>
      <div className="laurels__items">
        <img src={images.award03} />
        <div className="slogan">
          <h2 className='text-light'> 3 Tiêu chí kinh doanh</h2>
          <p><a href="https://luatvietan.vn/giay-chung-nhan-ve-sinh-an-toan-thuc-pham.html">Chi tiết tại đây!</a></p>
        </div>
      </div>
      <div className="laurels__items">
        <img src={images.award05} />
        <div className="slogan">
          <h2 className='text-light'>Chứng nhận đầu bếp 5 sao</h2>
          <p><a href="https://luatvietan.vn/giay-chung-nhan-ve-sinh-an-toan-thuc-pham.html">Chi tiết tại đây!</a></p>
        </div>
      </div>
    </div>
    <div className="laurels__img">
      <img src={images.laurels} />
    </div>
  </div>
);

export default Laurels;
