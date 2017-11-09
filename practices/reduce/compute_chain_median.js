'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  //创建数组
  let arr = collection.split("->");
  arr.sort();//为什么没效果？
  arr.sort(function(a,b){
      return a-b;
    });
  console.log(arr);
  //console.log(arr);
  //创建链表
  // function Node(element){
  //   this.element = element;
  //   this.next = null;
  // }

  // let a = collection.head;
  // let slow = a.next;
  // let fast = a.next.next;
  // if(fast.next ==null){
  //   let re = (slow.next+slow.next.next)/2;
  //   console.log(re);
  //   return re;
  // }else{
  //   slow = slow.next;
  //   fast = fast.next;
  // }
  for(var i=0; i<arr.length; i++){

    let slow = arr[i];
    let fast = arr[1+2*i];
    // console.log(slow);
    // console.log(0);
    // console.log(fast);
    if(fast == undefined){
      let re = (slow + arr[i-1]);
      console.log(slow);
      console.log(arr[i-1]);
      console.log('slow + arr[i-1]:'+re);
      re = accAdd(slow ,arr[i-1]);
      console.log(re);
      re = re/2;
     // console.log(re);
      return re;
    }

  }

}

module.exports = compute_chain_median;

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


//console.log(accAdd(9,8));
