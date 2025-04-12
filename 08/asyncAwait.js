// Async
// it is a keyword used before a function to create a async function

const p1 = new Promise((resolve, reject) => {
  setTimeout(() =>{
  resolve("Promise resolved value!!")
  },10000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() =>{
  resolve("Promise resolved value!!")
  },5000);
})


// this async function ALWAYS retrurns a PROMISE
async function getData(){
  return p;     
  //return "Hello" //value
}
//if it returns a value then it will be automatically wrapped inside a promise and return a promise

async function handlePromise(){
  console.log("Nameste World")
 const val =  await p1;       //await is a keyword that can only be used inside an async function and it resolves the promise and js engine will wait for promise to be resolved
  console.log("hello 11")
  console.log(val);

  const val2 =  await p2;       //await is a keyword that can only be used inside an async function and it resolves the promise and js engine will wait for promise to be resolved
  console.log("hello 22")
  console.log(val);
}

handlePromise();


const dataPromise = getData();

dataPromise.then(res => console.log("res"));


//using async with await
//async and await combo are used to handle promises

//how do we used to handle promises before async and await
// function getData(){
//   p.then(res =>console.log(res));


//Execution, Call stack
//Hello world will be printed immidiately
// p1 - 10 sec
// not resolved
// handle promise will move out of call stack, and will wait p1 to be resolved
// function execution will suspend
// After 10 sec, Hello 11 and Promise resolved value!! will be printed
// p2 will be already resolved as it only took 5 sec to execute
// prints Hello 22 and Promise resolved value!!
