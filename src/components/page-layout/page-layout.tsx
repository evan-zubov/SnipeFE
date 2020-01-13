import React from "react";
import { compose } from "lodash/fp";
import { Search } from "../search";
import { EnhancedTable, EnhancedTableProps } from "../enhanced-table";
import {
  Grid,
  Breadcrumbs,
  Typography,
  Link,
  Tabs,
  Tab
} from "@material-ui/core";
import {
  RouteComponentProps,
  Link as RouterLink,
  withRouter,
  useParams
} from "react-router-dom";
import { withTranslation } from "react-i18next";
import { WithT } from "i18next";

export type PageLayoutProps = RouteComponentProps &
  WithT & {
    baseRoute: (id?: string, tab?: string) => string;
    tableProps: EnhancedTableProps;
  };

export const PageLayout = compose(
  withRouter,
  withTranslation()
)(({ tableProps, baseRoute, history, t }: PageLayoutProps) => {
  const { id: editId, tab } = useParams();
  const basePath = baseRoute("", "");
  const editPath = row => baseRoute(`/${row["id"]}`, "");
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link component={RouterLink} color="inherit" to={basePath}>
            Search
          </Link>
          {editId && <Typography color="textPrimary">{editId}</Typography>}
          {tab && <Typography color="textPrimary">{tab}</Typography>}
        </Breadcrumbs>
      </Grid>
      <Grid item xs={12}>
        <Search />
      </Grid>
      <Grid item xs={12}>
        {editId ? (
          <React.Fragment>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </React.Fragment>
        ) : (
          <EnhancedTable
            {...tableProps}
            onEditClick={row => history.push(editPath(row))}
          />
        )}
      </Grid>
    </Grid>
  );
});
