// Implement a function getAngleType
// Build up your function case by case, writing tests as you go
// The first test and case is written for you. The next case has a test, but no code.
// Execute this script in your terminal: `node 1-get-angle-type.js`
// The assertion error will tell you what the expected output is
// Write the code to pass the test
// Then, write the next test! :) Go through this process until all the cases are implemented

// Function to return the type of angle based on its degree
function getAngleType(angle) {
  if (angle === 90) return "Right angle";
  if (angle > 0 && angle < 90) return "Acute angle"; // Ensuring positive angles for acute
  if (angle > 90 && angle < 180) return "Obtuse angle";
  if (angle === 180) return "Straight angle";
  if (angle > 180 && angle < 360) return "Reflex angle";

  // Optional: Handle angles outside the defined ranges (e.g., 0, 360, negative, or greater than 360)
  // For this exercise, the prompt implies handling specific ranges,
  // but a real-world function might return "Invalid angle" or similar for undefined cases.
  return "Invalid angle or not covered"; // Added for robustness, though not strictly required by original prompt
}


// Helper function for assertions
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Test Failed: Expected "${targetOutput}", but got "${actualOutput}"`
  );
  if (actualOutput === targetOutput) {
    console.log(`Test Passed: Output for angle resulting in "${actualOutput}" is "${targetOutput}"`);
  }
}


// Acceptance criteria:

// Given an angle in degrees,
// When the function getAngleType is called with this angle,
// Then it should:

// ✅ Test cases

// Case 1: Identify Right Angles:
// When the angle is exactly 90 degrees,
// Then the function should return "Right angle"
const right = getAngleType(90);
assertEquals(right, "Right angle");


// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"
const acute = getAngleType(45);
assertEquals(acute, "Acute angle");


// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
const obtuse = getAngleType(120);
assertEquals(obtuse, "Obtuse angle");


// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
const straight = getAngleType(180);
assertEquals(straight, "Straight angle");


// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
const reflex = getAngleType(200); // Changed variable name from "Reflex" to "reflex" for consistency
assertEquals(reflex, "Reflex angle");

// --- Additional Edge Case Tests (Optional but good practice) ---
console.log("\n--- Additional Edge Case Tests ---");
assertEquals(getAngleType(1), "Acute angle");     // Smallest acute
assertEquals(getAngleType(89), "Acute angle");    // Largest acute
assertEquals(getAngleType(91), "Obtuse angle");   // Smallest obtuse
assertEquals(getAngleType(179), "Obtuse angle");  // Largest obtuse
assertEquals(getAngleType(181), "Reflex angle");  // Smallest reflex
assertEquals(getAngleType(359), "Reflex angle");  // Largest reflex
assertEquals(getAngleType(0), "Invalid angle or not covered");   // Edge case: 0 degrees
assertEquals(getAngleType(360), "Invalid angle or not covered"); // Edge case: 360 degrees
assertEquals(getAngleType(-10), "Invalid angle or not covered"); // Edge case: Negative angle