"use strict"

function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  let a = collection_a.filter(function (temp,index) {
    return (collection_b.indexOf(temp) !==-1);

  });
  return a;
}

module.exports = collect_same_elements;
