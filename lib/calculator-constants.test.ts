import { describe, expect, test } from "bun:test";
import { formatCurrency } from "./calculator-constants";

describe("formatCurrency", () => {
  test("formats PLN correctly (default)", () => {
    // Note: Polish locale uses non-breaking space (U+00A0) as group separator and currency separator
    expect(formatCurrency(100)).toBe("100,00\u00A0zł");
    expect(formatCurrency(10000)).toBe("10\u00A0000,00\u00A0zł");
  });

  test("formats EUR correctly", () => {
    expect(formatCurrency(100, "EUR")).toBe("100,00\u00A0€");
    expect(formatCurrency(10000, "EUR")).toBe("10\u00A0000,00\u00A0€");
  });
});
