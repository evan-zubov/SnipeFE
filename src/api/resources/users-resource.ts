import { range, padStart } from "lodash";
import { matchPath } from "react-router";

const users = range(5).map(id => ({
  id: id.toString(),
  uid: padStart(id.toString()),
  name: `User ${id}`
}));

export const fetchUsers = request => {
  const match = matchPath<any>(
    request.url.replace("http://localhost:3000", ""),
    {
      path: "/api/users/:id?",
      exact: true,
      strict: false
    }
  );

  console.log(request);
  if (match) {
    if (request.method === "GET") {
      const data = match.params.id
        ? users.find(u => u.id === match.params.id)
        : users;
      console.log("Result: ", data);

      return Promise.resolve({
        data
      });
    }
  }

  return Promise.resolve({
    data: []
  });
};
