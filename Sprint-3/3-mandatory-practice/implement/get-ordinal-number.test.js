const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"


// Case 1: Numbers ending in 1 (e.g., 1st, 21st, 101st), but not 11th
test("should return 'st' for numbers ending in 1 (excluding 11)", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(101)).toEqual("101st");
});

// Case 2: Numbers ending in 2 (e.g., 2nd, 22nd, 102nd), but not 12th
test("should return 'nd' for numbers ending in 2 (excluding 12)", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(102)).toEqual("102nd");
});

// Case 3: Numbers ending in 3 (e.g., 3rd, 23rd, 103rd), but not 13th
test("should return 'rd' for numbers ending in 3 (excluding 13)", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(103)).toEqual("103rd");
});

// Case 4: Special cases for numbers ending in 11, 12, or 13 (always 'th')
test("should return 'th' for numbers ending in 11, 12, or 13", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(111)).toEqual("111th");
  expect(getOrdinalNumber(212)).toEqual("212th");
  expect(getOrdinalNumber(313)).toEqual("313th");
});

// Case 5: Other numbers (ending in 0, 4-9) - always 'th'
test("should return 'th' for numbers ending in 0 or 4 through 9", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(5)).toEqual("5th");
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(20)).toEqual("20th");
  expect(getOrdinalNumber(25)).toEqual("25th");
  expect(getOrdinalNumber(100)).toEqual("100th");
  expect(getOrdinalNumber(1000)).toEqual("1000th");
});

// Case 6: Invalid inputs (should throw an error "Input must be a positive integer")
test("should throw an error for non-integer or non-positive number inputs", () => {
  expect(() => getOrdinalNumber(0)).toThrow("Input must be a positive integer");
  expect(() => getOrdinalNumber(-5)).toThrow("Input must be a positive integer");
  expect(() => getOrdinalNumber(1.5)).toThrow("Input must be a positive integer");
  expect(() => getOrdinalNumber("abc")).toThrow("Input must be a positive integer");
  expect(() => getOrdinalNumber(null)).toThrow("Input must be a positive integer");
  expect(() => getOrdinalNumber(undefined)).toThrow("Input must be a positive integer");
});
