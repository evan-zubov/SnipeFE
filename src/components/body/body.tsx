import React from "react";
import "./body.css";
import { Menu } from "./menu/menu";
import { Content } from "./content/content";

export const Body: React.FunctionComponent = () => (
  <div className="body">
    <Menu />
    <Content />
  </div>
);
