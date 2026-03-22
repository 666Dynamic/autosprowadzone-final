import { expect, test, describe } from "bun:test";
import { formatCurrency, formatNumber } from "./calculator-constants";

describe("calculator-constants formatters", () => {
  test("formatCurrency correctly formats EUR", () => {
    // Note: pl-PL output contains non-breaking spaces \u00A0
    const result = formatCurrency(1234.56, "EUR");
    // Depending on environment Intl.NumberFormat, it might be "1 234,56 €" or "1234,56 €" etc
    expect(result.replace(/\u00A0/g, " ")).toMatch(/1\s?234,56\s€/);
  });

  test("formatCurrency correctly formats PLN", () => {
    const result = formatCurrency(123456.78, "PLN");
    expect(result.replace(/\u00A0/g, " ")).toMatch(/123\s456,78\szł/);
  });

  test("formatNumber correctly formats numbers", () => {
    const result = formatNumber(10000);
    expect(result.replace(/\u00A0/g, " ")).toBe("10 000");
  });

  test("formatCurrency caches and reuses formatters correctly", () => {
    // Call multiple times to ensure cache hit works and returns same formatted result
    const result1 = formatCurrency(500, "PLN");
    const result2 = formatCurrency(500, "PLN");
    expect(result1).toBe(result2);
  });
});
