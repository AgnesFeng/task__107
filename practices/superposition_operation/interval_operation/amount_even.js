'use strict';

function amount_even(collection) {

  //在这里写入代码
  let c = collection.filter(function (tt) {
    return (tt%2 ==0);
  });
  let b = c.reduce(function (pp,cc) {
    return pp+cc;
  });
  return b;
}

module.exports = amount_even;
