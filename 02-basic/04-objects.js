//const User = new Object();  // singleton declaration
const Users = {}              // non singleton declaration done

// Object inside Object
 const abc = {
    email: "efg@gmail.com",
    fullname: {
        username: {
            firstName: "isha",
            lastName: "Tiwari"
        }
    }
 }

// access
console.log(abc.fullname.username.lastName);

const obj1 = { 1: "a", 2:"b" }
const obj2 = { 4: "c", 3:"d" }
//combined
//const obj3 = Object.assign({}, obj1,obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

// De-Structuring
const cc = {
    ccN: "hindi",
    price: 22,
    Master: "Ishaaa"

}

const {Master: mas} = cc  //changing name
console.log(mas);