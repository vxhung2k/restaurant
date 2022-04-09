import React from 'react';
import { Navbar, MenuItem } from '../../components'
import { images, data, data_collapse } from '../../constants';
import { useState } from 'react';
import { Cart } from '../../container'

import './SpecialMenu.css';

const SpecialMenu = () => {
  const [isViewMore1, setViewMore1] = useState(true);
  const [isViewMore2, setViewMore2] = useState(true);
  const handleView1 = () => {
    setViewMore1(!isViewMore1)

  }
  const handleView2 = () => {
    setViewMore2(!isViewMore2)

  }


  return (
    
      <section className="menu">
        <Navbar />
        <div className="menu__container" >
          <div className="content">
            <div className="menu__content">
              <h2>Menu cho ngày mới!</h2>
              <img src={images.spoon} className='rotate' />
              <h1 className='text-name'>Today's Special</h1>
            </div>
          </div>
          <div className="menu__container__body1">
            <div className='menu__item'>{data.food.map((item, index) => (
              <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} item={item} />
            ))}</div>
            <div className="menu__img">
              <img src={images.menu1} alt="menu" />
            </div>
            <div className='menu__drink'>{data.drink.map((item, index) => (
              <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} item={item} />
            ))}</div>






          </div>
          <div className="menu_collapse">
            <div className="menu__container__body2">
              <div className="menu__food__body">
                {
                  isViewMore1 ? (
                    <div className='menu__food'>{data_collapse.food.map((item, index) => (
                      <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} item={item}/>
                    ))}</div>

                  )
                    : (
                      <div className='menu__food'>{data.food.map((item, index) => (
                        <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} item={item}/>
                      ))}</div>
                    )
                }
                {
                  isViewMore1 ? (
                    <button className='button' onClick={handleView1}>xem thêm</button>
                  ) : (
                    <button className='button' onClick={handleView1}>thu gọn</button>
                  )
                }
              </div>


              <div className="menu__img">
                <img src={images.menu1} alt="menu" />
              </div>

              <div className="menu__drink__body">
                {
                  isViewMore2 ? (
                    <div className='menu__drink'>{data_collapse.drink.map((item, index) => (
                      <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} item={item}/>
                    ))}</div>
                  )
                    : (
                      <div className='menu__drink'>{data.drink.map((item, index) => (
                        <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} item={item}/>
                      ))}</div>
                    )
                }
                {
                  isViewMore2 ? (
                    <button className='button' onClick={handleView2}>xem thêm</button>
                  ) : (
                    <button className='button' onClick={handleView2}>thu gọn</button>
                  )
                }

              </div>
            </div>

          </div>



        </div>



      </section>
    
  )
}

export default SpecialMenu;
