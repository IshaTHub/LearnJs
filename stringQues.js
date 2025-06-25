let users = [
  {id: 1, name: "Johnny"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(user => user.id ==1);
console.log(user.name); // John

let user2 = users.findIndex(user => user.name == "Mary");
console.log(user2); // 2