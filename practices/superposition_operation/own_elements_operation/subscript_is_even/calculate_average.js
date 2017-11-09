'use strict';
var calculate_average = function(collection){
   let a = collection.filter(function (temp,index) {
      return(index %2 !==0);
   });
   let b = a.reduce(function (aa,bb) {
     return aa+bb;
   });
   return b/a.length;
};
module.exports = calculate_average;
