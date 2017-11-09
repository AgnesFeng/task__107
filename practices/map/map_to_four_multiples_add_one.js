'use strict';
var map_to_four_multiples_add_one = function(collection){
  var a= collection.map(function (tt) {
    tt = tt*4+1;
    return tt;
  });
  return a;
};

module.exports = map_to_four_multiples_add_one;
