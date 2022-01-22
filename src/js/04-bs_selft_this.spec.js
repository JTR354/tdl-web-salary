describe("bs_self_this", () => {
  var name = "window";
  var p = {
    name: "Peter",
    getName: function () {
      var self = this;
      return function () {
        return self.name;
      };
    },
  };
  var getName = p.getName();
  var _name = getName();
  test("should first", () => {
    expect(_name).toEqual("Peter");
  });
});
