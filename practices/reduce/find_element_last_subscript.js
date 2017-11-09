'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  let a;
  var x = (collection.reduce(function (pre, item, index, array) {
    if (item == element && index !== array.indexOf(element)) {
      // console.log(item);
      a = index;
      // console.log(a);
      return a;
    }
  }));
  return a;
}
module.exports = calculate_elements_sum;

  var collection = [1,11,27,20,4,9,15,4,1,11];
var element = 4;
  var x = (collection.reduce(function (pre,item,index,array) {
    if(item == element && index !== array.indexOf(element)){
     // console.log(item);
      let a = index;
     console.log(a);
      return a;
    }
  }));
    console.log(x);
