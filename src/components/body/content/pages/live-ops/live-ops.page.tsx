import React from "react";
import { EnhancedTable, Select } from "../../../../common/enhanced-table";

export type LiveOpsPageProps = {
  rows: Array<any>;
  select: Select<any>
};
export const LiveOpsPage = ({ rows, select }: LiveOpsPageProps) => (
  <EnhancedTable rows={rows} select={select} />
);
