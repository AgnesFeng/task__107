'use strict';
var single_element = function(collection_a){

  let even_ind = collection_a.filter(function (tt,index) {
    return (index%2 !==0);
  });
  //console.log(even_ind);
  var c = [];
  even_ind.forEach(function (temp,index,arr) {
    //console.log(temp+'!!!'+index+'$$$');
    if(arr.indexOf(temp) !== index){
      // console.log(temp+'temp');
      // console.log(index+'index');
      c.push(temp);
    }
  });
  if(c.length !==0){
    let a = even_ind.filter(function (tt) {
      return (tt!==c[0]);
    });
    return a;
  }else{
    return [];
  }
}


module.exports = single_element;

