/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str_l = str.toLowerCase();

  let str2 = str_l.split("").reverse().join("");
  let i = 0, j = 0;
  while (i < str_l.length && j < str2.length) {

    if(str_l[i] === str2[j]){
      i++;
      j++;
    }
    else if((str_l[i] < 'a' || str_l[i] > 'z') && (str_l[i] < '0' || str_l[i] > '9')){
      i++;
    }
    else if((str2[j] < 'a' || str2[j] > 'z') && (str2[j] < '0' || str2[j] > '9')){
      j++;
    }
    else{
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
