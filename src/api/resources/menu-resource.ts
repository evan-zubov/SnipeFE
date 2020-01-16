import { resource } from "../resource";

export type MenuItem = {
  name: string;
  view?: string;
  viewProps?: any;
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
            name: "Users",
            url: "/live-ops/users",
            view: "table",
            viewProps: {
              editUrl: "/live-ops/players/edit",
              dataUrl: "/api/users"
            },
            children: [
              {
                name: "Edit",
                url: "/live-ops/players/edit",
                view: "tabs",
                children: [
                  {
                    name: "Attributes",
                    view: "table",
                    url: "/live-ops/players/edit/attributes",
                    viewProps: {
                      editUrl: "/live-ops/players/attributes/edit/:id",
                      dataUrl: "/api/users/attributes"
                    },
                    children: [
                      {
                        name: "Attributes.Edit",
                        url: "/live-ops/players/attributes/edit/:id",
                        view: "form",
                        viewProps: { dataUrl: "/api/players/attributes/{id}" }
                      }
                    ]
                  },
                  {
                    name: "Inventory",
                    view: "table",
                    url: "/live-ops/players/edit/inventory",
                    viewProps: {
                      editUrl: "/live-ops/players/edit",
                      dataUrl: "/api/users/inventory"
                    }
                  },
                  {
                    name: "Other",
                    view: "tabs",
                    url: "/live-ops/players/edit/inventory",
                    viewProps: {
                      tabs: [
                        {
                          name: "Attributes",
                          view: "table",
                          url: "/live-ops/players/edit/attributes",
                          viewProps: {
                            editUrl: "/live-ops/players/edit",
                            dataUrl: "/api/users/attributes"
                          }
                        },
                        {
                          name: "Inventory",
                          view: "table",
                          url: "/live-ops/players/edit/inventory",
                          viewProps: {
                            editUrl: "/live-ops/players/edit",
                            dataUrl: "/api/users/inventory"
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  });
});
