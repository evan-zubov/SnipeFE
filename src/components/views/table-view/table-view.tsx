import React, { useState, useEffect } from "react";
import { Pagination, resource } from "src/api";
import { range, padStart } from "lodash";
import { Grid } from "@material-ui/core";
import { Search } from "src/components/search";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { EnhancedTable } from "src/components/enhanced-table";

export type TableViewProps = RouteComponentProps & {
  editUrl: string;
  dataUrl: string;
  idKey?: string;
  idParam?: string;
};

export const TableView = withRouter<any, any>(
  ({
    editUrl,
    dataUrl,
    idParam = "id",
    idKey = "id",
    history
  }: TableViewProps) => {
    const [rows, setRows] = useState<Array<any>>([]);
    const [pagination, setPagination] = useState<Pagination | undefined>();

    useEffect(() => {
      resource<Array<any>>(dataUrl, request => {
        console.log(request);

        return Promise.resolve({
          data: range(5).map(id => ({
            id,
            uid: padStart(id.toString()),
            name: `${request.url} ${id}`
          }))
        });
      })
        .GET()
        .then(({ data, pagination }) => {
          setRows(data.map(d => ({ ...d, selected: false })));
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
            onEditClick={row =>
              history.push(editUrl.replace(`:${idParam}`, row[idKey]))
            }
          />
        </Grid>
      </Grid>
    );
  }
);
