'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var re = collection.filter(function (element,index,self) {
    return self.indexOf(element) == index;
  });

  return re;
}

module.exports = choose_no_repeat_number;
