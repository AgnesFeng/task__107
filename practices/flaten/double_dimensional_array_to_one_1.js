'use strict';

function double_to_one(collection) {

  //在这里写入代码
  //console.log(collection + '');

  let re = (collection + '').split(',');
  console.log(re);
  let intt = re.map(function (item) {
      return parseInt(item);
  });
  return intt;
}

module.exports = double_to_one;
