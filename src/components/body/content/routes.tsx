import React from "react";
import { Switch, Route } from "react-router-dom";
import { EnhancedTable } from "./pages/page-1/page-1";

export const PATHS = {
  liveOps: {
    searchPlayers: "/live-ops/search-players"
  }
};

export const Routes = () => (
  <Switch>
    <Route path={PATHS.liveOps.searchPlayers}>
      <EnhancedTable />
    </Route>
    <Route path="/2">2</Route>
    <Route path="/3">3</Route>
  </Switch>
);
