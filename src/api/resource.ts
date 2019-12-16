export type MethodName = "GET" | "POST" | "DELETE" | "PUT";
export type ApiResponse<T> = { data: T };
export type QueryParams = Record<string, string>;
export type Body = Record<string, string>;
export type Method<R> = (
  queryParams: QueryParams,
  body: Body
) => Promise<ApiResponse<R>>;
export type Fetch<T> = (req: Request) => Promise<ApiResponse<T>>;

export const defaultFetcher: Fetch<GenericData> = req =>
  fetch(req)
    .then(res => res.json())
    .then(data => ({
      data
    }));

export const getMethod = <T>(
  urlString: string,
  method: MethodName,
  doFetch: Fetch<T> = defaultFetcher as Fetch<T>
): Method<T> => (
  queryParams: QueryParams,
  body: Body
): Promise<ApiResponse<T>> => {
  const url = new URL(urlString);
  if (queryParams) {
    Object.keys(queryParams).forEach(key =>
      url.searchParams.append(key, queryParams[key])
    );
  }

  const request = new Request(url.toString(), {
    method,
    body: JSON.stringify(body)
  });

  return doFetch(request);
};

export type GenericData = {};
export type Resource<T> = { [key in MethodName]: Method<T> };

export const resource = (url: string): Resource<GenericData> => ({
  GET: getMethod<GenericData>(url, "GET"),
  POST: getMethod<GenericData>(url, "POST"),
  PUT: getMethod<GenericData>(url, "PUT"),
  DELETE: getMethod<GenericData>(url, "DELETE")
});
