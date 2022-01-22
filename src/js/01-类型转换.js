function f1() {
  var sum = 0;
  function f2() {
    sum++;
    return f2;
  }
  // 对象转数字
  f2.valueOf = function () {
    return sum;
  };
  // 对象转字符串
  f2.toString = function () {
    return sum + "";
  };
  return f2;
}

exports.f1 = f1;
