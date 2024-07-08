function myName(){
    console.log("My Name is Isha");
}
//myName()

function addTwoNo(num1, num2){
    console.log(num1+num2)
}

//const res = addTwoNo(4,5);

//console.log("result:", res)  // o/p undefined

function addTwoNum(num1, num2){
    let result =num1+num2
    return result
    console.log("ish");  // unreachable code due to function defination rule
}
const result = addTwoNum(5,5);

console.log("result:", result)

function user(username){
    return `${username} just logged in`
    console.log();
}

console.log(user("samridhi"));
console.log(user());   // o/p undefined just logged in 

//Rest or Spread operator
function calShopCart(val1, val2, ...items) {  // in this case '...' is called rest operator
    return items
}
console.log(calShopCart(22,33,444,555));

// how to pass objects to functions
const obj1 = {
    name: "riya",
    price: 199,
    email: "riya@google.com",
    pno: 2345
}

function myobj(anyObj) {
    console.log(`Username is ${anyObj.email} and price is ${anyObj.pno}`);
}
//myobj(obj1);   // func + orignal obj
myobj({
    email: "riya@google.com",
    pno: 2345
})

//passing arrays to function
const myArr = [22,33,44,55,666,777]
function newArr(getArr) {
    return getArr[4]
}
console.log(newArr(myArr));