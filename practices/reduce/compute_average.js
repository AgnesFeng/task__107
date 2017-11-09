'use strict';

function compute_average(collection) {
  //在这里写入代码
  let re = 0;
  let a = collection.reduce(function (pre,cur) {
      return pre + cur;
  });
  re = a/collection.length;
  return re;
}

module.exports = compute_average;

