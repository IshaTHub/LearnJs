const myNum = [1,2,3,4]

const Tot = myNum.reduce(function (acc, curr)  {
    console.log(`acc: ${acc} and curr: ${curr}`);
   return acc+curr
},2)                 // accumalator initial value - 0
console.log(Tot);

// Through arrow function

const total = myNum.reduce( (acc, curr) => acc+curr, 0)
console.log(total);