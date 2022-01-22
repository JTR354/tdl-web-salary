/**
 * 函数柯里化: 可以连续给一个函数传参,还能累计到函数内
 */

exports.add = function add(x) {
  var sum = x;
  var tmp = function (x) {
    sum += x;
    return tmp;
  };
  tmp.toString = function () {
    return sum;
  };
  tmp.valueOf = function () {
    return sum;
  };
  return tmp;
};
