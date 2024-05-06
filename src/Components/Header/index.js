import {AiOutlineShoppingCart} from 'react-icons/ai'

import './index.css'

const Header = props => {
  const {restaurantName, cartCount} = props
  return (
    <>
      <div className="header-container">
        <h1 className="header-heading">{restaurantName}</h1>
        <div className="order-cart-container">
          <p className="my-orders">My Orders</p>
          <button type="button" className="cart-btn">
            <AiOutlineShoppingCart className="header-cart-icon" />
            <sup className="header-cart-count">{cartCount}</sup>
          </button>
        </div>
      </div>
      <hr className="hr-line" />
    </>
  )
}
export default Header
