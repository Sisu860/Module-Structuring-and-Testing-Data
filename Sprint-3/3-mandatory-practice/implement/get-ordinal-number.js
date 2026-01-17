function getOrdinalNumber(num) {
    // Input validation: Ensure the input is a positive integer
    if (num < 1 || !Number.isInteger(num)) {
        throw new Error("Input must be a positive integer");
    }

    const lastTwoDigits = num % 100;
    // Check for special cases ending in 11, 12, 13, which always take 'th'
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return num + "th";
    }

    const lastDigit = num % 10;
    // Determine suffix based on the last digit for general cases
    // suffixes array: index 0 is 'th', 1 is 'st', 2 is 'nd', 3 is 'rd'
    // For other digits (4-9), suffixes[lastDigit] will be undefined, so it defaults to 'th'
    const suffixes = ["th", "st", "nd", "rd"];
    return num + (suffixes[lastDigit] || "th");
}

module.exports = getOrdinalNumber;