//PROMISE

//promises are used to handle async operations in javascript.
// Promise is an object representing eventual completion or failure of an async operation.

const cart = ['shoes', 'bag', 'hats'];

// here we are "PASSING" callback to another function
createOrder(cart,function(){
proceedToPayment(orderId);
}); 

//the above leads to inversion of control problem

const promise = createOrder(cart);    // this line will return us a promise i.e an empty object 
//{data:undefined}
// later this object will be filled with data automatically after async time it will take {data: orderDetails}

//we will be "ATTACHING" this callback func to our promise object. Which will be called
promise.then(function(){      //success part, if we resolve the promise
proceedToPayment(orderId);
})
  //error handling
//failure callback
.catch(function(err){      //if the promise fails, this callback will be called
  console.log(err.message);
})           

//promise gives us the gurantee that it will call this callback funtion whenever there is data inside the promise object
// it will call this just ONCE

const ANY_API = "https://api.github.com/users/ishathub"

const usre = fetch(ANY_API);  // we will get promise object inside user
//api given by browser to us to make external calls
// this fetch function returns us a promise

// [PromiseState] : initally it will be in "pending" state  "fullfilled" & "rejected"
// [PromiseResult] : data that fetch method will return

//PromiseStates are immutable

//to attach callback
user.then(fucntion(data){
  console.log(data);
})

//Producer part
// How do we create the promise
//create order will return a promise
function createOrder(cart){
  const pr = new Promise(function(resolve, reject));    //promise constructor, it takes a function which has resolve and reject functions given by javascript to build promise
      //logic of handling what we need to do inside our createOrder func or 
      //validate cart
  const err = new Error("Cart is not valid");
  if(!validateCart){
    reject(err);
  }
  const orderId = '11122'

  if(orderId){
    resolve(orderId);
  }
  
    return pr;
}


