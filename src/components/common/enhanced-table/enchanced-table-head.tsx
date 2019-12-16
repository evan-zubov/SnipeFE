import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useTableStyles } from "./styles";
import { Order } from "./sorting";
import { ColumnDefinition } from "./get-columns";

export type EnchancedTableHeadProps = {
  classes: ReturnType<typeof useTableStyles>;
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  onSelectAllClick: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
  order: Order;
  orderBy?: string;
  rowCount: number;
  cols: Array<ColumnDefinition>;
};

export const EnchancedTableHead: React.FC<EnchancedTableHeadProps> = ({
  classes,
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
  cols
}: EnchancedTableHeadProps) => {
  const createSortHandler = (property: string) => (
    event: React.MouseEvent<unknown>
  ): void => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {cols.map(col => (
          <TableCell
            key={col.name}
            align={col.type === "number" ? "right" : "left"}
            padding={col.disablePadding ? "none" : "default"}
            sortDirection={orderBy === col.name ? order : false}
          >
            <TableSortLabel
              active={orderBy === col.name}
              direction={order}
              onClick={createSortHandler(col.name)}
            >
              {col.name}
              {orderBy === col.name ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
