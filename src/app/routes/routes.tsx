import React, { useState, useEffect } from "react";
import {
  Switch,
  Route,
  Link as RouterLink,
  useParams,
  generatePath,
  matchPath,
  useLocation
} from "react-router-dom";
import { menuResource } from "src/api/resources/menu-resource";
import { View } from "src/components/views/view";
import { renderView } from "src/components/views/render-view";
import { Breadcrumbs, Link, Typography, Box } from "@material-ui/core";
import { flatten } from "lodash";

export const PATHS = {
  liveOps: {
    searchPlayers: (id = "/:id?", tab = "/:tab?") =>
      `/live-ops/search-players${id}${tab}`
  }
};

type Breadcrumb = { name: string; to: string };
type ViewWithBreadcrumbs = { view: View; breadcrumbs: Array<Breadcrumb> };

const getMenuRoutes = (
  routes: Array<any>,
  view: View,
  breadcrumbs: Array<Breadcrumb> = []
) => {
  const chilrenRoutes = view.children
    ? flatten(
        view.children.map(v =>
          getMenuRoutes(routes, { ...v, parent: view }, [
            ...breadcrumbs,
            { name: view.name, to: view.url }
          ])
        )
      )
    : [];

  return [
    ...routes,
    ...chilrenRoutes,
    ...(view.parent?.view === "tabs"
      ? []
      : [
          {
            view,
            breadcrumbs
          }
        ])
  ];
};

export const Routes = () => {
  const [root, setRoot] = useState<View>();
  useEffect(() => {
    menuResource.GET().then(({ data }) => setRoot(data));
  }, []);
  const routes = root && getMenuRoutes([], root);

  return (
    <Switch>
      {routes &&
        routes.map(({ view, breadcrumbs }) => (
          <Route
            key={view.name}
            path={view.url}
            render={({ match }) => (
              <React.Fragment>
                <Breadcrumbs aria-label="breadcrumb">
                  {breadcrumbs.map(bc => (
                    <Link
                      key={bc.name}
                      color="inherit"
                      component={RouterLink}
                      to={generatePath(bc.to, match.params)}
                    >
                      {bc.name}
                    </Link>
                  ))}
                  <Typography>{view.name}</Typography>
                </Breadcrumbs>
                <Box pt={2}>{view && renderView(view, match)}</Box>
              </React.Fragment>
            )}
          />
        ))}
    </Switch>
  );
};
