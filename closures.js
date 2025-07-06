// function along with its lexical environment binded together is known as closure.


function x(){
    var a = 1;
    function y(){
        console.log(a);
    }
    return y;
}

var z = x();
console.log(z);
z();

//this z will print function y(),
// here y will remeber the lexical environment of x() where a = 1
// so when we call z(), it will print 1