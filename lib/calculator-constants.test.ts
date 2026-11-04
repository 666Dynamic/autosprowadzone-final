
import { describe, expect, it } from "bun:test";
import { formatCurrency, formatNumber } from "./calculator-constants";

describe("calculator-constants", () => {
  it("formats currency in PLN correctly", () => {
    // Note: Intl.NumberFormat for pl-PL uses non-breaking space (U+00A0) before the symbol
    // So we match against that explicitly
    const result = formatCurrency(1234.56, "PLN");
    expect(result).toBe("1234,56\u00A0zł");
  });

  it("formats currency in EUR correctly", () => {
    const result = formatCurrency(1234.56, "EUR");
    expect(result).toBe("1234,56\u00A0€");
  });

  it("formats currency with default parameters (PLN)", () => {
    const result = formatCurrency(1000);
    expect(result).toBe("1000,00\u00A0zł");
  });

  it("formats large numbers correctly", () => {
    const result = formatCurrency(1000000, "PLN");
    // 1 000 000,00 zł - spaces are non-breaking
    expect(result).toBe("1\u00A0000\u00A0000,00\u00A0zł");
  });

  it("formats numbers correctly", () => {
    const result = formatNumber(123456);
    expect(result).toBe("123\u00A0456");
  });

  it("formats small numbers correctly", () => {
    const result = formatNumber(0);
    expect(result).toBe("0");
  });
});
