'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  let a = collection.map(function (tt) {
     return tt*3 +2;
  });
  let b = a.reduce(function (pp,cc) {
    return pp+cc;
  });
  return b;
}

module.exports = hybrid_operation;

