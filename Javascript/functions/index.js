// function happybirthday(name, age) { //params
//     console.log("Happy birthday to you");
//     console.log("Happy birthday to you");
//     console.log(`Happy birthday dear ${name}`);
//     console.log(`Happy birthday to you`);
//     console.log(`May all your dreams come true at ${age} years young and free` + '\n');
// }

// happybirthday("chaos", 21); //args
// happybirthday("vortex", 16);
// happybirthday("asfand", 12);

// function add(x,y){
//     let result = x+y;
//     return result;
// }
// console.log(add(5,7));

// function isEven(number){
//     if (number % 2 == 0) {
//         result = "even number"
//     }
//     else{
//         result = "odd number"
//     }
//     return result;
// }
// console.log(isEven(8) + '\n');

// function isValidEmail(email){
//     if(email.includes("@")){
//         result = "valid email"
//     }
//     else{
//         result = "invalid email"
//     }
//     return result;
// }
// console.log(isValidEmail("helloworld@brocode.com"));


// callback functions are functions that are passed as arguments to other functions and for handling asychronous operations.

//example 1:

// hello(wait);
// leave(goodbye);
// function hello(callbackex){ //parameter used here acts as a function that is passed as an argument to another function hence working as a callback function.
//     console.log('Hello');
//     callbackex();
// }

// function wait(){
//     console.log('please wait');
// }

// function leave(callbackex2){ //parameter used here acts as a function that is passed as an argument to another function hence working as a callback function.
//     console.log('you may now leave');
//     callbackex2();
// }

// function goodbye(){
//     console.log('Goodbye' + '\n');
// }

// function greet1 (name, cb) {
//     console.log(`Hello, I'm ${name}`);
//     cb();
// }

// function bye () {
//     console.log("Nice to meet you");
// }

// greet("Mirza", bye);

// paramterized example below:

// ... existing code ...

function greet(name, cb, cb2) {
    console.log(`Hello, I'm ${name}`);
// Now, we pass a parameter (e.g., a message or the name itself) to the callback
    if (typeof cb === "function"){
        cb(`It's nice to meet you, ${name}!`);
    }
    if (typeof cb2 === "function") {
        cb2(`${name}`);
    }
}

// This is our parameterized callback function
function sayGoodbye(message) {
    console.log(message);
    console.log("Goodbye for now!");
}

// Call greet, passing 'Mirza' as the name and 'sayGoodbye' as the callback
greet("Mirza", sayGoodbye, null);

// Another example with a different callback
function thankYou(personName) {
    console.log(`Thank you, ${personName}, for calling me!`);
}

greet("Alice",null, thankYou);

//  ... existing code ...

// //example 2:

// sum(displayPage, 5, 5); //sum has option to utlilize either displayConsole or displayPage function as a callback function.

// function sum(callback, a, b){ //callback function is passed as an argument to the sum function.
//     let result = a + b;
//     callback(result);
// }

// function displayConsole(result){ //parameter used here acts as a function that is passed as an argument to another function hence working as a callback function.
//     console.log(result);
// }

// function displayPage(result){ //parameter used here acts as a function that is passed as an argument to another function hence working as a callback function.
//     document.getElementById("myh1").textContent = result;
// }

// // challenge: create a function name (showcallFunc), that accepts a function as a parameter. Call the function inside the showcallFunc function.

// function showcallFunc(fn){
//     let val = 10;
//     fn(val);
// }

// function display(number){
//     console.log(number);
// }

// showcallFunc(display);



// function expressions: a way of defining functions as values or variables! In function expression, hoisting is not allowed meaning you can't call a function without declaring it first.

//setTimeout and setInterval below:

// setInterval (
//     function t (){
//         console.log("This will execute every 2 seconds");
//     },
//     2000
// );

// setTimeout(
//     function t1(){
//         console.log("This function will be executed after 3 seconds");
//     },
//     3000
// );

// setInterval won't stop until you set a timeout function for it to pause.

// const intervalId = setInterval(
//     function t2 (){
//         console.log("This function is being used to test the interval x timeout combo");
//     },
//     3500
// );

// setTimeout(
//     function (){
//         clearInterval(intervalId);
//         console.log("Stopping the Interval");
//     },
//     10000
// )

// function hello(){ // function declaration
//     console.log("Hellow");}
// setTimeout(hello, 3000) // hello is callback function, 3000ms=3secs.

// const hello = function hello(){ // function expression
//     console.log("Hellow");    
// }
// hello();

// setTimeout(function(){
//     console.log("Hellow");
// }, 3000) // example of function expression

// template literals!

// function info (){
//     return 'Hello guys wassup';
// }

// console.log(`${info}`); // return whole function declaration snippet.
// console.log(`${info()}`); // return the value of the function.

// template literals challenge

// 1. store this in template string: 
// the quick
// brown fox
// jumps over
// the lazy dog

// let string = 
// `the quick
// brown fox
// jumps over
// the lazy dog
// `

// var fname = "Asfand"
// var lname = "Baig"

// console.log(`My name is ${fname} ${lname}`);


//instead of using callbacks like we did earlier in map function, we can straight up pass the function:

// const numbers = [1,2,3,4,5,6];
// const square = numbers.map(function(element){
//     return Math.pow(element,2);
// });
// const cube = numbers.map(function(element){
//     return Math.pow(element,3);
// });
// const even = numbers.filter(function(element){
//     return element % 2 == 0;
// });
// const odd = numbers.filter(function(element){
//     return element % 2 == 1;
// });
// const total = numbers.reduce(function(accumulator, element){
//     return accumulator + element;
// });

// console.log(...square);
// console.log("\n");
// console.log(...cube);
// console.log("\n");
// console.log(...even);
// console.log("\n");
// console.log(...odd);
// console.log("\n");
// console.log(total);



// arrow functions below. arrow funcs are a way of writing functions in a more concise way.

// function double (n) {
//     return n * 2
// }
console.log(double(3));

// the arrow func way of writing the above segment is:
// can't use the function keyword here when assigning 
const double = (n) => n * 2

const hello = (name) => {
    console.log(`Hello ${name}`);
    console.log("You are old");
}
hello("Bro");

setTimeout(() => console.log("Hello")
, 3000);

const numbers = [1,2,3,4,5,6];

// map is used to create a new array by transforming each element in the original array according to a provided function.
const squares = numbers.map((element)=> Math.pow
(element,2));
const cube = numbers.map((element)=> Math.pow
(element,3));

// filter is used to create a new array with all elements that pass the test implemented by the provided function.
const even = numbers.filter((element)=> element % 2 == 0);
const odd = numbers.filter((element)=> element % 2 == 1);

// reduce is used to apply a function against an accumulator and each value of the array (from left to right) to reduce it to a single value
const total = numbers.reduce((accumulator, element)=> accumulator + element);
console.log(squares);
console.log(cube);
console.log(even);
console.log(odd);
console.log(total);



// Default function parameters, allows you to assign default values to function parameters. When func is called, and arg not provided, the default value will be used instead. Makes it easier to handle cases where arguments might be missing or undefined.

function multiply(a, b) { // no default paramter meaning no fallback
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // NaN ! 

function multiply(a, b = 1) { // fallback provided
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
multiply(5, undefined); // 5

//In JavaScript, an empty function body {} is equivalent to not having a body at all.
