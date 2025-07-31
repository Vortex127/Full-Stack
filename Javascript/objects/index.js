// objects refer to a collection of related data items. Objects are used to store data that is related to each other. Objects are also used to store data that is related to each other. This is all part of OOP.


// const person1 = {
//     firstName: "Vortex",
//     lastName: "Khan",
//     age: 21,
//     occupation: "Student",
//     isEmployed: false,
//     info: ["Reading", "Coding", "Gaming"],
//     sayHello: () => console.log("Hello")
// }

// const person2 = {
//     firstName: "Dead",
//     lastName: "Fish",
//     age: 18,
//     occupation: "Student",
//     isEmployed: false,
//     sayHello: () => console.log("Hellulululu Oh ma gawd")
// }

// person1.sayHello();
// person2.sayHello();
// console.log(person1.firstName);
// console.log(...person1.info);
// console.log(person1["firstName"]);

// console.log(person2.lastName);

// nested objects below

// const person = {
//     fullName: "Burka Avenger",
//     age: 30,
//     isStudent: false,
//     hobbies: ["Reading", "Coding", "Gaming"],
//     address: {
//         street: "Underground Street",
//         city: "Halwapur",
//         country: "Pakistan"
//     }
// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.address.city);
// console.log(person.hobbies[2]);
// console.log("\n");
// for (const property in person.address) {
//     console.log(person.address[property]);
// }

// challenge: create object name (car), add (type, model, color) as properties. Check type of obj. Update type property to Toyota. Add new property wheels, log car to console.

let car = {
    type: "Ferrari",
    model: "488 GTB",
    color: "Red",
    wheels: 4
}
console.log(typeof car["type"]);
console.log(car.type = "Toyota");
console.log(typeof car);
console.log(car);




