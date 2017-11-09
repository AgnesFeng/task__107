'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  let c = collection.filter(function (temp) {
    return (temp % 2 == 0);
  });
  //console.log(c);
  let a = c.map(function (tt) {
    if(tt % 2 ==0 ){
      tt = String.fromCharCode('a'.charCodeAt()+tt-1);
      //console.log(tt);
    }
    return tt;
  });
    return a;
}

module.exports = even_to_letter;

console.log(String.fromCharCode('a'.charCodeAt()+2-1));
