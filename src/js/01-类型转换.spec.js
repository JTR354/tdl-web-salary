const { f1 } = require("./01-类型转换");
describe("类型转换", () => {
  test("should first", () => {
    /**
     * 运算符优先级 ():21
     * + 隐式转为数字类型
     * js 数据类型:
     * string number boolean function object undefined
     */
    expect(+f1()).toBe(0);
    expect(+f1()()).toBe(1);
    expect(+f1()()()).toBe(2);
  });
});
