function reverseNum(num){
let reversed  = 0;
while(num>0){
    let digit  = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num/10);
}
}
let ans  = reverseNum(12345);
console.log(ans); // 54321