const person = {
    name: "Isha",
    age: 23,
    email: "isha@gmail.com",
    address: {
        city: "lucknow",
        state: "U.P",
        pin: 226002
    }
}

const entries = Object.entries(person);
console.log(entries);

const [key, value] = entries[0];
console.log(key, value);