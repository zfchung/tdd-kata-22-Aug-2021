import { add } from "./index";

describe("Test add function", () => {
  it("should return 0 when input is an empty string", () => {
    expect(add("")).toEqual(0);
  });
  it("should return 0 when no input provided", () => {
    expect(add()).toEqual(0);
  });
});
