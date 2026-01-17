const countChar = require("./count");

// Scenario: Multiple Occurrences
test("should correctly count multiple occurrences of a character", () => {
  expect(countChar("aaaaa", "a")).toEqual(5);
  expect(countChar("banana", "a")).toEqual(3);
  expect(countChar("Mississippi", "s")).toEqual(4);
});

// Scenario: Single Occurrence
test("should correctly count a single occurrence of a character", () => {
  expect(countChar("abcdef", "d")).toEqual(1);
  expect(countChar("hello", "o")).toEqual(1);
});

// Scenario: No Occurrences
test("should return 0 when the character is not found in the string", () => {
  expect(countChar("hello", "z")).toEqual(0);
  expect(countChar("world", "a")).toEqual(0);
});

// Scenario: Case Sensitivity
test("should be case-sensitive when counting characters", () => {
  expect(countChar("aAaAaA", "A")).toEqual(3); // Counts only uppercase 'A'
  expect(countChar("aAaAaA", "a")).toEqual(3); // Counts only lowercase 'a'
  expect(countChar("Millena", "m")).toEqual(0); // 'm' not found, only 'M'
  expect(countChar("JavaScript", "j")).toEqual(0);
});

// Scenario: Counting Spaces
test("should correctly count spaces as characters", () => {
  expect(countChar("Millena Mesfin", " ")).toEqual(1);
  expect(countChar("hello world again", " ")).toEqual(2);
});

// Scenario: Empty String
test("should return 0 for an empty string input", () => {
  expect(countChar("", "a")).toEqual(0);
  expect(countChar("", " ")).toEqual(0);
  expect(countChar("", "z")).toEqual(0);
});

// Scenario: Empty Search Character (Edge Case / Unusual Input)
// Note: While your function works, this is an edge case.
// "abc".split('') -> ["a", "b", "c"] which is length 3. length - 1 = 2.
// This means it counts the *boundaries* between characters for an empty string.
// If the expectation is to count occurrences of an empty string *within* another,
// the definition might change. For this specific problem, an empty `findCharacter`
// is usually not expected, but the split method will return `stringOfCharacters.length` + 1.
// If findCharacter is "", split behaves differently. "a".split("") -> ["a", ""]. Length 2.
// So "a".split("").length - 1 = 1. Which counts 'a'.
// "abc".split("") -> ["a", "b", "c", ""]. Length 4.
// Let's test this behavior explicitly based on how `split('')` works.
test("should handle empty search character according to String.prototype.split behavior", () => {
    // "abc".split('') returns ["a", "b", "c", ""].length is 4. So count = 3.
    // This counts the number of characters in the string, or points between them.
    expect(countChar("abc", "")).toEqual(3);
    expect(countChar("hello", "")).toEqual(5);
    expect(countChar("", "")).toEqual(0); // empty string split by empty string is []
});