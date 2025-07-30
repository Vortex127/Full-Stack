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

// variables below!!

// --- var example ---
var a = 10;
console.log("var x (initial):", a); // Output: var x (initial): 10

var a = 20; // var allows re-declaration in the same scope
console.log("var x (re-declared):", a); // Output: var x (re-declared): 20

function varScope() {
    var y = 30;
    console.log("var y (inside function):", y); // Output: var y (inside function): 30
    if (true) {
        var y = 40; // var is function-scoped, so this re-assigns the outer y
        console.log("var y (inside if block):", y); // Output: var y (inside if block): 40
    }
    console.log("var y (after if block):", y); // Output: var y (after if block): 40
}
varScope();
// console.log(y); // This would throw a ReferenceError, as y is function-scoped

console.log("\n");

// --- let example ---
let a = 100;
console.log("let a (initial):", a); // Output: let a (initial): 100

a = 110; // let allows re-assignment
console.log("let a (re-assigned):", a); // Output: let a (re-assigned): 110

// let a = 120; // This would throw a SyntaxError: 'a' has already been declared

function letScope() {
    let b = 200;
    console.log("let b (inside function):", b); // Output: let b (inside function): 200
    if (true) {
        let b = 210; // let is block-scoped, this creates a new 'b' for the if block
        console.log("let b (inside if block):", b); // Output: let b (inside if block): 210
    }
    console.log("let b (after if block):", b); // Output: let b (after if block): 200 (original 'b' is preserved)
}
letScope();

console.log("\n");

// --- const example ---
const p = 500;
console.log("const p (initial):", p); // Output: const p (initial): 500

// p = 510; // This would throw a TypeError: Assignment to constant variable.
// const p = 520; // This would throw a SyntaxError: 'p' has already been declared

const obj = { name: "Alice" };
console.log("const obj (initial):", obj); // Output: const obj (initial): { name: 'Alice' }
obj.name = "Bob"; // Properties of a const object can be modified
console.log("const obj (modified property):", obj); // Output: const obj (modified property): { name: 'Bob' }

// obj = { name: "Charlie" }; // This would throw a TypeError: Assignment to constant variable.

function constScope() {
    const q = 600;
    console.log("const q (inside function):", q); // Output: const q (inside function): 600
    if (true) {
        const q = 610; // const is block-scoped, this creates a new 'q' for the if block
        console.log("const q (inside if block):", q); // Output: const q (inside if block): 610
    }
    console.log("const q (after if block):", q); // Output: const q (after if block): 600 (original 'q' is preserved)
}
constScope();