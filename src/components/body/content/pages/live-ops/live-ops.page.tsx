import React from "react";
import { EnhancedTable, Select } from "../../../../common/enhanced-table";
import { WithSearch } from "../../../../common/search";

export type LiveOpsPageProps = {
  rows: Array<any>;
  select: Select;
};
export const LiveOpsPage: React.FC<LiveOpsPageProps> = ({
  rows,
  select
}: LiveOpsPageProps) => (
  <WithSearch>
    <EnhancedTable keyBy="name" rows={rows} select={select} title="LiveOps" />
  </WithSearch>
);
