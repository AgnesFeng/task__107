'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let c = collection.filter(function (tt) {
    return (tt%2 !==0);
  });
  let b = c.reduce(function (pp,cc) {
    return pp+cc;
  });
  return b/c.length;
}

module.exports = average_uneven;
