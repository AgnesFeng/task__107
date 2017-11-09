'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let c = collection.filter(function (tt) {
      return (tt%2 !==0);
  });
  console.log(c);
  let a = c.map(function (tt) {
    return tt*3 +2;
  });
  // let b = a.reduce(function (pp,cc) {
  //   return pp+cc;
  // });
  return a;
}

module.exports = hybrid_operation_to_uneven;

