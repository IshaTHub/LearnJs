function setUser(username) {
    this.username = username;
    console.log("called");
}

function createUser(username, email, pass){
    /* setUser(username)
    only reference is passed as once called its function and execution context is removed from stack  */  
    
    setUser.call(this, username);
    /* Here, call method helps to hold the reference.
       Whenever we use call() we can pass 'this' parameter
       optionally which give us current context
     */

    this.email = email;
    this.pass = pass;
}

const val = new createUser("isha", "abc@gmail.com", 12334);
console.log(val);