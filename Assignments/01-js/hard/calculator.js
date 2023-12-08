/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(result = 0) {
    this.result = result;
  }
  add(val) {
    this.result += val;
  }
  subtract(val) {
    this.result -= val;
  }
  multiply(val) {
    this.result *= val;
  }
  divide(val) {
    if (val == 0) {
      throw new Error("Invalid number");
    } else {
      this.result /= val;
    }
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(str) {
    // \s stands for space
    // \g stands for global, implying checking for all the spaces
    // without \g, it would only replace first occurence
    str = str.replace(/\s+/g, "");
    // Here, ^ marks the beginning and $ marks the end
    if (!/^[\d\-\+\*\/\(\)\.]+$/.test(str)) {
      throw new Error("Invalid Characters");
    }

    if (/\/\s*0\s*([+\-*/]|$)/.test(str)) {
    throw new Error('Division by zero');
    }

    this.result = eval(str);
  }
}
module.exports = Calculator;
