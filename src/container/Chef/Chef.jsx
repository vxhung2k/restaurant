import React from 'react';
import { images } from '../../constants';


import './Chef.css';

const Chef = () => (
  <div className="chef">
    <div className="chef__img">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="chef__container">
      <div className="text-light chef__content">
        <p>Chef's Word</p>
        <img src={images.spoon} />
        <h1>Điều gì làm nên sức hút của chúng tôi</h1>
      </div>
      <div className="chef__intro">

        <p><img src={images.quote} />Công việc nấu ăn với tôi như một cái duyên trời định: “Tôi cảm thấy mình rất tuyệt khi cầm dụng cụ lúc làm bếp.<br />
          Khi yêu một cái gì đó, bạn sẽ không thấy nhàm chán dù công việc cứ lặp đi lặp lại hàng ngày”.
          <br />Có lẽ vì thế mà tôi luôn tìm được niềm vui mỗi khi làm việc để rồi thành công đến lúc nào không hay.</p>
      </div>
      <div className="chef__info">
        <div className="info">
          <small>Kevin Luo</small>
          <h2 className='text-light'>Bếp Trưởng</h2>
        </div>

        <img src={images.sign} />
      </div>


    </div>
  </div>
);

export default Chef;
