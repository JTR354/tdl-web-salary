process.nextTick(function () {
  console.log(7);
});

new Promise(function (resolve) {
  console.log(3);
  resolve();
  console.log(4);
}).then(function () {
  console.log(5);
});

process.nextTick(function () {
  console.log(8);
});

// 3 4 7 8 5

/**
 * nodejs 中微任务 nextTick > Promise.then
 */
