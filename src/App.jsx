import { useState } from "react";
import Title from "./components/Title";
import menu from "./data";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import { BUSINESS_NAME } from "./config";
import WhatsAppFloat from "./components/WhatsAppFloat";

// const tempCategories = menu.map((item) => item.category)
// const tempSet = new Set(tempCategories)
// console.log(tempSet)
// const allCategories = ["all", ...tempSet]

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const sortMenuItems = (category) => {
    const selectedMenuItems = menu.filter((item) => item.category === category);
    if (category === "all") {
      setMenuItems(menu);
      return;
    }

    setMenuItems(selectedMenuItems);
  };

  return (
    <main>
      <section className="menu">
        <h2 className="business-name">{BUSINESS_NAME}</h2>
        <Title text="our menu" />
        <Categories categories={categories} sortMenuItems={sortMenuItems} />
        <Menu items={menuItems} />
      </section>
      <WhatsAppFloat />
    </main>
  );
};
export default App;
