// Runs partially -> showing that Js is interpreted language
console.log("Hello world!");
// console.log(a);

// Data Types
let age = 18;
let fname = "H";
console.log("This person is " + fname + " his age is " + age);

let isMarried = false;

// Conditional Statements
if (isMarried) {
  console.log("This person is married");
} else if (isMarried == false) {
  console.log("This person is not married");
} else {
  console.log("This person is gay");
}

// Array practice questions
const personArray = ["H", "M", "F", "V"];

// const personAges = [23,34,45,56,67,8,76,43,32,2,35,66,76,7];
// for(let i = 0; i < personAges.length; i++){
//     if(personAges[i]%2 == 0){
//         console.log(personAges[i]);
//     }
// }

// const Users = [
//     {
//         firstName: "John",

//     }
// ]

function sum(num1, num2) {
  let result = num1 + num2;
  return result;
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum
displayResult(sum(4, 5));
displayResultPassive(sum(4, 5));

// Another way:
function sums(num1, num2, fnToCall) {
    let result = num1 + num2;
    fnToCall(result);
    return result;
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

let num1 = 5;
let num2 = 10;
const ans = sums(num1, num2, displayResultPassive);
const val2 = sums(num1, num2, displayResult);


// AND
function calc(a, b, arithmetic) {
  const ans = arithmetic(a, b);
  return ans;
}
function sum(a, b) {
  return a + b;
}

const val = calc(4, 5, sum);
console.log(val);

// Another Example
function greet(a, b){

const currentDate = new Date();

const currentHours = currentDate.getHours();
const currentMinutes = currentDate.getMinutes();
const currentSeconds = currentDate.getSeconds();
const currentMilliseconds = currentDate.getMilliseconds();

// Display the current time
console.log(`Current Time: ${currentHours}:${currentMinutes}:${currentSeconds}.${currentMilliseconds}`);

    result =  a + b;
    console.log(result);
}

// Passed function as an argument
// setTimeout(() => greet(3, 4), 3*1000);



// Question 2 of Assignment
// Create a new Date object
// Create a new Date object
const currentDate = new Date();

// Get the current time including milliseconds
const currentHours = currentDate.getHours();
const currentMinutes = currentDate.getMinutes();
const currentSeconds = currentDate.getSeconds();
const currentMilliseconds = currentDate.getMilliseconds();

// Display the current time
console.log(`Current Time: ${currentHours}:${currentMinutes}:${currentSeconds}.${currentMilliseconds}`);

setTimeout(() => greet(3, 4), 3*1000);
