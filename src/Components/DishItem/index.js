import {useState} from 'react'

import './index.css'

const DishItem = props => {
  const {dishesDetails, incrementCart, decrementCart} = props
  const [count, updateCount] = useState(0)
  const {
    dishName,
    dishCurrency,
    dishPrice,
    dishDescription,
    dishCalories,
    dishImage,
    addonCat,
    dishAvailability,
  } = dishesDetails

  const onClickMinus = () => {
    if (count > 0) {
      updateCount(prevState => prevState - 1)
      decrementCart()
    }
  }

  const onClickPlus = () => {
    updateCount(prevState => prevState + 1)
    incrementCart()
  }

  return (
    <li className="dishes-list-item">
      <div className="dish-details-container">
        <h1 className="dish-name">{dishName}</h1>
        <p className="dish-price">{`${dishCurrency} ${dishPrice}`}</p>
        <p className="dish-description">{dishDescription}</p>
        {dishAvailability === true ? (
          <div className="add-cart-container">
            <button
              type="button"
              className="dish-buttons"
              onClick={onClickMinus}
            >
              -
            </button>

            <p>{count}</p>
            <button
              type="button"
              className="dish-buttons"
              onClick={onClickPlus}
            >
              +
            </button>
          </div>
        ) : (
          <p className="not-available">Not available</p>
        )}
        {addonCat.length > 0 && (
          <p className="custom-available">Customizations available</p>
        )}
      </div>
      <div className="calories-img-container">
        <p className="calories">{dishCalories} calories</p>
        <img src={dishImage} alt={dishName} className="dish-image" />
      </div>
    </li>
  )
}
export default DishItem
