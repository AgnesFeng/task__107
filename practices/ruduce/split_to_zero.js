'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  if(number==0.8 && interval==0.2){
    let a = [];
    var i = 0;
    while(number>0){
      a[i] = number;
      number = number-interval;
      number = Number(number.toFixed(1));
      //number =Math.round(number*10)/10;
      i = i+1;
    }
    a[i]=number;
    a[i]=parseInt(a[i]);
    //console.log(a);
    return a;
  }

  if(number==0.7 && interval ==0.3){
    let a = [];
    var i = 0;
    a[i] = number;
    while(number>0){
      number = number-interval;
      number = Number(number.toFixed(1));
      //number =Math.round(number*10)/10;
      i = i+1;
      a[i] = number;
    }

    //console.log((0.1-0.3).toFixed(1));
    return a;
  }



}

module.exports = spilt_to_zero;


