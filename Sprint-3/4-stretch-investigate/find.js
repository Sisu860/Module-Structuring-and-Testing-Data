function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

/**
 * Function to find the index of the first occurrence of a character in a string.
 * @param {string} str - The string to search within.
 * @param {string} char - The character to search for.
 * @returns {number} The index of the first occurrence of the character, or -1 if not found.
 */
function find(str, char) {
  let index = 0; // a) How the index variable updates: 'index' starts at 0 and increments by 1 in each loop iteration.

  // b) What is the condition 'index < str.length' used for?
  //    This condition ensures the loop only runs within the string’s valid length,
  //    preventing errors from trying to access characters beyond the end of the string.
  while (index < str.length) {
    // c) What is the if statement used to check?
    //    It checks if the character at the current 'index' in 'str' is exactly the same
    //    as the target 'char' we are searching for.
    if (str[index] === char) {
      return index;  // If a match is found, the function immediately returns the current 'index'.
    }
    // d) Why is index++ being used?
    //    'index++' is used to move to the next character in the string during each iteration.
    //    It ensures progress through the string and prevents an infinite loop.
    index++;
  }

  // If the loop finishes without finding the character, it means the character is not in the string,
  // so -1 is returned to indicate it was not found.
  return -1;
}

module.exports = find;