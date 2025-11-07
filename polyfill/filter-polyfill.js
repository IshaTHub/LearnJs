//step:1

const arr = [1,2,3,4,5];

const obj = {name: 'magic'}

function transformedArray(value, index, array){
  return value % 2 === 0;
}

const newArray = filterFunction(arr ,transformArray, obj);
console.log(newArray);

function filterFunction(dataArray, callbackFn, thisArg){
  let result = [];
  for(let i = 0; i<dataArray.length;i++){
    let value  = dataArray[i];
    let needToKnow = callbackFn.call(thisArg,value, i, dataArray);
    needToKnow && result.push(value);
  }
  return result;
}


// o/p [2,4]

//in above we still cannot call this filter function to Array, because we have not added it to Prototype chain

//Step:2 

const arr1 = [1,2,3,4,5]

Array.prototype.myFilter = function(callbackFn){
  callbackFn(value, index, arr)
  //console.log(this) o/p:[1,2,3,4,5] because value of this depends on how we call a function
}

function TransformFn(ele, index, ar){
  return ele % 2 === 0;
}

const res = arr.myFilter(TransformFn, thisArgs);

console.log(res);




