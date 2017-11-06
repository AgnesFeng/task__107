number_a = 20;
number_b = 53;

console.log((53/26.1));
let A = [];
let k = 0;
let c ;
let cx = 'a';
let x = 0;
let kk = 0;
let kkk = 0;
for(var i=number_a; i<=number_b; i++){
  if(parseInt(i/26.1) == 0 && x <= 'z'.charCodeAt(0)){
    x = number_a + 96+k;
    k = k+1;
    cx = String.fromCharCode(x);
    A.push(cx);
    console.log(cx);
  }

  if(parseInt(i/26.1)==1 && x <= 'z'.charCodeAt(0)){
    // c.charAt(0) = 'a';
    // C.charAt(1) = cx;
    c = 'a' + String.fromCharCode(kk+97);
    x = 'a'.charCodeAt(0)+kk;
    cx = String.fromCharCode(x);
    A.push(c);
    kk = kk+1;
  }
  if(parseInt(i/26.1) == 2 && x <= 'z'.charCodeAt(0)){
    c = 'b' + String.fromCharCode(kkk+97);
    x = 'a'.charCodeAt(0)+kkk;
    cx = String.fromCharCode(x);
    A.push(c);
    kkk = kkk+1;
  }

}

console.log(A);
//
//
// var set1 = [10, 27, 28, 19, 5];
// var set2 = [5, 78, 28, 19, 23];
// let union = new Set([...set1, ...set2]);
// c = union;
// console.log(union);
// console.log(Array.from(c));
// //let x = c.toString();
// //let x = JSON.stringify(c);
// console.log(x);
// let arr = x.split(",");
// console.log(arr);
//
// let intersect = new Set([...set1].filter( x => set2.has(x)));
// let difference = new Set([...set1].filter(x => !set2.has(x)));
//
//
// console.log(intersect);
// console.log(difference);
// var arr = [1,2,1,1,44,4,4,5];
// function checkArray(para, arr) {
//   let processArr = arr.filter(function(value) {
//     return value == para;
//   });
//
//   return processArr.length;  // 这里返回数组长度或者相应处理
// }
//
// console.log(checkArray(1, numArr));
