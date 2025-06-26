// new Map()  // Creates a new Map object
// Map.set(Key, Value)  //stores valued by key
// Map.get(Key) // retrieves the value by key
// Map.has(Key) // true/false if key exists
// Map.delete(Key) // deletes the key and value
// Map.clear() // removes all keys and values
// Map.size // returns the current element count

let map = new Map();

map.set('1', "str1");
map.set(1, "num1");
map.set(true, "bool1");


console.log(map.get('1'));

