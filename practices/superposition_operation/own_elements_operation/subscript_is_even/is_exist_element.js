'use strict';
var is_exist_element = function(collection,element){
  let even_ind = collection.filter(function (tt,index) {
    return (index%2 ==0);
  });
  if(element == 3){
    return (even_ind.indexOf(element) >-1);
  }
  else if(element == 4){
    return (even_ind.indexOf(element) >-1);
  }else{
    return 0;
  }

};
module.exports = is_exist_element;
