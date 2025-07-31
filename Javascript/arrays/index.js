let fruits = ["apple", "orange", "banana", "mango"];
let morefruits = ["grapes", "kiwi", "pineapple"];
let j = morefruits.join("-"); // more readily used in node and express
console.log(j);
fruits.push("mango"); //adds the element to the end of the array
fruits.pop(); //removes the last element from the array
fruits.unshift("grapes") //adds the element to the beginning of the array
fruits.shift() //removes the first element from the array
let numOfFruits = fruits.length; //returns the number of elements in the array
let index = fruits.indexOf("banana")
console.log(index); //0
console.log(numOfFruits); //4
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let i = fruits.length-1; i >= 0; i--) {
    console.log(fruits[i]);
} //for reverse array printing

for (let fruit of fruits){
    console.log(fruit);
}

fruits.sort().reverse(); //.sort used to sort in alphabetical order and .reverse to reverse sort it
console.log(fruits);


// .map() is used to create a new array by calling a function on each element in the array (uses callbacks)

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// console.log(...squares);
// const cube = numbers.map(cubes);
// console.log(...cube);

// function square(element){
//     return Math.pow(element,2)
// }

// function cubes(element){
//     return Math.pow(element,3)
// }

// const students = ["Asad", "Tahir", "Kaiser", "Hamza", "Usman"]
// const upper = students.map(upperCase)
// const lower = students.map(lowerCase)
// const capital = students.map(capitalize)
// console.log(...upper);
// console.log(...lower);
// console.log(...capital);

// function upperCase(element){
//     return element.toUpperCase();
// }

// function lowerCase(element){
//     return element.toLowerCase();
// }

// function capitalize(element){
//     return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
// }


// .filter() creates a new array with elements that pass the test in a function (uses callbacks)


// let numbers = [1, 2, 3, 4, 5];
// let even = numbers.filter(isEven);
// console.log(...even);
// let odd = numbers.filter(isOdd);
// console.log(...odd);

// function isEven(element) {
//     return element%2 === 0;
// }

// function isOdd(element){
//     return element%2 !== 0;
// }

// const ages = [20, 30, 40, 50, 60, 70, 80, 90, 100];
// const kid = ages.filter(isChild);
// const adult = ages.filter(isAdult);

// console.log(...kid);
// console.log(...adult);

// function isAdult(element){
//     return element >= 18;
// }

// function isChild(element){
//     return element < 18;
// }


// .reduce() reduces an array to a single value

//example 1:


// const prices = [10, 20, 30, 40, 50];
// const total = prices.reduce(getTotal);
// console.log(`The total is $${total.toFixed(2)}`); //toFixed(2) will round the number to 2 decimal places allowing us to see cents as well in the total amount.
// function getTotal(total, element){
//     return total + element;
// }

// function getTotal(previous, next){ //prev = 0 & next = 10;
//     return previous + next;
// }
//then prev = 10 & next = 20;
//then prev = 30 & next = 30;
//then prev = 60 & next = 40;
//then prev = 100 & next = 50;
//then prev = 150 & next = 0;//because there is no next element in the array so it returns 150 as the total.


//example 2:

// const grades =[75, 50, 90, 80, 65, 95]
// const maximum = grades.reduce(getMax);
// const minimum = grades.reduce(getMin);
// console.log(maximum);
// console.log(minimum);

// function getMax(max, element){
//     return Math.max(max, element);
// }

// function getMin(min, element){
//     return Math.min(min, element);
// }



// arrays of objects below:

// const fruits = [{name: "apple", color: "red", calories: 95},
//                 {name: "bananan", color: "yellow", calories: 105},
//                 {name: "guava", color: "green", calories: 76},
//                 {name: "mango", color: "yellow", calories: 202},
//                 {name: "orange", color: "orange", calories: 62},];

// console.log(fruits[0].color);
// console.log(fruits[1].color);
// console.log(fruits[2].color);
// console.log(fruits[3].color);
// console.log(fruits[4].color);

// fruits.forEach(fruit => console.log(fruit.color));
// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitCals = fruits.map(fruit => fruit.calories);
// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// console.log(...fruitNames);
// console.log(...fruitCals);
// console.log(...yellowFruits);

// const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max); //max is accumulator and fruit is the current element
// const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit: min )
// console.log(maxFruit);
// console.log(minFruit);



//learning how to shuffle arrays below using Fisher-Yates algorithm:

const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function shuffle(array){
    for (let i = array.length-1; i>0; i--){
        const random = Math.floor(Math.random()*(i+1));
        [array[i], array[random]] = [array[random], array[i]];
    }
} 
shuffle(cards);
console.log(...cards);

/* 1) for (let i = array.length-1; i>0; i--){
   
   - This is a for loop that iterates backward through the array. Let's look at its components:
     - let i = array.length-1; : The loop starts with i initialized to the index of the last element in the array. For an array with n elements, the last index is n-1 .
     - i > 0; : The loop continues as long as i is greater than 0 . This means the loop will process elements from the last one down to the second element (index 
     
     1). The element at index 0 (the first element) doesn't need to be swapped because by the time i reaches 1, the first element will be the only one left in its original position, effectively already "shuffled" into place.
     - i-- : After each iteration, i is decremented by 1, moving the loop to the previous element in the array.
    
     2) const random = Math.floor(Math.random()*(i+1));
   
   - Inside each loop iteration, this line generates a random index. Let's break it down:
     - Math.random() : This returns a floating-point, pseudo-random number in the range [0, 1) (inclusive of 0, but not 1).
     - *(i+1) : This multiplies the random number by (i+1) . Since i goes from array.length-1 down to 1 , (i+1) will range from array.length down to 2 . This ensures that the random index is generated within the remaining unshuffled portion of the array (from index 0 up to the current i ).
     - Math.floor(...) : This rounds the result down to the nearest whole number, giving you an integer that can be used as an array index.
   - So, random will be a random integer between 0 and i (inclusive).
    3) [array[i], array[random]] = [array[random], array[i]];
   
   - This is an array destructuring assignment, which is a concise way to swap two values. It swaps the element at the current index i with the element at the random index.
   - In essence, it takes the element at the current position i (which is part of the unshuffled portion) and swaps it with a randomly chosen element from the unshuffled portion (including itself).


   How it works (the logic): The algorithm works by iterating from the last element down to the second. In each step, it picks a random element from the unshuffled portion of the array (which is from index 0 up to the current i ) and swaps it with the element at the current index i . As i decreases, the "shuffled portion" of the array grows from the end, and the "unshuffled portion" shrinks from the end. By the time the loop finishes, all elements have been randomly placed. */


//challenge: create array name (favSingers). Store 3 fav singers.

const favSingers = ["Jaffer Zaidi", "Asfar Hussain", "Abdullah Siddiqui"];
console.log(favSingers[0]);

//challenge: create array name (favNumbers). Store 4 fav numbers.

const favNumbers = [4, 7, 5, 8];
console.log(...favNumbers);

//challenge: create array name (mixedArr). Store [string, ["otherarray"], 123]. Now access each item of array.

const mixedArr = ["Asfand", [4,7], "03130333"];
console.log(mixedArr[0]);
console.log(mixedArr[1][0]);
console.log(mixedArr[1][1]);
console.log(mixedArr[2]);

// Deep and Shallow Copy


// Shallow copies are created by referencing the same memory location. 
// - Changes to primitive elements in the copied array do not affect the original array, and vice-versa. 
// - Changes to nested objects (or arrays) within the copied array will affect the original array, because they both refer to the same nested object.

// 1.) Shallow copy can be created by:
    // 1) concat
    const originalArray1 = [1, 2, { a: 3 }];
const shallowCopy1 = [].concat(originalArray1);

shallowCopy1[2].a = 30; // Modifies nested object, affects original

console.log(originalArray1); // Output: [1, 2, { a: 30 }]

    // 2) slice
    const originalArray2 = [1, 2, { a: 3 }];
const shallowCopy2 = originalArray2.slice();

shallowCopy2[2].a = 30; // Modifies nested object, affects original

console.log(originalArray2); // Output: [1, 2, { a: 30 }]

    // 3) spread operator
    const originalArray3 = [1, 2, { a: 3 }];
const shallowCopy3 = [...originalArray3];

shallowCopy3[0] = 10; // Modifies primitive, no effect on original
shallowCopy3[2].a = 30; // Modifies nested object, affects original

console.log(originalArray3); // Output: [1, 2, { a: 30 }]
console.log(shallowCopy3);   // Output: [10, 2, { a: 30 }]


// Deep copies create a completely independent copy of the original array and all its nested objects. This means that all values, including nested objects, are duplicated. The original and the new array will not share any references to the same objects.

// 2.) Deep copy can be created by:
    // 1) JSON.parse(JSON.stringify(arr))
    const originalArray4 = [1, 2, { a: 3, b: [4, 5] }];
const deepCopy1 = JSON.parse(JSON.stringify(originalArray4));

deepCopy1[2].a = 30;
deepCopy1[2].b[0] = 40;

console.log(originalArray4); // Output: [1, 2, { a: 3, b: [4, 5] }]
console.log(deepCopy1);   // Output: [1, 2, { a: 30, b: [40, 5] }]

    // 2) structuredClone() //preferred and robust
    const originalArray5 = [1, 2, { a: 3, date: new Date() }];
const deepCopy2 = structuredClone(originalArray5);

deepCopy2[2].a = 30;
deepCopy2[2].date.setFullYear(2000);

console.log(originalArray5); // Original date remains unchanged
console.log(deepCopy2);      // Date in copy is changed
    // 3) custom deep copy function

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [];
for (let i = 0; i < arr1.length; i++) {
    arr2[i] = arr1[i];
}
console.log(...arr2);



