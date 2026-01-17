// Implement a function repeat
const repeat = require("./repeat");

// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// Scenario: Repeat String (positive count > 1)
test("should repeat the string count times", () => {
    const str = "hello";
    const count = 3;
    const repeatedStr = repeat(str, count);
    expect(repeatedStr).toEqual("hellohellohello");
});

// Scenario: Handle Count of 1
test("should return original string when count is 1", () => {
  const str = "hello";
  const count = 1;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("hello");
});

// Scenario: Handle Count of 0
test("should return empty string when count is 0", () => {
  const str = "hello";
  const count = 0;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("");
});

// Scenario: Negative Count
test("should throw error when count is negative", () => {
  const str = "hello";
  const count = -1;
  expect(() => repeat(str, count)).toThrow("Count must be non-negative");
});

// Additional Test Case: Repeating an empty string with a positive count
test("should return an empty string when repeating an empty string", () => {
  expect(repeat("", 5)).toEqual("");
});