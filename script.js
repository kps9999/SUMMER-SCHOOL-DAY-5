console.log("\n 1.");

let name = "Kirat";
const age = 20;
var Student = true;
let hobby;
let B = null;

console.log("name:", typeof name);      
console.log("age:", typeof age);           
console.log("Student:", typeof Student);
console.log("hobby:", typeof hobby);       
console.log("B", typeof B); 

console.log("\n2. ");

console.log("var x before declaration:", x); // undefined
var x = 10;

//  ReferenceError
let y = 20;
console.log("let y after declaration:", y);

console.log("\n 3. ");

let userName = prompt("Enter your name:");
let userAge = parseInt(prompt("Enter your age:"));

if (userAge < 18) {
  alert(`Hey ${userName}, youre a teen!`);
} else if (userAge >= 18 && userAge <= 60) {
  alert(`Welcome ${userName}, youre an adult!`);
} else {
  alert(`Hello ${userName}, youre a senior citizen!`);
}

console.log("\n 4.");

console.log("For loop (1 to 10):");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("While loop (even numbers 2 to 20):");
let even = 2;
while (even <= 20) {
  console.log(even);
  even += 2;
}

console.log("Do...while loop (10 to 1):");
let down = 10;
do {
  console.log(down);
  down--;
} while (down >= 1);

console.log("\n 5. ");

function add(a, b) {
  return a + b;
}

const square = function(x) {
  return x * x;
};

const greet = (name) => `Hello, ${name}!`;

console.log("add(5, 3):", add(5, 3));
console.log("square(4):", square(4));
console.log("greet('Kirat'):", greet("Kirat"));

console.log("\n 6. ");

function process(num, callback) {
  callback(num);
}

process(5, function(n) {
  console.log("Double", n * 2);
});

console.log("\nCalculator");

let n1 = parseFloat(prompt("Enter first number:"));
let op = prompt("Enter operator (+, -, *, /):");
let n2 = parseFloat(prompt("Enter second number:"));
let calcResult;

if (op === "+") {
  calcResult = n1 + n2;
} else if (op === "-") {
  calcResult = n1 - n2;
} else if (op === "*") {
  calcResult = n1 * n2;
} else if (op === "/") {
  calcResult = n1 / n2;
} else {
  alert("Invalid operator!");
}
if (calcResult !== undefined) {
  alert(`Result: ${calcResult}`);
}
