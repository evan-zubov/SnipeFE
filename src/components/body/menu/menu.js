import React from "react";
import { MenuGroup } from "./menu-group/menu-group";
import { MenuItem } from "./menu-item/menu-item";
import { Link } from "react-router-dom";
import "./menu.css";

export const Menu = () => (
  <div className="menu">
    <MenuGroup name="ggg">
      <MenuItem>
        <Link to="/1">1</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/2">2</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/3">3</Link>
      </MenuItem>
    </MenuGroup>
  </div>
);
