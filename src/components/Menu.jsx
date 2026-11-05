import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuitem) => {
        return <MenuItem key={menuitem.id} {...menuitem} />;
      })}
    </div>
  );
};
export default Menu;
