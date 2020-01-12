import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { useTableStyles } from "./styles";
import { TableToolbar } from "./table-toolbar";
import { Order, stableSort, getSorting } from "./sorting";
import { EnchancedTableHead } from "./enchanced-table-head";
import { getColumns } from "./get-columns";
import { Data } from "./data";

export type Select = (selectedRows: Array<Data>) => void;

export type EnhancedTableProps = {
  rows: Array<Data>;
  select: Select;
  keyBy: string;
  title: string;
  onEditClick?: () => void;
};

export const EnhancedTable: React.FC<EnhancedTableProps> = ({
  rows,
  select,
  keyBy,
  title,
  onEditClick
}: EnhancedTableProps) => {
  const classes = useTableStyles();
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<string>();
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string
  ): void => {
    const isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDense(event.target.checked);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const selected = rows.filter(row => row.selected);
  const cols = getColumns(rows);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableToolbar
          numSelected={selected.length}
          title={title}
          onEditClick={onEditClick}
        />
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            <EnchancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={(): void => select(rows)}
              onRequestSort={handleRequestSort}
              cols={cols}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort<Data>(rows, getSorting<Data>(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(): void => select([row])}
                      role="checkbox"
                      aria-checked={row.selected}
                      tabIndex={-1}
                      key={row[keyBy]}
                      selected={row.selected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={row.selected}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </TableCell>
                      {cols.map(col => (
                        <TableCell
                          key={col.name}
                          align={col.type === "number" ? "right" : "left"}
                        >
                          {row[col.name]}
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
};
