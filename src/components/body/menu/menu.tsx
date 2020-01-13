import React from "react";
import { MenuGroup } from "./menu-group/menu-group";
import { withTranslation } from "react-i18next";
import { MenuItem } from "./menu-item/menu-item";
import { Link, Box } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { PATHS } from "src/components/body/content/routes";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import "./menu.css";

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400
  }
});

// export const Menu = withTranslation()(({ t }) => (
//   <div className="menu">
//     <MenuGroup name={t("Menu.LiveOps")}>
//       <MenuItem>
//<Link component={RouterLink} to={PATHS.liveOps.searchPlayers("", "")}>
//  {t("Menu.LiveOps.SearchPlayers")}
//</Link>;
//       </MenuItem>
//       <MenuItem>
//         <Link component={RouterLink} to="/2">
//           {t("Menu.LiveOps.SearchPlayers")}
//         </Link>
//       </MenuItem>
//       <MenuItem>
//         <Link component={RouterLink} to="/3">
//           {t("Menu.LiveOps.SearchPlayers")}
//         </Link>
//       </MenuItem>
//     </MenuGroup>
//   </div>
// ));

export const Menu = withTranslation()(({ t }) => {
  const classes = useStyles();

  return (
    <Box component="span" m={2}>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="1" label={t("Menu.LiveOps")}>
          <Link
            component={RouterLink}
            to={PATHS.liveOps.searchPlayers("", "")}
            color="textPrimary"
          >
            {t("Menu.LiveOps.SearchPlayers")}
          </Link>
        </TreeItem>
        <TreeItem nodeId="5" label="Documents">
          <TreeItem nodeId="6" label="Material-UI">
            <TreeItem nodeId="7" label="src">
              <TreeItem nodeId="8" label="index.js" />
              <TreeItem nodeId="9" label="tree-view.js" />
            </TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeView>
    </Box>
  );
});
