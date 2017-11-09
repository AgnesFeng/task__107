'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  let c = collection.reduce(function (pre,cur,index,array) {
    if(pre > cur){
      cur = pre;
    }
    return cur;
  });
  return c;
}

module.exports = collect_max_number;
