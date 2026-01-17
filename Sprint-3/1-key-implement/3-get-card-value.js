// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck
//
// You will need to implement a function getCardValue.
// The function takes a single parameter, a string representing a playing card.
// The function should return the numerical value of the card.
//
// Details:
// - The input card string will be in the format like "A♠", where the last character is always a suit emoji,
//   and all preceding characters represent the rank: a number (2-10) or one of the letters J, Q, K, A.
// - The function should return:
//    * 11 for Ace ("A")
//    * 10 for face cards ("J", "Q", "K") and the number "10"
//    * The numeric value for cards 2 through 9
// - If the card rank is invalid (not one of the above), or the format is wrong,
//   the function should return the string "Invalid card".
//
// You should write assertions (tests) to check your function for different cases:
//  - Ace card
//  - Number cards (2-9)
//  - Face cards (J, Q, K)
//  - The "10" card
//  - Invalid cards that should return "Invalid card"
//
// Write one test at a time, get it passing, then move on to the next.


// Implementation of the function
function getCardValue(card) {
  // First, check for invalid input format (not a string, or too short)
  if (typeof card !== "string" || card.length < 2) {
    return "Invalid card";
  }

  // Extract the rank by removing the last character (the suit emoji)
  // .trim() helps remove any accidental whitespace
  // const rank = card.slice(0, -1).trim();
  //What would happen here if we provided the String "A♠ " ?
  /*First, .slice(0, -1) cuts off the last character — which is the space,
So you get "A♠"
Then .trim() doesn’t do much, because there’s no space left.
I end up with "A♠" which is wrong, since the suit didn’t get removed.
So order matters a lot here. trim must come before slice, or it won't work reliably if whitespace is present.
*/
//What would be assigned to to the variable "rank" ?
//If slice() comes first, we get "A♠",  which is wrong.
//How does the order in which the String methods are called impact the end result?
//It determines whether I correctly slice off the suit or accidentally keep it. The methods aren't interchangeable.
// here is the correct order:
  const rank = card.trim().slice(0, -1);

  // Handle Ace (A)
  if (rank === "A") {
    return 11;
  }

  // Handle Face Cards (J, Q, K) and the '10' card
  if (rank === "J" || rank === "Q" || rank === "K" || rank === "10") {
    return 10;
  }

  // Handle Number Cards (2-9)
  const rankNumber = Number(rank); // Convert the rank string to a number
  // Check if it's a valid number (not NaN) and within the range 2 to 9
  if (!isNaN(rankNumber) && rankNumber >= 2 && rankNumber <= 9) {
    return rankNumber;
  }

  // If none of the above conditions are met, the card rank is invalid
  return "Invalid card";
}


// Assertion helper function (just like yours)
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected "${targetOutput}", but got "${actualOutput}"`
  );
  if (actualOutput === targetOutput) {
    console.log(`Test Passed: Output "${actualOutput}" matches expected "${targetOutput}"`);
  }
}


// Tests:

// Test Ace card
console.log("--- Testing Ace Card ---");
const aceofSpades = getCardValue("A♠");
assertEquals(aceofSpades, 11);

// Test Ace of Diamonds (another Ace example)
const aceofDiamonds = getCardValue("A♦");
assertEquals(aceofDiamonds, 11);


// Test Number Cards (2-9)
console.log("\n--- Testing Number Cards (2-9) ---");
const fiveofHearts = getCardValue("5♥");
assertEquals(fiveofHearts, 5);

// Test other number cards
assertEquals(getCardValue("2♣"), 2);
assertEquals(getCardValue("9♦"), 9);


// Test Face Cards (J, Q, K)
console.log("\n--- Testing Face Cards (J, Q, K) ---");
assertEquals(getCardValue("J♠"), 10);
assertEquals(getCardValue("Q♣"), 10);
assertEquals(getCardValue("K♦"), 10);


// Test 10 Card
console.log("\n--- Testing 10 Card ---");
const tenofHearts = getCardValue("10♥");
assertEquals(tenofHearts, 10);

// Another 10 card example
assertEquals(getCardValue("10♣"), 10);


// Test Invalid Cards (returning "Invalid card" string)
console.log("\n--- Testing Invalid Cards ---");

// Invalid rank (e.g., '1', '0', 'X', 'Z')
assertEquals(getCardValue("1♠"), "Invalid card");
assertEquals(getCardValue("X♣"), "Invalid card");
assertEquals(getCardValue("Z♥"), "Invalid card");

// Invalid format (missing suit)
assertEquals(getCardValue("A"), "Invalid card");
assertEquals(getCardValue("10"), "Invalid card");

// Empty string input
assertEquals(getCardValue(""), "Invalid card");

// Non-string inputs
assertEquals(getCardValue(null), "Invalid card");
assertEquals(getCardValue(undefined), "Invalid card");
assertEquals(getCardValue(123), "Invalid card"); // A number, not a string card

// Accidental whitespace
assertEquals(getCardValue("  A♠"), 11); 
assertEquals(getCardValue("10♣ "), 10);
assertEquals(getCardValue("  J♠ "), 10); 


// Final confirmation
console.log("\nAll console.assert tests passed if no 'Expected ... but got ...' messages appear above!");