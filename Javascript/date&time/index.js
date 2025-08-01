// const currentdate = new Date(2025, 0, 27, 11, 59, 50, 250); //year, month, day, hour, minute, second, millisecond
// console.log(currentdate);

const date = new Date();
console.log(date);
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();

console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Day: ${day}`);
console.log(`Hour: ${hour}`);
console.log(`Minutes: ${minutes}`);
console.log(`Seconds: ${seconds}`);
console.log(`Milliseconds: ${milliseconds}`);
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());
console.log(date.toLocaleDateString());

date.setDate(date.getDate() + 5);
console.log(`${date.toDateString()}`);
