var n = 2;

function square(num){
    var ans  = num*num;
    return ans;
}

var sq1 = square(n);
var sq2 = square(3);




// On execution of the code execution context is created.
// 1. Global Execution Context
// 2. Function Execution Context

// it is done in two stages
// 1. Memory Creation
// 2. Code Execution

// Memory creation phase
// n: undefined
// square: undefined
// ans: undefined
// sq1: undefined
// sq2: undefined

// Code Execution phase
// n: 2
// square: function
// ans: undefined
// sq1: 4
// sq2: 9

//when the function is invoked a BRAND NEW EXECUTION CONTEXT is created.

// the return keyword tells the execution context to return the control of the 
// program where the function was invoked.