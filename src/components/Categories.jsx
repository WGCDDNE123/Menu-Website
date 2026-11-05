const Categories = ({ categories, sortMenuItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        //what's happenng here? For each category that's passed in, we'll return a button,
        //  and use the unique category name as the key to iterate over
        return (
          <button
            type="button"
            className="btn"
            key={category}
            onClick={() => sortMenuItems(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
export default Categories
