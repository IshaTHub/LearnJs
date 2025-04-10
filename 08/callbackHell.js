console.log("This is line one");

setTimeout(fuction(){             
  console.log("This is line two")
},5000);

//job of this setTimeout is to execute this function after 5 sec to perform asyncronous operations in js

console.log("This is line three");

//callback example for shopping cart

const cart = ["shoes", "bags", "hats"];
//1. create order
//2. payment
//3. order summary page 
//4. Update wallet

api.createOrder(cart, function(){
  api.proceedToPayment(function(){
    api.summaryOfOrder(function(){
      api.updateWallet();
    })
    });
});
// this becomes callback hell, function calling inside other function and then other.
// this type of code structure is very unmaintainable and unreadable
// also called pyramid of doom


// INVERSION OF CONTROL
//when we loose the control of code while using callbacks
// For eg: we have given the 

