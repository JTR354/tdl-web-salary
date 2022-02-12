const { binaryConvert } = require(".");
describe("ieee754", () => {
  test("3.14", () => {
    expect(binaryConvert(3.14)).toBe(
      "0100000000001001000111101011100001010001111010111000010100011111"
    );
  });
  test("0.015", () => {
    expect(binaryConvert(0.015)).toBe(
      "0011111110001110101110000101000111101011100001010001111010111000"
    );
  });
  test("MAX_SAFE_VALUE", () => {
    expect(binaryConvert(Number.MAX_SAFE_INTEGER)).toBe(
      "0100001100111111111111111111111111111111111111111111111111111111"
    );
  });
});
