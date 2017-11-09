'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  let k = 0;
  let result = [];
  for(var i=0; i<collection.length; i++){
    if(collection[i]%2 == 0){
       result[k] = collection[i];
       k++;
    }
  }
  //console.log(result);
  return result;
}
//console.log(collect_all_even([1, 2, 3, 4, 5]));
module.exports = collect_all_even;

var collection = [1, 2, 3, 4, 5];
var k = 0;
var result = [];
for(var i=0; i<collection.length; i++){
  if(collection[i]%2 == 0){
    //result.push(collection[i]);
    result[k] = collection[i];
    k++;
  }
}
console.log(result);

