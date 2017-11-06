'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var c = collection_a.filter(function (temp,index,array) {
       return (collection_b.indexOf(temp) != -1);
  });
  return c;
}

module.exports = choose_common_elements;
