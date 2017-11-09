'use strict';
var map_to_three_multiples = function(collections){

  return collections.map(function (a) {
    a = a*3;
    return a;
  });
};

module.exports = map_to_three_multiples;
