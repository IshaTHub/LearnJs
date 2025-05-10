// Hoisting is the phenomenon in JS where we can access variables 
//and functions even before they are declared or initialized

var x = 10;

function myName(){
    console.log("My name is Isha");
}

myName();
console.log(x);
console.log(myName);

// o/p: My name is Isha
//     10
//     f myName(){
//      console.log("My name is Isha");
//     }



myName();
console.log(x);
console.log(myName);

var x = 20;

function myAge(){
    console.log("My age is 20");
}

// o/p: My age is 20
//     undefined
//     f myAge(){
//      console.log("My age is 20");
//     }
