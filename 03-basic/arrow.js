const obj1 = {
    name: "riya",
    price: 199,
    
    welcomeMsg: function() {
       // console.log(`${this.name} welcome to github`);
        //console.log(this)  // prints entire object context
    }
}

 obj1.welcomeMsg()
// obj1.name = "sam"  // context changes here
// obj1.welcomeMsg()
//console.log(this);  // o/p {}  i.e empty object

// use of this in Function
function chai() {
    console.log(this)
}
//chai()

//Arrow function () => {}

const addTwo = (num1, num2) =>{       // explicit return, {} compulsory
    return num1+num2
}
console.log(addTwo(23,7))

//or

const addThree = (a,b,c) => (a+b+c)   // Implicit return, no need of {} and return keyword
console.log(addThree(2,2,2));

//to declare object

const user = (numx) => ({username: "giya"})  // compulsory to wrap obj in () in arrow func
console.log(user(2));               