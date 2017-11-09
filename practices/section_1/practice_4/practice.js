"use strict"

function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  let a = collection_a.filter(function (temp,index) {
    return (collection_b.value.indexOf(temp.key) !==-1);

  });
  let b = a.map(function (tt) {

    let v = (tt.key);
    return v;
  });
  return b;
}
module.exports = collect_same_elements;
