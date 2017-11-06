'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代
  let re = [];
  if(number_a<number_b){
    for(var i = number_a; i<=number_b; i++){
        re.push(i);
    }
    return re;

  }
  if(number_a > number_b){
    for(var i = number_a; i>=number_b; i--){
        re.push(i);
    }
    return re;
  }
  if(number_a = number_b){

    re.push(number_a);
    return re;
  }
  console.log(re);

}

module.exports = get_integer_interval;

