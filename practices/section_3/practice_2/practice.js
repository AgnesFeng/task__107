function create_updated_collection(collectionA, objectB) {
  //在这里写入代码
  for(var i=0; i<collectionA.length; i++){
    for(var j=0; j<objectB.value.length; j++){
      if(collectionA[i].key == objectB.value[j] && collectionA[i].count >2)
        collectionA[i].count -=1;
    }
  }
  console.log(collectionA);
  return collectionA;
}

module.exports = create_updated_collection;
