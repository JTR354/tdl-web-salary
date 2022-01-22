const { add } = require("./02-add");

describe("add", () => {
  test("should first", () => {
    expect("" + add(1)(2)(3)).toBe("6");
    expect(+add(1)(2)(3)).toBe(6);
  });
});
