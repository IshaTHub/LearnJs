//Promise Chaining

// In JavaScript, promise chaining uses .then() to execute asynchronous operations sequentially, where each .then() 
// handler returns a new promise, allowing for a chain of operations to be executed one after another. 

createOrder(cart)
.then(function(orderId){
 return proceedToPayment(orderId);
})
.then(function(paymentInfo){
  return showOrderSummary(paymentInfo)
})
.then(function(){
  // ...
});
