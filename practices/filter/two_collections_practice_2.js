'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var re = collection_a.filter(function (item) {
      return (collection_b.indexOf(item) == -1);
  });
  return re;
}

module.exports = choose_no_common_elements;
