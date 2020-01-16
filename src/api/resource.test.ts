import { getMethod } from "./resource";

describe("resourse", () => {
  const getFetchMock = response => req => {
    console.log(req);

    return Promise.resolve(response);
  };

  describe("method", () => {
    it("works", async () => {
      const response = { test: 123 };
      const fetch = jest.fn(getFetchMock(response));
      const method = getMethod("/api/foo-bar", "POST", fetch);
      const result = await method({
        queryParams: { a: "a", b: "b" },
        body: { c: "c", d: "d" }
      });
      expect(fetch).toBeCalledWith(
        expect.objectContaining({
          url: "localhost/api/foo-bar?a=a&b=b",
          _bodyText: '{"c":"c","d":"d"}'
        })
      );
      expect(result).toEqual(result);
    });
  });
});
