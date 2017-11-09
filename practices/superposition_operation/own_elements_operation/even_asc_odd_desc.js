'use strict';
var even_asc_odd_desc = function(collection){
   let even = collection.filter(function (tt) {
     return (tt%2 ==0);
   });
   even.sort(function (a,b) {
     return a-b;
   });
   //console.log(even);
   let odd = collection.filter(function (tt) {
     return (tt%2 !==0);
   });
   odd.sort(function (a,b) {
     return b-a;
   });
   odd.forEach(function (temp) {
     even.push(temp);
   });
  return even;
};
module.exports = even_asc_odd_desc;


