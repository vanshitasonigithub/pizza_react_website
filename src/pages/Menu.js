import React from "react";
import { MenuList } from "../helpers/MenuList";
import Menuitem from "../components/Menuitem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <div>
              <Menuitem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
