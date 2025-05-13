let username = "Vortex Khan";
let ph_number = "123-4567-890";
let firstName = username.slice(0,6);
let lastName = username.slice(7, 11);
let fullname = firstName.concat(" ",lastName);

console.log("concat:" +fullname);
console.log("trim: " +username.trim()); //removes white spaces from the beginning and end of the string
console.log("charAt: " +username.charAt("0")); 
console.log("indexOf: " +username.indexOf("o"));
console.log("lastIndexOf: " +username.lastIndexOf("x")); //returns the last index of a certain character
console.log("length: " +username.length);
console.log("toUpperCase: " +username.toUpperCase());
console.log("toLowerCase: " +username.toLowerCase());
console.log("repeat: " +username.repeat(3));
console.log("startsWith: " +username.startsWith("V")); //checks if the string starts with a certain character 
console.log("endsWith: " +username.endsWith(" ")); //checks if the string ends with a certain character
console.log("includes: " +username.includes(" ")); //checks if the string includes a certain character
console.log("replaceAll: " +ph_number.replaceAll("-","")); //replaces all the occurences of a certain character where first arg is the character to be replaced and second arg is the character to be replaced with
console.log("padStart: " +ph_number.padStart(15,"*")); //adds a certain character at the start of the string to make it of a certain length where first arg is the length of the string and second arg is the character to be added
console.log("padEnd: " +ph_number.padEnd(15,"*")); //adds a certain character at the end of the string to make it of a certain length where first arg is the length of the string and second arg is the character to be added
console.log("slice: " +firstName + " " +lastName);

// usage of backticks/template literals

let name1 = "Asfand";
let name2 = "Yar";

let newName = `${name1} ${name2}`; //appends the two strings together and stores it in a new variable
console.log(newName);

// exercise below:

let favActorFirstName = "Arnab";
let favActorLastName = "Goswami";
let fullActorName = favActorFirstName.concat(" ", favActorLastName);
let upperCase = fullActorName.toUpperCase();
let message = "My favorite actor is " + upperCase + " and he shouts really well";
let append = message.concat(".", " His best part is bashing others for no reason");

console.log(fullActorName);
console.log(upperCase);
console.log(append);

