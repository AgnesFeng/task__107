'use strict';
var calculate_median = function(collection){
  let even = collection.filter(function (tt) {
    return (tt%2 ==0);
  });
  even.sort(function (a,b) {
    return a-b;
  });
  //console.log(even);

  if(even.length%2 ==0){
    var i = 0;
    var slow;
    var fast;
    var  re;
    for(i=0; i<even.length; i++){
      fast = even[1+2*i];
      slow = even[i];
      if(fast == undefined){
        re = accAdd(slow,even[i-1]);
        console.log(re);
        return re/2;
      }
    }
  }
  else{
    var i = 0;
    var slow;
    var fast;
    var  re;
    for(i=0; i<even.length; i++){
      fast = even[1+2*i];
      slow = even[i];
      if(fast == undefined){
        re = slow;

        return re;
      }
    }
  }
};
module.exports = calculate_median;
function accAdd(arg1,arg2){
  var r1,r2,m;
  try{
    r1=arg1.toString().split(".")[1].length;
    console.log(r1);
  }catch(e){
    r1=0} try{
    r2=arg2.toString().split(".")[1].length
  }catch(e){
    r2=0}
  m=Math.pow(10,Math.max(r1,r2));
  return (arg1*m+arg2*m)/m;
}
