//Let & Const Recap
let name = "John"; //value can change
const age = 30; //value cannot change

//Template Literals
let nam = "Alice";
console.log(`Hello, ${nam}!`); //Output: Hello, Alice! | Use backticks and ${} for variables

//Destructuring
const person = { name2: "Bob", age2: 25 };
const { name2, age2 } = person; //Extracting values easily from objects
console.log(name2); //Output: Bob
console.log(age2); //Output: 25

const students = {name3: "Nuwan", age3: 22, address: "Galle"};
const { name3, age3, address } = students; //Extracting all values
console.log(`Hello, ${name3}! You are ${age3} and lives in ${address}.`); //Output: Hello, Nuwan! You are 22 and live in Galle.

//Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; //Spread copies or expands values
console.log(arr2); //Output: [1, 2, 3, 4, 5]