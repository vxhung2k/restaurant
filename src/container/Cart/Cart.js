import React from 'react'
import { useCart } from 'react-use-cart'
import './Cart.css'
const Cart = () => {
  const {

    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  return (
    <div className="cart">
      <h2> Giỏ Hàng: {totalUniqueItems} món || Tổng số món: {totalItems} món</h2>
      <table className='table__cart'>
        <tbody>
          {items.map((item,index) => {
            return (
              <tr key={item.title + index}>
                <td><img src={item.imgUrl} /></td>
                <td>{item.title}</td>
                <td>{item.price} VNĐ</td>
                <td>Số lượng :{item.quantity}</td>
                <td className='btx'>
                  <button className='button1'
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  >-</button>
                  <button className='button1'
                    onClick={() => removeItem(item.id)}
                  >Xóa</button>
                  <button className='button1'
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  >+</button>
                </td>

              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="total__price">
        <h3>Tổng số tiền : {cartTotal} vnđ</h3>
      </div>
      <div className="clear__cart">
        <button className="button" onClick={() => emptyCart()}>Xóa giỏ hàng</button>
      </div>
    </div>
  )
}

export default Cart