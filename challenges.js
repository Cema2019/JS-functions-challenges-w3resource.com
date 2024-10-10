/*Write a JavaScript function that reverses a number.
Example x = 32243;
Expected Output : 34223*/

const reverseNum = (num) => {
    return Number(num.toString().split('').reverse().join(''));
}

/*Write a JavaScript function that checks whether a passed string is a palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.*/

 const isPalindrome = (str) => {
    // Remove non-alphanumeric characters and convert to lowercase
  const word = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Reverse the cleaned string
  const reversedStr = [...word].reverse().join('');

  return word === reversedStr;
 }

/*Write a JavaScript function that returns a string that has letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.*/

 function sortAlphabetically(str) {
    return [...str].sort().join('');
}

/*Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '*/

function capitalizeWords(str) {
    return str.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
}

/*Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'*/

function findLongestWord(str) { 
  return str.split(' ').sort((a, b) => b.length - a.length)[0];
}

