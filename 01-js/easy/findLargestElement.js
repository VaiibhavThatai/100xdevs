/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let ls = numbers[0];
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i]>ls){
            ls = numbers[i];
        }
    }
    return ls;
}

// console.log(findLargestElement([2,3,4,5,6,7,8,9,3]));

module.exports = findLargestElement;