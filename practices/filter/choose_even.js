'use strict';

function choose_even(collection) {

  //在这里写入代码
  var re = collection.filter(function(element,index,array)  {
    return (element%2 == 0);
  })
  return re;


}

module.exports = choose_even;
