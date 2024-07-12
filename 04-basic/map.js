const arr1 = [1,2,3,4,5,6,7,8,10]

// chaining 
const arr2 = arr1.map( (num) => num + 10 )  // o/p [11, 12, 13, 14, 15, 16, 17, 18, 20]
                 .map( (num) => num * num ) // o/p  [121, 144, 169, 196, 225, 256, 289, 324, 400]
                 .filter( (num) => num >=289 )
console.log(arr2);

