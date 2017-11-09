"use strict"
function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
   let a = collection_a.map(function (tamp) {
     object_b.value.forEach(function (tt) {
       if(tt == tamp.key){
         tamp.count -=1;
       }
     });
     return tamp;
   });
   return a;
}

module.exports = create_updated_collection;
