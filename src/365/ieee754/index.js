/**
 * S [0, 1]
 * E [1,11]
 * M [12,52]
 *
 * 获取S,E,M 之后,根据一下公式,得出10进制的数字
 * Math.pow(-1, S) * Math.pow(2, E - 1023) * (1 + M / Math.pow(2, 52))
 *
 */
exports.binaryConvert = (decimal) => {
  let S, M, E;
  S = String(decimal).startsWith("-") ? 1 : 0;
  decimal = Math.abs(decimal);
  if (decimal === 0) {
    return `${S}${"0".repeat(63)}`;
  }
  /**
   * 求对数
   * 例如:
   * log2(8)=3 表示 2的3次方等于8
   */
  /** 2的n次方, n不能超过52;   */
  const n = Math.min(Math.log2(decimal) >> 0, 52);
  const current = 2 ** n;
  let small, big;
  if (current >= decimal) {
    /**
     * 例如:
     * 2**1=2 < 3.14 < 2**2=4
     */
    big = current;
    small = 2 ** (n - 1);
  } else {
    small = current;
    big = 2 ** (n + 1);
  }
  const ratio = (decimal - small) / (big - small);
  console.log({ ratio });
  E = (n >= 0 ? n : n - 1) + 1023;
  M = Math.floor(ratio * Math.pow(2, 52));
  // console.log(n);
  // if (n >= 0) {
  //   // 大于1
  //   /**
  //    * 例如:
  //    * 2**1=2 < 3.14 < 2**2=4
  //    */
  //   const small = 2 ** n;
  //   const big = 2 ** (n + 1);
  //   // 占比
  //   console.log("cahzhi", decimal - small);
  //   const ratio = (decimal - small) / (big - small);
  //   console.log({ ratio });
  //   E = n + 1023;
  //   M = Math.floor(ratio * Math.pow(2, 52));
  // } else {
  //   // 小于1
  //   /**
  //    * 例如:
  //    * 2**-7=0.0078125 < 0.015 < 2**-6=015625
  //    */
  //   const small = 2 ** (n - 1);
  //   const big = 2 ** n;
  //   const ratio = (decimal - small) / (big - small);
  //   E = n - 1 + 1023;
  //   M = Math.round(ratio * Math.pow(2, 52));
  // }
  // [E, M] = findE();

  console.log(E, M);
  return `${S}${E.toString(2).padStart(11, "0")}${M.toString(2).padStart(
    52,
    "0"
  )}`;
};
