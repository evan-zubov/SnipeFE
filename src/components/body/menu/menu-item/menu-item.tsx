import React, { ReactNode } from "react";
import "./menu-item.css";

interface IMenuItemProps {
  children?: ReactNode;
}

export const MenuItem: React.FunctionComponent = (props: IMenuItemProps) => (
  <div className="menu-item">{props.children}</div>
);
