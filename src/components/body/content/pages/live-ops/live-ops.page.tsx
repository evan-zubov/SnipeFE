import React from "react";
import { EnhancedTable, Select } from "../../../../common/enhanced-table";

export type LiveOpsPageProps = {
  rows: Array<any>;
  select: Select;
};
export const LiveOpsPage = ({ rows, select }: LiveOpsPageProps) => (
  <EnhancedTable keyBy="name" rows={rows} select={select} />
);
