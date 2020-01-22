import React, { useState, useEffect } from "react";
import { Pagination, resource } from "src/api";
import { Grid } from "@material-ui/core";
import { Search } from "src/components/search";
import {
  withRouter,
  RouteComponentProps,
  useParams,
  generatePath
} from "react-router-dom";
import { EnhancedTable } from "src/components/enhanced-table";
import { fetchUsers } from "../../../api/resources/users-resource";

export type TableViewProps = RouteComponentProps & {
  editUrl: string;
  dataUrl: string;
  idField?: string;
  idParam?: string;
  match?: any;
};

export const TableView = withRouter<any, any>(
  ({
    editUrl,
    dataUrl,
    idParam = "id",
    idField = "id",
    history,
    match
  }: TableViewProps) => {
    const [rows, setRows] = useState<Array<any>>([]);
    const [pagination, setPagination] = useState<Pagination | undefined>();
    const { params } = match;

    useEffect(() => {
      resource<any>(dataUrl, fetchUsers)
        .GET()
        .then(({ data, pagination }) => {
          data && setRows(data.map(d => ({ ...d, selected: false })));
          setPagination(pagination);
        });
    }, [dataUrl]);

    const select = selectedRows =>
      setRows(
        rows.map(row =>
          selectedRows.indexOf(row) > -1
            ? { ...row, selected: !row.selected }
            : row
        )
      );

    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Search />
        </Grid>
        <Grid item xs={12}>
          <EnhancedTable
            keyBy="name"
            rows={rows}
            select={select}
            title={dataUrl}
            onEditClick={row => {
              history.push(
                generatePath(editUrl, { ...params, [idParam]: row[idField] })
              );
            }}
          />
        </Grid>
      </Grid>
    );
  }
);
