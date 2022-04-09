import React from 'react';
import images from '../../constants/images'
import { Link } from 'react-router-dom'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { GiHamburger, GiShoppingCart } from 'react-icons/gi'
import { useState } from 'react';
import { useCart } from 'react-use-cart'
import './Navbar.css';
import { Cart } from '../../container'
const Navbar = () => {
  const {
    totalUniqueItems
  } = useCart();
  const [isshowCart, setshowCart] = useState(false)
 
  const [isShowbar, setShowbar] = useState(false);
  const [isLogin, setLogin] = useState(false)
  const handleShowbar = () => {
    setShowbar(!isShowbar)

  }
  return (
    <nav className="nav__header">
      <div className="logo">
        <img src={images.logo} alt="logo" className='rotate' />
      </div>
      <div className="name">
        <h1 className='text-name'><a href="/">Ẩm Thực Việt</a></h1>
      </div>
      <ul className="btn tag__menu">
        <li><a href="/">Trang chủ</a></li>
        <li><a href="/about">Thông tin</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/aword">Giải thưởng</a></li>
        <li><a href="/contact">Liên hệ</a></li>
        {isLogin ? (
          <li onClick={() => setLogin(!isLogin)}><a href="/login">Đăng xuất</a></li>
        ) : (
          <li onClick={() => setLogin(!isLogin)}><a href="/">Đăng nhập</a></li>
        )}

        <li><a href="/booktable">Đặt bàn</a></li>

      </ul>
      {isShowbar ? (
        <ul className="btn tag__menu__showbar">
          <li><a href="/">Trang chủ</a></li>
          <li><a href="/about">Thông tin</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/aword">Giải thưởng</a></li>
          <li><a href="/contact">Liên hệ</a></li>
          <li><a href="/login">Đăng nhập</a></li>
          <li><a href="/booktable">Đặt bàn</a></li>


        </ul>

      ) : (
        null
      )}
       <h3>{totalUniqueItems}<GiShoppingCart className='icon1' onClick={()=>setshowCart(!isshowCart)}/></h3>
      
      {isShowbar ?
        (<MdOutlineRestaurantMenu className='icons' onClick={handleShowbar} />) : (<GiHamburger className='icons' onClick={handleShowbar} />)}
      
        <div className="showcard">
          {isshowCart?(<Cart/>):(null)}
        </div>


    </nav>
  );
}

export default Navbar;
