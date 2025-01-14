import { toExponential, toPrecision, roundDigits, digits } from "./variant6";

describe("toExponential", () => {
  test("should format a number in exponential notation", () => {
    const result = toExponential(12345, 2);
    expect(result).toBe("1.2e+4"); 
  });

  test("should handle negative numbers", () => {
    const result = toExponential(-0.01234, 3);
    expect(result).toBe("-1.23e-2"); 
  });

  test("should return 'NaN' for invalid input", () => {
    const result = toExponential(NaN, 3);
    expect(result).toBe("NaN");
  });

  test("should return 'Infinity' for infinite input", () => {
    const result = toExponential(Infinity, 3);
    expect(result).toBe("Infinity");
  });
});

describe("toPrecision", () => {
  test("should format a number with specified precision", () => {
    const result = toPrecision(12345, 4);
    expect(result).toBe("12350"); 
  });

  test("should handle numbers in exponential notation", () => {
    const result = toPrecision(0.0001234, 3);
    expect(result).toBe("1.23e-4");
  });

  test("should return 'NaN' for invalid input", () => {
    const result = toPrecision(NaN, 2);
    expect(result).toBe("NaN");
  });
});


describe("toPrecision", () => {
  test("should format a number with specified precision", () => {
    const result = toPrecision(12345, 4);
    expect(result).toBe("12350");
  });

  test("should handle numbers in exponential notation", () => {
    const result = toPrecision(0.0001234, 3);
    expect(result).toBe("1.23e-4");
  });

  test("should return 'NaN' for invalid input", () => {
    const result = toPrecision(NaN, 2);
    expect(result).toBe("NaN");
  });
});

describe("roundDigits", () => {
  test("should round coefficients to specified precision", () => {
    const splitValue = { sign: "", coefficients: [1, 2, 3, 4, 5], exponent: 4 };
    const result = roundDigits(splitValue, 3);
    expect(result).toEqual({ sign: "", coefficients: [1, 2, 3], exponent: 4 });
  });

  test("should handle rounding up", () => {
    const splitValue = { sign: "", coefficients: [1, 2, 3, 5], exponent: 4 };
    const result = roundDigits(splitValue, 3);
    expect(result).toEqual({ sign: "", coefficients: [1, 2, 4], exponent: 4 });
  });
});

describe("digits", () => {
  test("should count significant digits in a positive number", () => {
    const result = digits(123.45);
    expect(result).toBe(5);
  });

  test("should count significant digits in a small decimal", () => {
    const result = digits(0.00123);
    expect(result).toBe(3);
  });

  test("should count significant digits in a large number with exponential notation", () => {
    const result = digits(1.23e5);
    expect(result).toBe(3);
  });
});
