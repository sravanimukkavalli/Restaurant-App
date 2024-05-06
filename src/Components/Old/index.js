// const Home = () => {
//   const [activeCategory, updateActiveCategory] = useState('')
//   const [apiResponse, setApiResponse] = useState({
//     status: apiStatusConstants.initial,
//     data: null,
//     errorMsg: null,
//   })
//   useEffect(() => {
//     const getRestaurantDetails = async () => {
//       setApiResponse(prevApiResponse => ({
//         ...prevApiResponse,
//         status: apiStatusConstants.inProgess,
//       }))
//       const response = await fetch(
//         'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc',
//         {method: 'GET'},
//       )
//       const responseData = await response.json()
//       console.log(responseData)
//       if (response.ok) {
//         setApiResponse(prevApiResponse => ({
//           ...prevApiResponse,
//           status: apiStatusConstants.success,
//           data: responseData,
//         }))
//       } else {
//         setApiResponse(prevApiResponse => ({
//           ...prevApiResponse,
//           status: apiStatusConstants.failure,
//         }))
//       }
//     }
//     getRestaurantDetails()
//   }, [])

//   const renderLoadingView = () => (
//     <div className="loading-container">
//       <Loader type="ThreeDots" height={30} width={30} color="000000" />
//     </div>
//   )

//   const renderSuccessView = () => {
//     const categoriesList = apiResponse[0].table_menu_list.map(
//       each => each.menu_category,
//     )
//     console.log(categoriesList)
//     return (
//       <div>
//         <p>Hi</p>
//       </div>
//     )
//   }

//   const renderResponse = () => {
//     switch (apiResponse.status) {
//       case apiStatusConstants.inProgess:
//         return renderLoadingView()
//       case apiStatusConstants.success:
//         return renderSuccessView()
//       default:
//         return null
//     }
//   }

//   return (
//     <div>
//       <Header />
//       {renderResponse()}
//     </div>
//   )
// }
