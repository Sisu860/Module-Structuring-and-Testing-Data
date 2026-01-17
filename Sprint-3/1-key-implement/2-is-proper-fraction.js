// Implement a function isProperFraction
// Write assertions for your function to check it works in different cases
// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically

function isProperFraction(numerator, denominator) {
    // 1. Handle invalid denominator: A fraction cannot have a zero denominator.
    if (denominator === 0) {
        return false;
    }

    // 2. A proper fraction is defined as one where the absolute value of the numerator
    //    is strictly less than the denominator. (This implies a positive denominator
    //    as per common fraction definitions; if denominators can be negative, more complex normalization is needed).
    return Math.abs(numerator) < denominator;
}

// here's our helper again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Test Failed: Expected "${targetOutput}", but got "${actualOutput}"`
  );
  if (actualOutput === targetOutput) {
    console.log(`Test Passed: Output "${actualOutput}" for expected "${targetOutput}"`);
  }
}

// Acceptance criteria:

// Proper Fraction check:
// Input: numerator = 2, denominator = 3
// target output: true
// Explanation: The fraction 2/3 is a proper fraction, where the numerator is less than the denominator. The function should return true.
const properFraction = isProperFraction(2, 3);
assertEquals(properFraction, true);

// Improper Fraction check:
// Input: numerator = 5, denominator = 2
// target output: false
// Explanation: The fraction 5/2 is an improper fraction, where the numerator is greater than or equal to the denominator. The function should return false.
const improperFraction = isProperFraction(5, 2);
assertEquals(improperFraction, false);

// Negative Fraction check:
// Input: numerator = -4, denominator = 7
// target output: true
// Explanation: The fraction -4/7 is a proper fraction because the absolute value of the numerator (4) is less than the denominator (7). The function should return true.
const negativeFraction = isProperFraction(-4, 7);
assertEquals(negativeFraction, true);

// Equal Numerator and Denominator check:
// Input: numerator = 3, denominator = 3
// target output: false
// Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.
const equalFraction = isProperFraction(3, 3);
assertEquals(equalFraction, false); // Corrected this line in your provided test

// Stretch:
// What other scenarios could you test for?

console.log("\n--- Stretch Case Tests ---");

// Stretch 1: Zero numerator (0/5)
// Expected: true (0 is less than 5)
assertEquals(isProperFraction(0, 5), true);

// Stretch 2: Denominator is zero (invalid fraction)
// Expected: false (cannot be a proper fraction)
assertEquals(isProperFraction(1, 0), false);
assertEquals(isProperFraction(-5, 0), false); // Also for negative numerator

// Stretch 3: Negative denominator (behavior based on `Math.abs(numerator) < denominator` without normalization)
// Input: 4 / -5
// Expected: false (Math.abs(4) < -5 is false, as 4 is not less than -5)
assertEquals(isProperFraction(4, -5), false);

// Stretch 4: Both numerator and denominator are negative
// Input: -5 / -2 (which simplifies to 5/2, an improper fraction)
// Expected: false (Math.abs(-5) < -2 is false, as 5 is not less than -2)
assertEquals(isProperFraction(-5, -2), false);

// Stretch 5: Very large numbers
assertEquals(isProperFraction(1000000, 2000000), true);
assertEquals(isProperFraction(2000000, 1000000), false);

console.log("\nAll console.assert tests passed if no error messages are displayed above!");