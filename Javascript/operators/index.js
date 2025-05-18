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





