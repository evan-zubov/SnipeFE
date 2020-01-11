import React from "react";
import { EnhancedTable, Select } from "../../../../common/enhanced-table";
import { withSearch } from "../../../../common/search";

export type LiveOpsPageProps = {
  rows: Array<any>;
  select: Select;
};

export const LiveOpsPageUI: React.FC<LiveOpsPageProps> = ({
  rows,
  select
}: LiveOpsPageProps) => (
  <EnhancedTable keyBy="name" rows={rows} select={select} title="LiveOps" />
);

export const LiveOpsPage: React.FC<LiveOpsPageProps> = withSearch(
  LiveOpsPageUI
);
