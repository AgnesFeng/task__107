'use strict';
function one_add_next_multiply_three(collection){
  let c = [];
  let sum = 0;
  collection.reduce(function (pre,cur){
      sum = pre+cur;
      c.push(sum*3);
      return cur;
  });
  console.log(c);
  return c;
}
module.exports = one_add_next_multiply_three;
