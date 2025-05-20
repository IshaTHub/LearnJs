let nums = [1,2,3,4,5]; 

function double(n){
    return n*2;
}

let Arr1 = nums.map(double);
//console.log(Arr1)

let newArr = nums.filter((val) => val%2 === 0)
//console.log(newArr)

let names = 'Bilbo, Gandalf, Nazgul';
let arr = names.split(', ');
console.log(arr);