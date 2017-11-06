'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let re = (collection + '').split(',');
  //console.log(re);
  let intt = re.map(function (item) {
    return parseInt(item);
  });
  let final = intt.filter(function (item,index,array) {
     return(array.indexOf(item) == index);
  });
  return final;
}

module.exports = double_to_one;
