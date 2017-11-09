'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  let c = collection.reduce(function (pre,cur,index,array) {
    if(pre < cur){
      cur = pre;
    }
    return cur;
  });
  return c;
}

module.exports = collect_min_number;

