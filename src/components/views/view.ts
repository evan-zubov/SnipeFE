export type ViewType = "table" | "tabs" | "form";

export type View = {
  name: string;
  view?: ViewType;
  url: string;
  viewProps?: any;
  children?: Array<View>;
  parent?: View;
};
