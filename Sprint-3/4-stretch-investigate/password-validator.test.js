/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
const passwordValidator = require("./password-validator"); // Ensures your function is correctly imported

// Test Suite for Password Validation Rules

// Test for a fully VALID password (meets all criteria and not a previous password)
test("should return true for a password that meets all criteria", () => {
  // Define some previous passwords that don't include the valid ones we're testing.
  const previousPasswords = ["OldPass1!", "Used2Go@"];
  expect(passwordValidator("Valid123!", previousPasswords)).toEqual(true);
  expect(passwordValidator("MyPass.7*", previousPasswords)).toEqual(true);
  expect(passwordValidator("Another#Pass0", previousPasswords)).toEqual(true);
});

// Rule 1: Password has at least 5 characters.
test("should return false if password has less than 5 characters", () => {
  expect(passwordValidator("A1!", [])).toEqual(false);      // Too short
  expect(passwordValidator("abc", [])).toEqual(false);      // Too short
  expect(passwordValidator("", [])).toEqual(false);         // Empty string
});

// Rule 2: Password has at least one uppercase letter (A-Z).
test("should return false if password lacks an uppercase letter", () => {
  expect(passwordValidator("abcde1!", [])).toEqual(false);
});

// Rule 3: Password has at least one lowercase letter (a-z).
test("should return false if password lacks a lowercase letter", () => {
  expect(passwordValidator("ABCDE1!", [])).toEqual(false);
});

// Rule 4: Password has at least one number (0-9).
test("should return false if password lacks a number", () => {
  expect(passwordValidator("Abcdef!", [])).toEqual(false);
});

// Rule 5: Password has at least one of the specified non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&").
test("should return false if password lacks a required symbol", () => {
  expect(passwordValidator("Abcde123", [])).toEqual(false);  // No symbol
  expect(passwordValidator("Abcde1@")).toEqual(false);   // Contains '@', which is NOT in the allowed list
  expect(passwordValidator("ValidPa55word^", [])).toEqual(false); // '^' not in allowed list
});

// Rule 6: Password must not be any previous password.
test("should return false if password was used before", () => {
  const previousPasswords = ["Pass123!", "HelloWorld1$", "Admin2024#"];
  expect(passwordValidator("Pass123!", previousPasswords)).toEqual(false);
  expect(passwordValidator("Admin2024#", previousPasswords)).toEqual(false);
  expect(passwordValidator("HelloWorld1$", previousPasswords)).toEqual(false);
});

// Test for an invalid password due to an "unknown character" (not matching rule 5's allowed symbols)
test("should return false for password with an unknown symbol", () => {
  expect(passwordValidator("Mill3@", [])).toBe(false); // '@' is not in the allowed list
});

// Test for passwords failing multiple rules simultaneously (robustness check)
test("should return false for passwords that are invalid due to multiple reasons", () => {
  // Too short, no uppercase, no number, no symbol
  expect(passwordValidator("short", [])).toEqual(false);
  // No uppercase, no number
  expect(passwordValidator("thisisapassword!", [])).toEqual(false);
  // No lowercase, no symbol
  expect(passwordValidator("PASSWORD123", [])).toEqual(false);
  // Only length
  expect(passwordValidator("12345", [])).toEqual(false);
});