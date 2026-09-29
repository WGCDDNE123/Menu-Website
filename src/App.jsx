import { useState } from 'react'
import Title from './Title'
import menu from './data'
import Menu from './Menu'
import Categories from './Categories'

// const tempCategories = menu.map((item) => item.category)
// const tempSet = new Set(tempCategories)
// console.log(tempSet)
// const allCategories = ["all", ...tempSet]

const allCategories = ['all', ...new Set(menu.map((item) => item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)

  const sortMenuItems = (category) => {
    const selectedMenuItems = menu.filter((item) => item.category === category)
    if (category === 'all') {
      setMenuItems(menu)
      return
    }

    setMenuItems(selectedMenuItems)
  }

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} sortMenuItems={sortMenuItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
export default App
