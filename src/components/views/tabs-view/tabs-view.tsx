import React from "react";
import { Tabs, Tab, Box } from "@material-ui/core";
import { View } from "../view";
import { withTranslation } from "react-i18next";
import { WithT } from "i18next";
import { renderView } from "../render-view";
import {
  useParams,
  useHistory,
  Route,
  useLocation,
  Switch
} from "react-router-dom";

export type TabsViewProps = WithT & {
  tabs?: Array<View>;
  match?: any;
};

export const TabsView = withTranslation()(
  ({ tabs, t, match }: TabsViewProps) => {
    const location = useLocation();
    const selectedIndex =
      tabs && tabs.findIndex(t => location.pathname.startsWith(t.url));
    const tabIndex = selectedIndex === -1 ? 0 : selectedIndex;
    const history = useHistory();
    const handleChange = (e, index) => tabs && history.push(tabs[index].url);

    return (
      <React.Fragment>
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {tabs && tabs.map(tab => <Tab key={tab.name} label={t(tab.name)} />)}
        </Tabs>
        <Box pt={2}>
          <Switch>
            {tabs &&
              tabs.map(tab => (
                <Route
                  key={tab.name}
                  path={tab.url}
                  render={({ match: tabMatch }) => renderView(tab, tabMatch)}
                />
              ))}
            <Route path={match.path}>
              {tabs && renderView(tabs[0], match)}
            </Route>
          </Switch>
        </Box>
      </React.Fragment>
    );
  }
);
