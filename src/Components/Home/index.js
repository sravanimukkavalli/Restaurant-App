import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Header from '../Header'
import CategoryItem from '../CategoryItem'
import DishItem from '../DishItem'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'INPROGRESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiResponse: apiStatusConstants.inProgress,
    restaurantName: '',
    restaurantDetails: {},
    activeCategoryId: '',
    cartCount: 0,
  }

  componentDidMount() {
    this.getRestaurantDetails()
  }

  getRestaurantDetails = async () => {
    const url = 'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc'
    const options = {method: 'GET'}
    const response = await fetch(url, options)
    const responseData = await response.json()
    console.log(response)
    if (response.ok === true) {
      this.setState({
        apiResponse: apiStatusConstants.success,
        activeCategoryId: responseData[0].table_menu_list[0].menu_category,
        restaurantDetails: responseData[0],
        restaurantName: responseData[0].restaurant_name,
      })
    } else {
      this.setState({
        apiResponse: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <div className="loading-container">
      <Loader type="ThreeDots" width="50" height="50" color="#000000" />
    </div>
  )

  updateCategory = category => {
    this.setState({activeCategoryId: category})
  }

  incrementCart = () => {
    this.setState(prevState => ({cartCount: prevState.cartCount + 1}))
  }

  decrementCart = () => {
    this.setState(prevState => ({cartCount: prevState.cartCount - 1}))
  }

  renderSuccessView = () => {
    const {
      restaurantName,
      activeCategoryId,
      restaurantDetails,
      cartCount,
      apiResponse,
    } = this.state
    console.log(apiResponse)
    const categoryList = restaurantDetails.table_menu_list.map(each => ({
      category: each.menu_category,
      id: each.menu_category_id,
    }))
    console.log(categoryList)
    const activeCategoryList = restaurantDetails.table_menu_list.filter(
      each => each.menu_category === activeCategoryId,
    )
    console.log(activeCategoryList)
    const categoryDishesList = activeCategoryList[0].category_dishes.map(
      eachDish => ({
        dishId: eachDish.dish_id,
        dishName: eachDish.dish_name,
        dishPrice: eachDish.dish_price,
        dishImage: eachDish.dish_image,
        dishCurrency: eachDish.dish_currency,
        dishCalories: eachDish.dish_calories,
        dishDescription: eachDish.dish_description,
        dishAvailability: eachDish.dish_Availability,
        dishType: eachDish.dish_Type,
        nexturl: eachDish.nexturl,
        addonCat: eachDish.addonCat,
      }),
    )
    console.log(categoryDishesList)
    return (
      <>
        <Header restaurantName={restaurantName} cartCount={cartCount} />
        <ul className="category-container">
          {categoryList.map(eachList => (
            <CategoryItem
              key={eachList.id}
              category={eachList.category}
              isActive={eachList.category === activeCategoryId}
              updateCategory={this.updateCategory}
            />
          ))}
        </ul>
        <hr className="hr-line" />
        <ul className="dishes-unordered-list-container">
          {categoryDishesList.map(eachDishItem => (
            <DishItem
              dishesDetails={eachDishItem}
              key={eachDishItem.dishId}
              incrementCart={this.incrementCart}
              decrementCart={this.decrementCart}
            />
          ))}
        </ul>
      </>
    )
  }

  renderResponse = () => {
    const {apiResponse} = this.state
    switch (apiResponse) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return <div className="home-container">{this.renderResponse()}</div>
  }
}

export default Home
