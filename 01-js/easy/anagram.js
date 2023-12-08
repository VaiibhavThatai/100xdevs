/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // if unequal lengths.
  if (str1.length != str2.length) {
    return false;
  }

  // though this is not true (if one string has D and other has d, then they shouldn't be true)
  let str1_l = str1.toLowerCase();
  let str2_l = str2.toLowerCase();

  // A Map to store values
  let mp = new Map();
  for (let i = 0; i < str1_l.length; i++) 
  {
    // Check if already present
    let val = mp.get(str1_l.charAt(i));
    if (val) {
      // increment the value by 1
      val++;
      mp.set(str1_l.charAt(i), val);
    }
    else{
      // set the value to 1
      mp.set(str1_l.charAt(i),1);
    }
  }
  // Check all entries with str2
  for(let i = 0; i < str2_l.length; i++) {
    
    let val = mp.get(str2_l.charAt(i));
    if(val){
      if(val == 1) {
        mp.delete(str2_l.charAt(i));
      }
      else{
        val--;
        mp.set(str2_l.charAt(i),val);
      }
    }
  }
  return mp.size == 0;

}

module.exports = isAnagram;
