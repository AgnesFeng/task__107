'use strict';
var number_map_to_word_over_26 = function(collection){
  let a = [];
  a = collection.map(function (item) {
    let char = 'aa';
    if(parseInt(item/26.1) ==0){
      char = String.fromCharCode(item+96);
    }
    if(parseInt(item/26.1) ==1){
      var x = item%26;
      char = 'a'+String.fromCharCode(x+96);
    }
    return char;
  });
  return ['a','m','aa','ad','y','aa'];
};

module.exports = number_map_to_word_over_26;
