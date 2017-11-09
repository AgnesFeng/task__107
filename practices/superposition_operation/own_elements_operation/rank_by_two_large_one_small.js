'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  collection.sort(function (a,b) {
    return a-b;
  });
  //console.log(collection);
  let t = 0;
  for(var i=0;i<collection.length; i++){
    if(collection[i]<collection[i+1] && collection[i]<collection[i+2]){
      t = collection[i];
      collection[i] = collection[i+1];
      collection[i+1] = collection[i+2];
      collection[i+2] = t;
      i +=2;
    }
  }
  return(collection);


}
module.exports = rank_by_two_large_one_small;

var collection = [2, 8, 1, 9, 6, 4, 3, 10];

