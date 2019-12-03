import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./menu-group.css";

interface IMenuGroupProps {
  name: string;
  children?: React.ReactNode;
}

export const MenuGroup: React.FC<IMenuGroupProps> = ({
  name,
  children
}: IMenuGroupProps) => {
  const [openStatus, setOpenStatus] = useState<boolean>(false);

  const onClick = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();

    setOpenStatus(!openStatus);
  };

  return (
    <div className="menu-group">
      <div onClick={onClick}>
        <div className="menu-group__name">{name}</div>
        <FontAwesomeIcon
          icon={openStatus ? "angle-up" : "angle-down"}
          className="menu-group__icon"
          size="lg"
        />
      </div>
      <div className="menu-group__list">{openStatus && children}</div>
    </div>
  );
};
