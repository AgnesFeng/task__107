'use strict';

function compute_median(collection) {
  //在这里写入代码
  let arr = collection;
  //arr.sort();//为什么没效果？
  arr.sort(function(a,b){
    return a-b;
  });
  //console.log(arr);
  if(collection.length%2 ==0){
    for(var i=0; i<arr.length; i++){
      let re;
      let slow = arr[i];
      let fast = arr[1+2*i];

      if(fast == undefined){
        re = accAdd(slow ,arr[i-1]);
        re = re/2;
        // console.log(re);
        return re;
      }

    }
  }
  else{
    for(var i=0; i<arr.length; i++){
      let slow = arr[i];
      let fast = arr[1+2*i];
      // console.log(slow);
      // console.log(0);
      // console.log(fast);
      if(fast == undefined){

        // console.log(slow);

        return slow;
      }

    }
  }



}

module.exports = compute_median;


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
