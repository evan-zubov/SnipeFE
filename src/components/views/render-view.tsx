import React from "react";
import { View } from "./view";
import { TabsView } from "./tabs-view";
import { TableView } from "./table-view";
import { FormView } from "./form-view";

const viewMap = {
  table: TableView,
  tabs: TabsView,
  form: FormView
};

const getDummyComponent = view => props => null;

export const renderView = ({ view, viewProps, children }: View, match) => {
  const ViewComponent = (view && viewMap[view]) || getDummyComponent(view);

  return (
    <ViewComponent
      {...viewProps}
      match={match}
      {...(view === "tabs" ? { tabs: children } : {})}
    />
  );
};
