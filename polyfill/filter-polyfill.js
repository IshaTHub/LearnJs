const arr = [1,2,3,4,5];

function transformedArray(value, index, array){
  return value % 2 === 0;
}

const newArray = filterFunction(arr ,transformArray);
console.log(newArray);

function filterFunction(dataArray, callbackFn, thisArg){
  let result = [];
  for(let i = 0; i<dataArray.length;i++){
    let value  = dataArray[i];
    let needToKnow = callbackFn(value, i, dataArray);
    needToKnow && result.push(value);
  }
  return result;
}


// o/p [2,4]
