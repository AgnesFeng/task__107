'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代
  let re = [];
  if(number_a<number_b){
    for(var i = number_a; i<=number_b; i++) {
      if (i % 2 == 0) {
      re.push(i);
      }
    }
    return re;

  }
  if(number_a > number_b){
    for(var i = number_a; i>=number_b; i--){
      if(i%2 == 0)
        re.push(i);
    }
    return re;
  }
  if(number_a = number_b){
    if(number_a%2 ==0){
      var i = number_a;
      re.push(i);
    }
    return re;
  }
  //console.log(re);

}

module.exports = get_integer_interval_2;
