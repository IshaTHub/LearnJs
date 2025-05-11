let user = {
	name: "John Doe",
	age: 30,
	email: "john.doe@example.com",
};

let clone = {};

for (let key in user) {
	clone[key] = user[key];
}

clone.name = "isha";
// console.log(user);
// console.log(clone);


// Object.assign
let user1 = {
    canView: true,
    canEdit: false,
};

Object.assign(user, user1);
console.log(user)

let clone1 = Object.assign({}, user);

// structuredClone(object) : perfroms deep copy or clone

let user2 = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone3 = structuredClone(user2);
  
  alert( user2.sizes === clone3.sizes ); // false, different objects
  
  // user and clone are totally unrelated now
  user2.sizes.width = 60;    // change a property from one place
  alert(clone3.sizes.width); // 50, not related

