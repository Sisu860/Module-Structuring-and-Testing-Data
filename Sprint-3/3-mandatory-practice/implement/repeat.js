function repeat(str, count) {
    // Case: Handle Negative Count
    // If count is less than 0, it's not a valid number of times to repeat.
    if (count < 0) {
        throw new Error("Count must be non-negative");
    }

    // Initialize an empty string to build our result
    let result = "";

    // Loop 'count' times, appending the 'str' in each iteration
    for (let i = 0; i < count; i++) {
        result += str;
    }

    // Return the final repeated string
    return result;
}

module.exports = repeat;