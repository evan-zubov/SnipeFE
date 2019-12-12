import React from "react";
import { Switch, Route } from "react-router-dom";
import "./content.css";
import { EnhancedTable } from "./pages/page-1/page-1";

export const Content: React.FunctionComponent = () => (
  <div className="content">
    <Switch>
      <Route path="/1">
        <EnhancedTable />
      </Route>
      <Route path="/2">2</Route>
      <Route path="/3">3</Route>
    </Switch>
  </div>
);
