'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let x = 'a';
  let re = [];
  let k = 1;
  if(number_a < number_b){
    for(var i = number_a; i<=number_b; i++){
      re.push(x);
      var te = 'a'.charCodeAt()+k;
      k +=1;
      x = String.fromCharCode(te);
      //console.log(x);
    }
    return re;
  }
  if(number_a > number_b){
    x = 'e';
    k = 1;
    for(var i = number_a; i>=number_b; i--){
      re.push(x);
      te = 'e'.charCodeAt()-k;
      k +=1;
      x = String.fromCharCode(te);
      //console.log(x);
    }
    return re;
  }
  if(number_a == number_b) {
    x = (number_a.toString()).charCodeAt() + 48;
    var cx = String.fromCharCode(x);
    re.push(cx);
    return re;
  }

}

module.exports = get_letter_interval;
