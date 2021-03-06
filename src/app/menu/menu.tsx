import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { Link, Box } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { menuResource } from "../../api/resources/menu-resource";
import { View } from "src/components/views/view";

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400
  }
});

const renderMenuItem = (classes, t, { name, url, children }: View) => (
  <TreeItem
    key={name}
    nodeId={name}
    label={
      url ? (
        <Link key={name} component={RouterLink} to={url} color="textPrimary">
          {t(name)}
        </Link>
      ) : (
        t(name)
      )
    }
  >
    {children && children.map(c => renderMenuItem(classes, t, c))}
  </TreeItem>
);

export const Menu = withTranslation()(({ t }) => {
  const classes = useStyles();
  const [menuRoot, setMenuRoot] = useState<View>();
  useEffect(() => {
    menuResource
      .GET({ queryParams: { a: "1", b: "2" } })
      .then(({ data }) => setMenuRoot(data));
  }, []);

  return (
    <Box component="span" m={2}>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {menuRoot && renderMenuItem(classes, t, menuRoot)}
      </TreeView>
    </Box>
  );
});
