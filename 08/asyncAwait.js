// Async
// it is a keyword used before a function to create a async function

const p = new Promise((resolve, reject) => {
  resolve("Promise resolved value!!")
})

// this async function ALWAYS retrurns a PROMISE
async function getData(){
  return p;     
}
//if it returns a value then it will be automatically wrapped inside a promise and return a promise

async function handlePromise(){
 const val =  await p;
}


const dataPromise = getData();

dataPromise.then(res => console.log("res"));


//using async with await
//async and await combo are used to handle promises

//how do we used to handle promises before async and await
// function getData(){
//   p.then(res =>console.log(res));
