// exercise to practice logical operators

let firstFavNumb = 4;
let secondFavNumb = 7;

console.log(firstFavNumb > secondFavNumb);
console.log(firstFavNumb < secondFavNumb);
console.log(firstFavNumb >= secondFavNumb);
console.log(firstFavNumb <= secondFavNumb);
console.log(firstFavNumb === secondFavNumb); // strict equality
console.log(firstFavNumb == secondFavNumb); // loose equality
console.log(firstFavNumb !== secondFavNumb); // strict inequality
console.log(firstFavNumb != secondFavNumb); // loose inequality

// exercise to practice logical operators

let password;

if (password == 8){
    console.log("Welcome");
}
else if (password <= 8){
    console.log("PW is too short");
}
else if (password >= 8){
    console.log("PW is too long");
    console.log('\n');
    console.log("It should be 8 characters long");
}
else{
    console.log("Please provide a password");
}

// exercise to practice switch statement

let fruit = "papaya";

switch (fruit){
    case "banana":
        console.log("Banana is good");
        break;
    
    case "orange":
        console.log("I am not a fan of orange");
        break;
    
    case "apple":
        console.log("How you like them apples?");
        break;

    default:
        console.log("I don't know what you are talking about");
        break;
}

// spread operator

const array = [1, 2, 3]; //objects are not iterable but arrays are.
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
console.log(obj);

//1. challenge: make a clone of "arr", "arr2" by using spread operator.

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let shallowarr = [...arr1, ...arr2];
console.log(shallowarr);

//2. make a clone of "user" obj using spread operator

let user = {
    name: "Asfand",
    age: 21,
    work: "Software Engineer"
};

let shallowuser = {...user};
console.log(shallowuser);



