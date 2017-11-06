'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  let a = collection_a.filter(function (item) {
    let com = collection_b.filter((b,index,array) => {
      return (item % b ==0);
    });
    //console.log(com);
    return (com.length !== 0);//不能用com ！==【】

  });
  //console.log(a);
   return a;
}

module.exports = choose_divisible_integer;
