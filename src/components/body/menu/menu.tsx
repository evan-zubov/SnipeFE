import React from "react";
import { MenuGroup } from "./menu-group/menu-group";
import { withTranslation } from "react-i18next";
import { MenuItem } from "./menu-item/menu-item";
import { Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import "./menu.css";
import { PATHS } from "src/components/body/content/routes";

export const Menu = withTranslation()(({ t }) => (
  <div className="menu">
    <MenuGroup name={t("Menu.LiveOps")}>
      <MenuItem>
        <Link component={RouterLink} to={PATHS.liveOps.searchPlayers("", "")}>
          {t("Menu.LiveOps.SearchPlayers")}
        </Link>
      </MenuItem>
      <MenuItem>
        <Link component={RouterLink} to="/2">
          {t("Menu.LiveOps.SearchPlayers")}
        </Link>
      </MenuItem>
      <MenuItem>
        <Link component={RouterLink} to="/3">
          {t("Menu.LiveOps.SearchPlayers")}
        </Link>
      </MenuItem>
    </MenuGroup>
  </div>
));
