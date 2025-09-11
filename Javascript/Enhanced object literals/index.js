// enhanced object literals, introduced in ES6, are a set of enhancements to the syntax for defining objects in Javascript. These enhancements make it more convenient and concise to define object properties and methods.

const user = (name, age, work) => {
    return {
        name,
        age,
        work,
        intro: function () { // another way for enhanced object literals is intro () {}
            console.log(`My name's ${name}, I'm ${age} years old and I work as a ${work}`);
        },
};
}

const asfand = user("Asfand", 21, "Assoc Consultant")
const aman = user ("Aman", 21, "Software Engineer")

// console.log(asfand.intro()); // will return an extra unndefined because of no return statement in intro function
// console.log(aman.intro());

asfand.intro()
aman.intro()

// challenge 1: refactor es5 code to es6 (enahanced object literals)

//es5 code:
var a = 1;
var b = 2;
var c = 3;

var obj = {
    a:a,
    b:b,
    c:c
};

//es6 code

const objs = (a,b,c) => {
    return {
        a,
        b,
        c
    };
}

const values = objs(1,2,3);
console.log(values);

// challenge 2: refactor es5 code to es6 (enahanced object literals)

//es5 code:
var lib = {
    sum: function (a,b){
        return a+b;
    },
    mul: function (a,b){
        return a*b;
    },
};

console.log(lib.sum(1,2));
console.log(lib.mul(1,2));

//es6 code


const lib = (a,b) => {
    return {
        sum: function (a,b){
            return a+b;
        },
        mul: function (a,b){
            return a*b;
        },
    };
}

const l1 = lib(2,5)
console.log(l1.sum(2,5));
console.log(l1.mul(5,5));
