'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  // let c = new Set([...collection_a,...collection_b]);
  //   return Array.from(c);
  let c = collection_a.concat(collection_b);

  return (c.filter(function (tt,index,array) {
    return array.indexOf(tt) == index;
  }))

}

module.exports = get_union;

