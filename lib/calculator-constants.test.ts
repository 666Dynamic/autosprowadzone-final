import { expect, test, describe } from "bun:test";
import { formatCurrency, formatNumber } from "./calculator-constants";

describe("Calculator Constants", () => {
  test("formatCurrency formats PLN correctly", () => {
    // 1000 PLN
    const result1000 = formatCurrency(1000, "PLN");
    // Depending on environment, it might be space or NBSP.
    // Given previous check, it seems to be NBSP (\u00A0).
    // Let's normalize spaces to regular space for easier assertion if strict equality fails,
    // but better to assert exact value first.

    // Check for "1000,00 zł" with NBSP before zł
    expect(result1000).toMatch(/1000,00\s+zł/);

    // 10000 PLN -> "10 000,00 zł"
    const result10000 = formatCurrency(10000, "PLN");
    expect(result10000).toMatch(/10\s+000,00\s+zł/);
  });

  test("formatCurrency formats EUR correctly", () => {
    const result = formatCurrency(1000, "EUR");
    expect(result).toMatch(/1000,00\s+€/);
  });

  test("formatNumber formats correctly", () => {
    const result = formatNumber(10000);
    expect(result).toMatch(/10\s+000/);
  });

  test("formatCurrency handles zero", () => {
    expect(formatCurrency(0)).toMatch(/0,00\s+zł/);
  });
});
