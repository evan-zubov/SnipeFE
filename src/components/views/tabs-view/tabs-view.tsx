import React, { useState } from "react";
import { Tabs, Tab, Box } from "@material-ui/core";
import { View } from "../view";
import { withTranslation } from "react-i18next";
import { WithT } from "i18next";
import { renderView } from "../render-view";

export type TabsViewProps = WithT & {
  tabs?: Array<View>;
};

export const TabsView = withTranslation()(({ tabs, t }: TabsViewProps) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const handleChange = (event, newVal) => setSelectedTab(newVal);

  return (
    <React.Fragment>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        {tabs && tabs.map(tab => <Tab key={tab.name} label={t(tab.name)} />)}
      </Tabs>
      <Box pt={2}>{tabs && renderView(tabs[selectedTab])}</Box>
    </React.Fragment>
  );
});
