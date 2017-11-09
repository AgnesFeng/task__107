'use strict';
var even_group_calculate_average = function(collection){
  let even_ind = collection.filter(function (tt,index) {
    return (index%2 !==0);
  });
  let even = even_ind.filter(function (tt,index) {
    return (tt%2 ==0);
  });
  //console.log(even);

  var a=[];
  var b=[];
  var c=[];
  var re =[];
  if(even.length !==0){
    even.forEach(function (tt,index) {
      tt = tt+'';
      //console.log(tt.length);
      if(tt.length == 1){
        a.push(parseInt(tt));
      }
      else if(tt.length == 2)
        b.push(parseInt(tt));
      else
        c.push(parseInt(tt));
    });
    // console.log(a);
    // console.log(b);
    // console.log(c);
    if(a.length ==0 && b.length == 0){
      let sum = c.reduce(function (pp,cc) {
        return pp+cc;
      });
      var m = [];
      m.push(sum/c.length)
      return m;
    }else{
      let sum1 = a.reduce(function (pp,cc) {
        return pp+cc;
      });
      re.push(sum1/a.length);
      let sum2 = b.reduce(function (pp,cc) {
        return pp+cc;
      });
      re.push(sum2/b.length);
      let sum3 = c.reduce(function (pp,cc) {
        return pp+cc;
      });
      // console.log(sum1);
      // console.log(a.length);
      re.push(sum3/c.length);
      return re;
    }
  }else{
    a = [0];
    return a;
  }
};
module.exports = even_group_calculate_average;

var collection = [1, 2, 3, 4, 5, 6, 12, 454, 324, 21, 45, 644, 34, 56, 345, 570, 8, 4, 14];

