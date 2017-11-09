function count_same_elements(collection) {
  //在这里写入代码
  var obj = {name:'a',summary:0};//初始化
  var result = [];
  var k = 0;
  var j = 1;
  var num = 0;
  for(var i=0;i<collection.length; i++){

    if(i == collection.length-1){//处理最后一个
      var s = collection[i].charAt(0);
      j = parseInt(collection[i].charAt(2));
      obj = {name: s, summary: j};
      result.push(obj);
    }
    else{
      if(collection[i].charAt(0)==collection[i+1].charAt(0)) {
        j +=1;
        if(collection[i].length  !=1){
          if(collection[i].length ==5){
            num = parseInt(collection[i].slice(2,4));
            j = j+num-1;

          }else{
            num = parseInt(collection[i].slice(2,3));
            j = j+num-1;
          }
        }

      }else {
        if(collection[i].length  !=1){
          if(collection[i].length ==5){
            num = parseInt(collection[i].slice(2,4));
            j = j+num-1;

          }else{
            num = parseInt(collection[i].slice(2,3));
            j = j+num-1;
          }
        }
        var s = collection[i].charAt(0);
        obj = {name: s, summary: j};
        result.push(obj);
        j = 1;
      }
    }


    //它最后一个是undefined
  }

  //console.log(result);
  return result;
}

module.exports = count_same_elements;
