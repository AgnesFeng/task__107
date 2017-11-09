'use strict';
var number_map_to_word = function(collection){
  let c = collection.map(function (item) {
    let charr = String.fromCharCode(item+96);
    return charr;
  })
  return c;
};

module.exports = number_map_to_word;
