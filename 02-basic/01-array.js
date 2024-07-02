const myArr = [1,2,3,4,5,6,7,8,9,10]
console.log("A ", myArr);

const myArr1 = myArr.slice(1,3) // si and ei-1
console.log(myArr1);
console.log("B " , myArr);
const myArr2 = myArr.splice(1,3) // It manipulates orignal array. It displays and includes both the si and ei both
console.log("C ", myArr);
console.log(myArr2);