export type ViewType = "table" | "tabs";

export type View = {
  name: string;
  view: ViewType;
  url: string;
  viewProps: any;
  children: Array<View>;
};
