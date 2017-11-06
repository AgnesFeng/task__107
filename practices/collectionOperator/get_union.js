'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  let c = new Set([...collection_a,...collection_b]);
    return Array.from(c);
}

module.exports = get_union;

