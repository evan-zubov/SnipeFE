import React, { ReactNode } from "react";
import "./menu-item.css";

interface MenuItemProps {
  children?: ReactNode;
}

export const MenuItem: React.FunctionComponent = (props: MenuItemProps) => (
  <div className="menu-item">{props.children}</div>
);
