'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var a = true;
  var b = collection_a.reduce(function(pre1,cur1){
     a = collection_b.reduce(function (pre2,cur2) {
        return (pre1==pre2 && cur1 == cur2);
     });
     return a;
  });
  return b;
}

module.exports = compare_collections;


