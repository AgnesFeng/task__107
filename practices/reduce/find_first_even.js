'use strict';

function find_first_even(collection) {
  //在这里写入代码
  var k = 0;
  let a = collection.filter(function (tt) {

       return (tt%2 ==0);

  });
  console.log(a);
  return a[0];
}

module.exports = find_first_even;

