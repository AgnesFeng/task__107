'use strict';
function map_to_even(collection){
  var a = collection.map(function(temp){
    temp = temp*2;
    return temp;
  });
  return a;
}
module.exports = map_to_even;
