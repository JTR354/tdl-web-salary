const { f1 } = require("./01-类型转换");
describe("类型转换", () => {
  test("should first", () => {
    expect(+f1()).toBe(0);
    expect(+f1()()).toBe(1);
    expect(+f1()()()).toBe(2);
  });
});
