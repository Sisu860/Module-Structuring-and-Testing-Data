/**
 * Validates a password against a set of criteria.
 * @param {string} password The password string to validate.
 * @param {string[]} previousPasswords An array of previously used/banned passwords. Defaults to an empty array if not provided.
 * @returns {boolean} True if the password is valid, false otherwise.
 */
function passwordValidator(password, previousPasswords = []) {
    // Rule 1: Have at least 5 characters.
    if (password.length < 5) {
        return false;
    }

    // Rule 2: Have at least one English uppercase letter (A-Z)
    if (!/[A-Z]/.test(password)) {
        return false;
    }

    // Rule 3: Have at least one English lowercase letter (a-z)
    if (!/[a-z]/.test(password)) {
        return false;
    }

    // Rule 4: Have at least one number (0-9)
    if (!/[0-9]/.test(password)) {
        return false;
    }

    // Rule 5: Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
    // The regex `[!#$%&*.]` matches any single character within the brackets.
    // Note: The dot `.` is escaped inside `[]` so it matches a literal dot, not any character.
    if (!/[!#$%&*.]/.test(password)) {
        return false;
    }

    // Rule 6: Must not be any previous password in the previousPasswords array.
    if (previousPasswords.includes(password)) {
        return false;
    }

    // If all checks pass, the password is valid.
    return true;
}

module.exports = passwordValidator;