function getCardValue(card) {
    // Basic input validation: check if it's a string and has at least rank + suit.
    // If format is bad, it's still considered an invalid rank/card within this context.
    if (typeof card !== "string" || card.length < 2) {
        throw new Error("Invalid card rank."); // Matches test's expected error message
    }

    // Extract the rank by removing the last character (the suit emoji).
    // .trim() removes any potential leading/trailing whitespace.
    const rank = card.slice(0, -1).trim();

    // Handle Ace: returns 11
    if (rank === "A") {
        return 11;
    }

    // Handle Face Cards (J, Q, K) and the '10' card: all return 10
    if (["K", "Q", "J", "10"].includes(rank)) {
        return 10;
    }

    // Handle Number Cards (2-9): return their numeric value
    const rankNumber = Number(rank); // Convert rank string to a number
    // Check if it's a valid number AND within the range 2 to 9
    if (!isNaN(rankNumber) && rankNumber >= 2 && rankNumber <= 9) {
        return rankNumber;
    }

    // If none of the above conditions were met, the card rank is invalid
    throw new Error("Invalid card rank."); // Matches test's expected error message
}

module.exports = getCardValue;