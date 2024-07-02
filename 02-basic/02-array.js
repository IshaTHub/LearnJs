const is = ['ab', 'cd', 'ef', 'gh']
const isha = ['ij', 'kl', 'mn']
// is.push(isha)  // push will treat isha as single data 
// console.log(is);
// console.log(is[4][1]);

// const tiwari =is.concat(isha);
// console.log(tiwari);

//Spread operator

const IshaTiwari = [...is, ...isha]
console.log(IshaTiwari);

const pqr = [1,2,3,[4,5],[44,[7,8,9]]]
const abc =pqr.flat(Infinity)   // simplifies complex array into elements
console.log("A ",abc);

console.log(Array.isArray("ISHATIWARI"));
console.log(Array.from("ISHATIWARI"));

const s1 =11;
const s2 = 22;
const s3= 33;

console.log(Array.of(s1,s2,s3));