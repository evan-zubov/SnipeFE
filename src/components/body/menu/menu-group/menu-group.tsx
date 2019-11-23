import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./menu-group.css";

interface MenuGroupProps {
  name: string;
}

export class MenuGroup extends React.Component<MenuGroupProps> {
  state = { open: false };
  onClick = () => this.setState({ open: !this.state.open });
  render() {
    const { name, children } = this.props;
    return (
      <div className="menu-group">
        <div onClick={this.onClick}>
          <div className="menu-group__name">{name}</div>
          <FontAwesomeIcon
            icon={this.state.open ? "angle-up" : "angle-down"}
            className="menu-group__icon"
            size="lg"
          />
        </div>
        <div className="menu-group__list">{this.state.open && children}</div>
      </div>
    );
  }
}
