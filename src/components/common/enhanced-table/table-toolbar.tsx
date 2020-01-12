import React from "react";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import FilterListIcon from "@material-ui/icons/FilterList";
import { useToolbarStyles } from "./styles";

export interface TableToolbarProps {
  numSelected: number;
  title: string;
  onEditClick?: () => void;
}

export const TableToolbar: React.FC<TableToolbarProps> = ({
  numSelected,
  title,
  onEditClick
}: TableToolbarProps) => {
  const classes = useToolbarStyles();

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle">
          {title}
        </Typography>
      )}

      {numSelected > 0 ? (
        <React.Fragment>
          {numSelected === 1 && (
            <Tooltip title="Edit">
              <IconButton aria-label="edit" onClick={onEditClick}>
                <EditIcon />
              </IconButton>
            </Tooltip>
          )}
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </React.Fragment>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};
