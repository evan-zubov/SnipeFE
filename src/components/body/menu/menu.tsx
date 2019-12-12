import React from "react";
import { MenuGroup } from "./menu-group/menu-group";
import { withTranslation } from "react-i18next";
import { MenuItem } from "./menu-item/menu-item";
import { Link } from "react-router-dom";
import "./menu.css";
import { PATHS } from 'src/components/body/content/routes';

export const Menu = withTranslation()(({ t }) => (
  <div className="menu">
    <MenuGroup name={t('Menu.LiveOps')}>
      <MenuItem>
        <Link to={PATHS.liveOps.searchPlayers}>{t('Menu.LiveOps.SearchPlayers')}</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/2">2</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/3">3</Link>
      </MenuItem>
    </MenuGroup>
  </div>
));
