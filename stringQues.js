let users = [
  {id: 1, name: "Johnny"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(user => user.id ==1);
console.log(user.name); // John

let user2 = users.findIndex(user => user.name == "Mary");
console.log(user2); // 2

let user3  = users.filter(user => user.id < 3);
console.log(user3);

//to get length of each user name 
let users4 = users.map(user => user.name.length );
console.log(users4); // [6, 4, 4]