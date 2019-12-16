export type SortCheck = -1 | 0 | 1;

export function desc<T>(a: T, b: T, orderBy?: string): SortCheck {
  if (!orderBy) {
    return 0;
  }

  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

export function stableSort<T>(array: T[], cmp: (a: T, b: T) => number): T[] {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;

    return a[1] - b[1];
  });

  return stabilizedThis.map(el => el[0]);
}

export type Order = "asc" | "desc";

export function getSorting<T>(
  order: Order,
  orderBy?: string
): (a: T, b: T) => number {
  return order === "desc"
    ? (a, b): SortCheck => desc(a, b, orderBy)
    : (a, b): number => -desc(a, b, orderBy);
}
