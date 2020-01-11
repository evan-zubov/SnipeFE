import React from "react";
import { Search } from "./search";
import { Grid, Paper } from "@material-ui/core";

export type WithSearchProps = {
  children: React.ReactNode;
};

export const WithSearch: React.FC<WithSearchProps> = ({
  children
}: WithSearchProps) => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Paper>
        <Search />
      </Paper>
    </Grid>
    <Grid item xs={6}>
      {children}
    </Grid>
  </Grid>
);
