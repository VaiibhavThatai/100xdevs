// interface User{
//   name: string;
//   age: number;
// }

type NumberArr = (string | number)[];

function isEven(num: number): boolean{
  return num % 2 === 0;
}

//& This is a dumb solution.
function getFirstElement(arr : NumberArr): (string | number){
  return arr[0];
}

// function getFirstElement(arr : NumberArr){
//   return arr[0];
// }

// function getFirstElement(arr : (string | number)[]){
//   return arr[0];
// }


let ans = getFirstElement([5,2,3]);
let ans2 = getFirstElement(["one", "two", "three"]);

// Ts doesn't know yet that ans2 is a string or a string | number
// ans2.toLowerCase();

// Ugly solution: Form two solutions i.e. 2 funtions

// Better solution:
// Using the template array
function getFirstItem<T>(arr: T[]){
    return arr[0];
}
console.log(ans);
console.log(ans2);

let ans3 = getFirstItem<number>([5,2,3]);
let ans4 = getFirstItem<string>(["One", "Two", "Three"]);

let ans6 = ans4.toLowerCase();
console.log(ans6);

type User = {
    name: string;
    age: number;
}

let ans5 = getFirstItem<User>([{
    name: "John",
    age: 34
},
{
    name: "Vaibhav", 
    age: 21
}]);

console.log(ans5);
console.log(ans5.age);


// Assignment Question

function Swap<T>(num1: T, num2: T): T[]{
    return [num2, num1];
}

// function ArrSwap<T>(arr: T[]){
//     let num = arr[0];
//     arr[0] = arr[1];
//     arr[1] = num;
// }
