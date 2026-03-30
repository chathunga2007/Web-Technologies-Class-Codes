// String Method

let txt = " Hello World ";
// 01. length()
console.log(txt.length); //13
// 04. trim()
console.log(txt.trim()); //Hello World
// 02. toUpperCase()
console.log(txt.toUpperCase()); //HELLO WORLD
// 03. toLowerCase
console.log(txt.toLowerCase()); // hello world
// 05. includes()
console.log(txt.includes("Hello")); // true
//06. slice()
console.log(txt.slice(1, 8)); // Hello W

// Template Literals
let name1 = "Chathunga";
let age = 18;
console.log(`My name is ${name1} and I am ${age} years old.`);

//Number Methods
let num = 10.573;
// 01. toFixed()
console.log(num.toFixed(2)); //10.57
// 02. parseInt()
console.log(parseInt("10")); //10
// 03. parseFloat()
console.log(parseFloat("10.5")); //10.5
// 04. Number()
console.log(Number("10")); //10

// Math Object
// 01. Math.round()
console.log(Math.round(4.7)); //5
// 02. Math.ceil()
console.log(Math.ceil(4.2)); //5
// 03. Math.floor()
console.log(Math.floor(4.7)); //4
// 04. Math.random()
console.log(Math.random()); // Random number between 0 and 1
// 05. Math.max()
console.log(Math.max(1, 5, 3)); //5
// 06. Math.min()
console.log(Math.min(1, 5, 3)); //1
// 07. Math.pow()
console.log(Math.pow(2, 3)); //8