'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  // return(collection.reduce(function (pre,item,index) {
  //     if(item == element){
  //       console.log(item);
  //       let a = index;
  //       console.log(a);
  //        return a;//会执行两遍
  //     }
  // }));
  //变字符串
  //   let a = collection.reduce(function (pre, cur) {
  //       let re = collection.indexOf(element);
  //       return re;
  //   });
  let re = collection.indexOf(element);
    return re;
}

module.exports = calculate_elements_sum;

