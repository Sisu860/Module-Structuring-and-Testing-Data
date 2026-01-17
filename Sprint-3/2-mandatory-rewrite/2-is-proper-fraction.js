function isProperFraction(numerator, denominator) {
    // A denominator of zero makes the fraction undefined, so it's not a proper fraction.
    if (denominator === 0) {
        return false;
    }

    // A proper fraction is one where the absolute value of the numerator
    // is strictly less than the absolute value of the denominator.
    // This handles negative numerators and denominators correctly.
    return Math.abs(numerator) < Math.abs(denominator);
}

module.exports = isProperFraction;