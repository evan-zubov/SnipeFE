import React from "react";
import { Search } from "./search";
import { Grid, Paper } from "@material-ui/core";

export const withSearch = <T extends any>(
  WrappedComponent: React.ComponentType<T>
) => props => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Paper>
        <Search />
      </Paper>
    </Grid>
    <Grid item xs={6}>
      <WrappedComponent {...props} />
    </Grid>
  </Grid>
);
