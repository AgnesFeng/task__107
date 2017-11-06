'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  var re = collection.filter(function (item,index,array) {
      return (item%3 == 0);
  });
  return re;
}

module.exports = choose_multiples_of_three;
