function getAngleType(angle) {
  if (angle === 90) return "Right angle";
  // less than 90 but greater than 0
  if (angle > 0 && angle < 90) return "Acute angle";
  // between 90 and 180
  if (angle > 90 && angle < 180) return "Obtuse angle";
  // exactly 180
  if (angle === 180) return "Straight angle";
  // between 180 and 360
  if (angle > 180 && angle < 360) return "Reflex angle";

  // Handles angles <= 0 or >= 360, which are considered invalid in this context
  return "Invalid angle";
}

// Don't get bogged down in this detail
// Jest uses CommonJS module syntax by default as it's quite old
// We will upgrade our approach to ES6 modules in the next course module, so for now
// we have just written the CommonJS module.exports syntax for you
module.exports = getAngleType;