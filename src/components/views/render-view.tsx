import React from "react";
import { View } from "./view";
import { TabsView } from "./tabs-view";
import { Typography } from "@material-ui/core";
import { TableView } from "./table-view";
import { FormView } from "./form-view";

const viewMap = {
  table: TableView,
  tabs: TabsView,
  form: FormView
};

const getDummyComponent = view => props => (
  <Typography>Unknown view type: {view}</Typography>
);

export const renderView = ({ view, viewProps, children }: View) => {
  const ViewComponent = viewMap[view] || getDummyComponent(view);

  return (
    <ViewComponent
      {...viewProps}
      {...(view === "tabs" ? { tabs: children } : {})}
    />
  );
};
