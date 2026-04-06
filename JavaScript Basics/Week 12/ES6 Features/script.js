//01. Let & Const Recap
let name = "John"; //value can change
const age = 30; //value cannot change

//02. Template Literals
let nam = "Alice";
console.log(`Hello, ${nam}!`); //Output: Hello, Alice! | Use backticks and ${} for variables

//03. Destructuring
const person = { name2: "Bob", age2: 25 };
const { name2, age2 } = person; //Extracting values easily from objects
console.log(name2); //Output: Bob
console.log(age2); //Output: 25

const students = {name3: "Nuwan", age3: 22, address: "Galle"};
const { name3, age3, address } = students; //Extracting all values
console.log(`Hello, ${name3}! You are ${age3} and lives in ${address}.`); //Output: Hello, Nuwan! You are 22 and live in Galle.

//04. Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; //Spread copies or expands values
console.log(arr2); //Output: [1, 2, 3, 4, 5]

//05. Rest operator
function sum(...numbers) { 
    return numbers.reduce((a, b) => a + b, 0); //Rest collects multiple values into an array
}
console.log(sum(1, 2, 3, 4, 5)); //Output: 15

//06. Default Parameters
function greet(name = "Guest") { //Default value if no argument is provided
    console.log(`Hello, ${name}!`);
}
greet(); //Output: Hello, Guest!
greet("Alice"); //Output: Hello, Alice!

//Task 01
function multiply(a, b=1 ) {
    return a * b;
}
console.log(multiply(5)); //Output: 5 (5 * 1)
console.log(multiply(5, 2)); //Output: 10 (5 * 2)

//Task 02
function totalPrice(price, tax = 0.1) {
    return price + (price * tax);
}
console.log(totalPrice(100)); //Output: 110 (100 + 10)
console.log(totalPrice(100, 0.2)); //Output: 120 (100 + 20)


