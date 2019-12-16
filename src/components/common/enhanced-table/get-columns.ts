import { Data } from "./data";
import { flow } from "lodash";
import { map, filter, toPairs } from "lodash/fp";

export type ColumnDefinition = {
  name: string;
  type: string;
  disablePadding?: boolean;
};

export const IGNORE_FIELDS = ["selected"];

export const getColumns = (
  rows: Array<Data>,
  ignore: Array<string> = IGNORE_FIELDS
): Array<ColumnDefinition> =>
  flow(
    rows => (rows && rows.length > 0 ? rows[0] : {}),
    toPairs,
    filter(([name]) => !ignore.includes(name)),
    map(([name, value]) => ({ name, type: typeof value }))
  )(rows);
