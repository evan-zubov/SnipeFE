import { resource } from "../resource";
import { View } from "src/components/views/view";

export const menuResource = resource<View>("api/menu", request => {
  console.log(request);

  return Promise.resolve({
    data: {
      name: "Menu.LiveOps",
      url: "/",
      children: [
        {
          name: "Users",
          url: "/live-ops/users",
          view: "table",
          viewProps: {
            editUrl: "/live-ops/users/:userId",
            dataUrl: "/api/users"
          },
          children: [
            {
              name: "Edit",
              url: "/live-ops/users/:userId",
              view: "tabs",
              children: [
                {
                  name: "Attributes",
                  view: "table",
                  url: "/live-ops/users/:userId/attributes",
                  viewProps: {
                    editUrl: "/:projectId/edit/:userId/attributes/edit/:id",
                    dataUrl: "/api/:projectId/user/:id"
                  },
                  children: [
                    {
                      name: "Attributes.Edit",
                      url: "/live-ops/users/:userId/attributes/:id",
                      view: "form",
                      viewProps: {
                        dataUrl: "/api/users/:id",
                        fields: [
                          { name: "name", component: "text" },
                          {
                            name: "type",
                            component: "dictionary",
                            componentProps: {
                              url: "/api/types",
                              searchFrom: 3,
                              show: 5
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  name: "Other",
                  view: "tabs",
                  url: "/live-ops/users/edit/others",
                  children: [
                    {
                      name: "Attributes",
                      view: "table",
                      url: "/live-ops/users/edit/others/attributes",
                      viewProps: {
                        editUrl: "/live-ops/players/edit",
                        dataUrl: "/api/users/attributes"
                      }
                    },
                    {
                      name: "Inventory",
                      view: "table",
                      url: "/live-ops/users/edit/others/inventory",
                      viewProps: {
                        editUrl: "/live-ops/players/edit",
                        dataUrl: "/api/users/inventory"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  });
});
