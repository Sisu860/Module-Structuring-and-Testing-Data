const getAngleType = require("./1-get-angle-type");

// make your test descriptions as clear and readable as possible

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

describe("Case 2: Identify Acute Angles", () => {
  // When the angle is less than 90 degrees,
  // Then the function should return "Acute angle"

  test("should identify acute angle (e.g., 45°)", () => {
    expect(getAngleType(45)).toEqual("Acute angle");
  });

  test("should identify acute angle at lower bound (1°)", () => {
    expect(getAngleType(1)).toEqual("Acute angle");
  });
  test("should identify acute angle at upper bound (89°)", () => {
  expect(getAngleType(89)).toEqual("Acute angle");
  });
});

describe("Case 3: Identify Obtuse Angles", () => {
  // When the angle is greater than 90 degrees and less than 180 degrees,
  // Then the function should return "Obtuse angle"

  test("should identify obtuse angle (e.g., 120°)", () => {
    expect(getAngleType(120)).toEqual("Obtuse angle");
  });

  test("should identify obtuse angle at lower bound (91°)", () => {
    expect(getAngleType(91)).toEqual("Obtuse angle");
  });

  test("should identify obtuse angle at upper bound (179°)", () => {
    expect(getAngleType(179)).toEqual("Obtuse angle");
  });
});

describe("Case 4: Identify Straight Angles", () => {
  // When the angle is exactly 180 degrees,
  // Then the function should return "Straight angle"

  test("should identify straight angle (180°)", () => {
    expect(getAngleType(180)).toEqual("Straight angle");
  });
});
describe("Case 5: Identify Reflex Angles", () => {
  // When the angle is greater than 180 degrees and less than 360 degrees,
  // Then the function should return "Reflex angle"

  test("should identify reflex angle (e.g., 270°)", () => {
    expect(getAngleType(270)).toEqual("Reflex angle");
  });

  test("should identify reflex angle at lower bound (181°)", () => {
    expect(getAngleType(181)).toEqual("Reflex angle");
  });

  test("should identify reflex angle at upper bound (359°)", () => {
    expect(getAngleType(359)).toEqual("Reflex angle");
  });
});

describe("Case 6: Identify Invalid Angles", () => {
  // When the angle is less than or equal to 0 degrees or greater than or equal to 360 degrees,
  // Then the function should return "Invalid angle"

  test("should identify invalid angle for 0 degrees", () => {
    expect(getAngleType(0)).toEqual("Invalid angle");
  });

  test("should identify invalid angle for 360 degrees", () => {
    expect(getAngleType(360)).toEqual("Invalid angle");
  });

  test("should identify invalid angle for negative values", () => {
    expect(getAngleType(-10)).toEqual("Invalid angle");
  });

  test("should identify invalid angle for values greater than 360 degrees", () => {
    expect(getAngleType(400)).toEqual("Invalid angle");
  });
});
