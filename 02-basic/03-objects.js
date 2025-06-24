// singleton: used in obj constructor

const mySyl = Symbol("key1")

const myObj = {
    name: "Isha",
    Age: 23,
    email: "isha@google.com",
    happy: true,
    [mySyl]: "abc"
}

// console.log(myObj["name"]);
console.log(myObj["happy"]);
// console.log(myObj[mySyl])

// myObj.Age = 22;
// console.log(myObj["Age"])
// Object.freeze(myObj)
// myObj.name = "IshaTiwari"
// console.log(myObj);

// function 
// myObj.greeting = function () {
//     console.log("Hi this is Isha");
// }
//console.log(myObj.greeting());

//console.log(myObj.greeting);  
// o/p [Function (anonymous)] >function return back, func is not executed
// only the function reference has appeared

//
myObj.greeting2 = function () {
    console.log(`Hi this is Isha, ${this.email}`); // whenever we want to reference the same object, we use 'this' keyword
}
console.log(myObj.greeting2());
