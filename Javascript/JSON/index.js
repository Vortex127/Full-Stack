const person = {
  name: "Asfand",
  age: 21,
  email: "asf@gmail.com",
  isSubscribed: true,
  hobbies: ["Coding", "Reading", "Writing"],
  address: {
    city: "JFK",
    state: "NY",
    country: "USA",
  },
};
console.log(typeof(person));
console.log(person);

// converts object to JSON style
const json = JSON.stringify(person);
console.log(json);
const parsedObj = JSON.parse(json);
console.log(parsedObj);




