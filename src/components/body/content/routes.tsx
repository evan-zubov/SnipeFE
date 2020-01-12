import React from "react";
import { Switch, Route } from "react-router-dom";
import { LiveOpsPageConatiner } from "./pages/live-ops/live-ops.page.container";

export const PATHS = {
  liveOps: {
    searchPlayers: (id = "/:id?", tab = "/:tab?") =>
      `/live-ops/search-players${id}${tab}`
  }
};

export const Routes = () => (
  <Switch>
    <Route path={PATHS.liveOps.searchPlayers()}>
      <LiveOpsPageConatiner />
    </Route>
    <Route path="/2">2</Route>
    <Route path="/3">3</Route>
  </Switch>
);
