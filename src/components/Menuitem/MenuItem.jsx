import React from 'react';
import { useCart } from 'react-use-cart';
import './MenuItem.css';

const MenuItem = (props) => {
  const { addItem } = useCart();
  return(
  <div className="menu__items">
    <button className="button1" onClick={()=>addItem(props.item)}>Chọn món</button>
    <div className=" text-light menu__items__name__tags">
      <h2>{props.title}</h2>
      <p>{props.tags}</p>
    </div>
    <div className="solid"></div>
    <div className="menu__items__price">
      <p>{props.price} VNĐ</p>
    </div>
    
  </div>
);}

export default MenuItem;
