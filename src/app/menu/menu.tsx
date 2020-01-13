import React from "react";
import { withTranslation } from "react-i18next";
import { Link, Box } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { PATHS } from "src/app/routes/routes";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400
  }
});

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
      </TreeView>
    </Box>
  );
});
