// creating map from plain object

const obj1 = {
    name: 'John',
    age: 30,
    city: 'New York'
}


const map1 = new Map(Object.entries(obj1));

console.log(map1.get('name'));


let map = new Map();
map.set('banana', 1);
map.set('orange', 22);
map.set('meat', 4);
 
let obj = Object.fromEntries(map.entries());
console.log(obj.orange);