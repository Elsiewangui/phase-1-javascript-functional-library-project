function myEach(collection,callback){
    if(Array.isArray(collection)){
        for(let i = 0; i< collection.length; i++){
            callback(collection[i])

        }
    }else{
        for (let key in collection){
            if(collection.hasOwnProperty(key)){
                callback (collection[key],key,collection)
            }
        }
    }
    return collection
}

function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i]));
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          result.push(callback(collection[key]));
        }
      }
    }
    return result;
}
  
  
function myReduce(collection, callback, acc) {
    const keys = Array.isArray(collection) ? collection : Object.values(collection);
    let startIdx = 0;
    if (acc === undefined) {
      acc = keys[0];
      startIdx = 1;
    }
    for (let i = startIdx; i < keys.length; i++) {
      acc = callback(acc, keys[i], collection);
    }
    return acc;
}
  
function myFind(collection, predicate) {
    const keys = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < keys.length; i++) {
      if (predicate(keys[i])) {
        return keys[i];
      }
    }
    return undefined;
}
  
  
function myFilter(collection, predicate) {
    const result = [];
    const keys = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < keys.length; i++) {
      if (predicate(keys[i])) {
        result.push(keys[i]);
      }
    }
    return result;
}
  
function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}
  
function myFirst(array, n) {
    if (n === undefined) return array[0];
    return array.slice(0, n);
}
  
  
function myLast(array, n) {
    if (n === undefined) return array[array.length - 1];
    return array.slice(array.length - n);
}
  

function myKeys(obj) {
    return Object.keys(obj);
}
  
function myValues(obj) {
    return Object.values(obj);
}
  
