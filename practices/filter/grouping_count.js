'use strict';

function grouping_count(collection) {

  //在这里写入代码
  let obj = {};
  collection.map(function (item) {
     if(obj[item]){
       obj[item]++;
     }
     else{
       obj[item] =1;
     }

  });
  console.log(obj);
     return obj;
}

module.exports = grouping_count;
