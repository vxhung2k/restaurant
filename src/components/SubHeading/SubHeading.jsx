import React from 'react';
import { images } from '../../constants';
import './SubHeading.css'
const SubHeading = () => (
  <div className="subheading">
    <div className="subheading__text">
      <h2 className='text-light'>Instagram</h2>
      <img src={images.spoon} alt="" />
    </div>
    <h1 className='text-light'>Hình ảnh </h1>
    <p>Hình ảnh các món ăn ngon làm nên sự hài hòa của cuộc sống</p>
    <button className='button'><a href="/menu">Xem menu</a></button>
  </div>
);

export default SubHeading;
