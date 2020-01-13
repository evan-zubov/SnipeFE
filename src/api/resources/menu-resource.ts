import { resource } from "../resource";

export type MenuItem = {
  name: string;
  url?: string;
  children?: Array<MenuItem>;
};

export const menuResource = resource<Array<MenuItem>>("api/menu", request => {
  console.log(request);

  return Promise.resolve({
    data: [
      {
        name: "Menu.LiveOps",
        children: [
          {
            name: "Menu.LiveOps.SearchPlayers",
            url: "/live-ops/search-players"
          }
        ]
      }
    ]
  });
});
