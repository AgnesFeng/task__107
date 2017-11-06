'use strict';

function get_intersection(collection_b, collection_a) {
  //在这里写入代码
  let c= [];
  for(var i=0; i<collection_a.length; i++){
    for(var j = 0; j<collection_b.length; j++){
      if(collection_a[i] == collection_b[j]){
        c.push(collection_a[i]);
      }
    }
  }
  return c;
}

module.exports = get_intersection;
