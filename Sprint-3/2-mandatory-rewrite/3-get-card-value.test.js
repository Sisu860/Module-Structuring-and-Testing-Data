const getCardValue = require("./3-get-card-value");

// Case 1: Handle Ace Cards (A)
test("should return 11 for Ace cards", () => {
  expect(getCardValue("A♠")).toEqual(11);
  expect(getCardValue("A♣")).toEqual(11);
  expect(getCardValue("A♦")).toEqual(11);
  expect(getCardValue("A♥")).toEqual(11);
});

// Case 2: Handle Number Cards (2-9)
test("should return the correct numeric value for cards 2 through 9", () => {
  expect(getCardValue("2♦")).toEqual(2);
  expect(getCardValue("5♣")).toEqual(5);
  expect(getCardValue("9♥")).toEqual(9);
});

// Case 3: Handle Face Cards (J, Q, K) and the '10' card
test("should return 10 for face cards (J, Q, K) and the '10' card", () => {
  expect(getCardValue("J♦")).toEqual(10);
  expect(getCardValue("Q♣")).toEqual(10);
  expect(getCardValue("K♠")).toEqual(10);
  expect(getCardValue("10♥")).toEqual(10); // Test for '10' specifically
});

// Case 4: Handle Invalid Cards (should throw an error "Invalid card rank.")
test("should throw an 'Invalid card rank.' error for unknown ranks", () => {
  // Test invalid number ranks (e.g., 1, 0, 11, 15)
  expect(() => getCardValue("1♠")).toThrow("Invalid card rank.");
  expect(() => getCardValue("0♣")).toThrow("Invalid card rank.");
  expect(() => getCardValue("11♦")).toThrow("Invalid card rank.");
  expect(() => getCardValue("15♥")).toThrow("Invalid card rank.");

  // Test non-existent ranks (e.g., X, Z)
  expect(() => getCardValue("X♣")).toThrow("Invalid card rank.");
  expect(() => getCardValue("Z♦")).toThrow("Invalid card rank.");

  // Test invalid format (too short, missing suit)
  expect(() => getCardValue("A")).toThrow("Invalid card rank."); // "A" is too short, treated as invalid rank/format
  expect(() => getCardValue("")).toThrow("Invalid card rank."); // Empty string
  expect(() => getCardValue("K")).toThrow("Invalid card rank."); // Missing suit

  // Test non-string input
  expect(() => getCardValue(null)).toThrow("Invalid card rank.");
  expect(() => getCardValue(undefined)).toThrow("Invalid card rank.");
  expect(() => getCardValue(10)).toThrow("Invalid card rank.");
});