'use strict';

function find_last_even(collection) {
  //在这里写入代码
  let a = collection.filter(function (tt) {

    return (tt%2 ==0);

  });
  //console.log(a);
  let b = a.reduce(function (pre,cur) {
     return cur;
  });
  return b;
}

module.exports = find_last_even;
