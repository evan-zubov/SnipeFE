import { forEach } from "lodash";

export type MethodName = "GET" | "POST" | "DELETE" | "PUT";
export type ApiResponse = { data: any };
export type Method = (queryParams: Object, body: Object) => Promise<ApiResponse>;
export type Fetch = (req: Request) => Promise<ApiResponse>;

export const defaultFetcher: Fetch = req => fetch(req).then(res => res.json()).then(data => ({
    data
}));

export const getMethod = (urlString: string, method: MethodName, doFetch: Fetch = defaultFetcher): Method => (
  queryParams,
  body
) => {
  const url = new URL(urlString);
  if (queryParams) {
    forEach(queryParams, (value, key) => {
      url.searchParams.append(key, value);
    });
  }

  const request = new Request(url.toString(), {
    method,
    body: JSON.stringify(body)
  });

  return doFetch(request);
};

export type Resource = { [key in MethodName]: Method };
export const resource = (url: string) => {};
