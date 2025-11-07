const arr = [1,2,3,4,5];

Array.prototype.myMap = function(callBackFn){
  if(typeof callBackFn!== 'function' ){
    throw new TypeError("callbackFn is not a fucntion");
  }
  const res = [];
  for(let i =0; i<this.length;i++){
    let value = this[i];
    let newVal = callBackFn(value, i, this);
    res.push(newVal);
  }
  return res;
}

function getSquareOfNum(num){
  return num*num;
}

const newArray = arr.myMap(getSquareOfNum);

//other way 

 const arr = [12,2,3,4,5];


Array.prototype.myMap = function(callbackFn){

   if( typeof callbackFn !== "function"){
    throw new TypeError("not a callbackFn functionz");
    }
  const res = new Array(this.length);

  let flag = 0 ;

 
  while(flag < this.length){
   if(this.hasOwnProperty(flag)){
     const value = this[flag];
    const newVal = callbackFn(value, flag , this);
    res[flag] = newVal;
   }
   flag++;
  }
  return res;
}

function getSquareofNum(num){
  return num * num;
}

const result = arr.myMap(getSquareofNum);
console.log(result);
const sample = {length: 3, 0: 10, 1:20, 3:30 }
const sampleRes = Array.prototype.myMap.call(sample, (d) => d * 2);
console.log(sampleRes);



