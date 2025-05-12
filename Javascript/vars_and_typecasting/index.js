// variables below!!

let x = 100;
console.log(x);
console.log(typeof x);
console.log(`You are $(x) years old`);
console.log("Your price is $$(x)");

let firstName = "Mirza"
let favoriteFood = "Pizza"
let email = "hello123@gmail.com"

let online = false;
let forSale = true;
let isStudent = true;

console.log(`Bro's online: $(online)`);
console.log(`Bro's for sale: $(forSale)`);
console.log("Enrolled: $(isStudent)");

// exercise to check out basic math operations in javascript

let firstFavNum  = 4;
let secondFavNum = 7;

console.log(firstFavNum + secondFavNum);
console.log(firstFavNum - secondFavNum);
console.log(firstFavNum * secondFavNum);
console.log(firstFavNum / secondFavNum);
console.log(firstFavNum % secondFavNum);
console.log(firstFavNum ** secondFavNum);

// type conversions!!

let age = window.prompt("How old are you? ");
age = Number(age); // now it works normally
age+=1; //appends 1 to the input instead of adding 1 to the number
console.log(age, typeof age);

let x1 = "pizza"; //we replace pizza with 0 and empty strings.
let y = "pizza";
let z = "pizza";
let number = 10;

console.log(number + undefined); //comes out to NaN

x1 = Number(x1);
y = String(y);
z = Boolean(z);

console.log(x1, typeof x1);
console.log(y, typeof y);
console.log(z, typeof z);

// constants vs let discussed!!

const PI = 3.14159;
let radius;
let circum;
