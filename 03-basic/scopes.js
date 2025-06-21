let a = 200
if(true){                     // Block Scope
    let a = 10
    //console.log("Inner: ", a);
}

//console.log("Outer: ", a);   // Global Scope

//++++++++++INTRESTING++++++++++++++

function addOne(num) {
    return num+1
}
addOne(5)    // if called before initialization no error will occur.

const addTwo = function(num1) {
    return num1 + 2
}
addTwo(5)   // if called before initialization Reference error will occur.
