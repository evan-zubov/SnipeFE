import url from "url";

export type MethodName = "GET" | "POST" | "DELETE" | "PUT";
export type Pagination = {
  currentPage: number;
  pageSize: number;
  totalPages: number;
};
export type ApiResponse<T> = {
  data: T;
  pagination?: Pagination;
};
export type QueryParams = Record<string, string>;
export type Body = Record<string, string>;
export type Method<R> = (p?: RequestParams) => Promise<ApiResponse<R>>;
export type Fetch<T> = (req: Request) => Promise<ApiResponse<T>>;
export type RequestParams = {
  queryParams?: QueryParams;
  body?: Body;
};

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
): Method<T> => ({ queryParams, body }: RequestParams = {}): Promise<
  ApiResponse<T>
> => {
  const request = new Request(
    url.format({
      host: window.location.host,
      pathname: urlString,
      query: queryParams
    }),
    {
      method,
      body: JSON.stringify(body)
    }
  );

  return doFetch(request);
};

export type GenericData = {};
export type Resource<T> = { [key in MethodName]: Method<T> };

export const resource = <T>(url: string, doFetch?: Fetch<T>): Resource<T> => ({
  GET: getMethod<T>(url, "GET", doFetch),
  POST: getMethod<T>(url, "POST", doFetch),
  PUT: getMethod<T>(url, "PUT", doFetch),
  DELETE: getMethod<T>(url, "DELETE", doFetch)
});
