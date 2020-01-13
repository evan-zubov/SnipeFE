import React from "react";
import { Select } from "../../../../components/enhanced-table";
import { PageLayout } from "src/components/page-layout/page-layout";
import { PATHS } from "../../routes";

export type LiveOpsPageProps = {
  rows: Array<any>;
  select: Select;
};

export const LiveOpsPage: React.FC<LiveOpsPageProps> = ({
  rows,
  select
}: LiveOpsPageProps) => (
  <PageLayout
    baseRoute={PATHS.liveOps.searchPlayers}
    tableProps={{ keyBy: "name", rows, select, title: "LiveOps" }}
  />
);
