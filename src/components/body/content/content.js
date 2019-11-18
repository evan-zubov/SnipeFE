import React from "react";
import { Switch, Route } from "react-router-dom";
import "./content.css";

export const Content = () => (
  <div className="content">
    <Switch>
      <Route path="/1">1</Route>
      <Route path="/2">2</Route>
      <Route path="/3">3</Route>
    </Switch>
  </div>
);
