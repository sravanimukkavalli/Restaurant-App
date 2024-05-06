import './index.css'

const CategoryItem = props => {
  const {category, isActive, updateCategory} = props

  const categoryClassName = isActive ? 'active-category' : ''
  const buttonClassName = isActive ? 'active-btn' : ''

  const onClickButton = () => {
    updateCategory(category)
  }

  return (
    <li className={buttonClassName}>
      <button
        className={`category-btn ${buttonClassName}`}
        onClick={onClickButton}
        type="button"
      >
        <p className={categoryClassName}>{category}</p>
      </button>
    </li>
  )
}
export default CategoryItem
