// first way to pass function as reference to an object

function greet (){
    return `Hello, my name is ${person.name} & I am ${person.age} years old`;
}

const person = {
    name: "Mirza",
    age: 21,
    greet,
};

console.log(person.greet());

// second way to pass function as reference to an object

const person2 = {
    name: "Mirza",
    age: 21,
    greet: function greet(){
        return `Hello, my name is ${person2.name} & I am ${person2.age} years old`;
    }
};

console.log(person2.greet());
