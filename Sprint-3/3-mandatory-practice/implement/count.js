function countChar(stringOfCharacters, findCharacter) {
  // This method works by splitting the string by the `findCharacter`.
  // The number of resulting substrings will be one more than the number
  // of times the `findCharacter` appeared.
  // Example: "banana".split('a') results in ["b", "n", "n", ""], which has length 4.
  // The character 'a' appeared 3 times. So, length - 1 gives the count.
  if (findCharacter.length === 0) {
    return stringOfCharacters.length;
  }

  let count = 0;
  for (let i = 0; i < stringOfCharacters.length; i++) {
    if (stringOfCharacters[i] === findCharacter) {
      count++;
    }
  }
}

module.exports = countChar;
