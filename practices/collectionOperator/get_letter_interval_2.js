'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let A = [];
  let k = 0;
  let c ;
  let cx = 'a';
  let x = 0;
  let kk = 0;
  let kkk = 0;

//x=149;//超过了
//console.log('a'.charCodeAt());
//console.log(String.fromCharCode(120));
// console.log(String.fromCharCode(1));

  if(number_a > number_b){

    var t = number_a;
    number_a = number_b;
    number_b = t; //注意，因为交换了a和b，所以还会执行下一个if，所以必须在各自的if中return
    for(var i=number_a; i<=number_b; i++){
      if(parseInt(i/26.1) == 0 && x <= 'z'.charCodeAt(0)){
        x = number_a + 96+k;
        k = k+1;
        cx = String.fromCharCode(x);
        A.push(cx);
        //console.log(cx);
      }

      if(parseInt(i/26.1)==1 && x <= 'z'.charCodeAt(0)){
        c = 'a' + String.fromCharCode(kk+97);
        x = 'a'.charCodeAt(0)+kk;
        cx = String.fromCharCode(x);
        A.push(c);
        kk = kk+1;
      }
      if(parseInt(i/26.1) == 2 && x <= 'z'.charCodeAt(0)) {
        c = 'b' + String.fromCharCode(kkk + 97);
        x = 'a'.charCodeAt(0) + kkk;
        cx = String.fromCharCode(x);
        A.push(c);
        kkk = kkk + 1;
      }
    }

    A =  A.reverse();
    //console.log(A);
    return A;
  }


  if(number_a <= number_b){
    for(var i=number_a; i<=number_b; i++){
      if(parseInt(i/26.1) == 0 && x <= 'z'.charCodeAt(0)){
        x = number_a + 96+k;
        k = k+1;
        cx = String.fromCharCode(x);
        A.push(cx);
        //console.log(x);
      }

      if(parseInt(i/26.1)==1 && x <= 'z'.charCodeAt(0)){
        // c.charAt(0) = 'a';
        // C.charAt(1) = cx;
        if(i%26 !==0 ){
          c = 'a' + String.fromCharCode((i%26)+96);
        }else{
          c = 'a' + 'z';
        }
        x = 'a'.charCodeAt(0)+kk;
        cx = String.fromCharCode(x);
        A.push(c);
        kk = kk+1;
      }
      if(parseInt(i/26.1) == 2 && x <= 'z'.charCodeAt(0)) {
        c = 'b' + String.fromCharCode(kkk + 97);
        x = 'a'.charCodeAt(0) + kkk;
        cx = String.fromCharCode(x);
        A.push(c);
        kkk = kkk + 1;
      }
    }
    //console.log(A);
    return A;
  }


}

module.exports = get_letter_interval_2;

