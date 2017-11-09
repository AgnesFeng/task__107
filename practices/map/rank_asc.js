'use strict';
var rank_asc = function(collection){
  let a = collection.sort();
  let b = a.reverse();//换下面另一种方法
  let m;
  // function compare(x1, x2){
  //   if (x1>x2)
  //     return 1;
  //   if (x1<x2)
  //     return -1;
  //   else
  //     return 0;
  // }
  //
  // for(var i = 0;i<collection.length-1; i++){
  //
  //
  //   m = collection.sort(compare(collection[i], collection[i+1]));
  //   console.log(m);
  // }
  //console.log(m);
  return b;
};


module.exports = rank_asc;
