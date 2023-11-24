import React from "react";
import "./index.css";

import { Apple } from "../../svg";
import MenuList from "./MenuList";
import StatusBar from "./StatusBar";

const MenuBar: React.FC = () => {
  return (
    <div className="menubar select-none">
      <div>
        <Apple />
      </div>
      <div className="wrapper-menu-bar">
        <MenuList />
        <StatusBar />
      </div>
    </div>
  );
};

export default MenuBar;
