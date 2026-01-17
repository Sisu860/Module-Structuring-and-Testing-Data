const isProperFraction = require("./2-is-proper-fraction");

// Case 1: Identify Proper Fractions
test("should return true for a positive proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

test("should return true for a proper fraction with a negative numerator", () => {
  expect(isProperFraction(-2, 3)).toEqual(true); // e.g., -2/3
});

test("should return true for a proper fraction with a negative denominator", () => {
  expect(isProperFraction(2, -3)).toEqual(true); // e.g., 2/-3 which is equivalent to -2/3
});

test("should return true for a proper fraction with both numerator and denominator negative", () => {
  expect(isProperFraction(-2, -3)).toEqual(true); // e.g., -2/-3 which is equivalent to 2/3
});

test("should return true for a fraction with a zero numerator", () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

test("should return true for a fraction with a zero numerator and negative denominator", () => {
  expect(isProperFraction(0, -5)).toEqual(true);
});


// Case 2: Identify Improper Fractions
test("should return false for a positive improper fraction", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});

test("should return false for an improper fraction with a negative numerator", () => {
  expect(isProperFraction(-5, 2)).toEqual(false);
});

test("should return false for an improper fraction with a negative denominator", () => {
  expect(isProperFraction(5, -2)).toEqual(false);
});

test("should return false for an improper fraction with both numerator and denominator negative", () => {
  expect(isProperFraction(-5, -2)).toEqual(false);
});


// Case 3: Identify Equal Numerator and Denominator
test("should return false when positive numerator equals positive denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});

test("should return false when negative numerator equals positive denominator (by absolute value)", () => {
  expect(isProperFraction(-3, 3)).toEqual(false);
});

test("should return false when positive numerator equals negative denominator (by absolute value)", () => {
  expect(isProperFraction(3, -3)).toEqual(false);
});

test("should return false when negative numerator equals negative denominator (by absolute value)", () => {
  expect(isProperFraction(-3, -3)).toEqual(false);
});


// Case 4: Identify Fractions with Zero Denominator
test("should return false when the denominator is zero (positive numerator)", () => {
  expect(isProperFraction(5, 0)).toEqual(false);
});

test("should return false when the denominator is zero (negative numerator)", () => {
  expect(isProperFraction(-5, 0)).toEqual(false);
});

test("should return false when both numerator and denominator are zero", () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});