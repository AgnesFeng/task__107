'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  let a = collection.reduce(function (pre,cur) {
    return (pre+cur);
  });
  let ave = a/collection.length;
  if(String(ave).indexOf(".")>-1)
    ave = Math.round(ave);
  let re = String.fromCharCode('a'.charCodeAt()+ave-1);
  console.log(re);
  return re;
}

module.exports = average_to_letter;


