import { expect, test, describe } from "bun:test";
import { formatCurrency, formatNumber } from "./calculator-constants";

describe("Calculator Constants", () => {
    test("formatCurrency formats PLN correctly", () => {
        expect(formatCurrency(1000)).toBe("1000,00\u00A0zł");
        expect(formatCurrency(10000)).toBe("10\u00A0000,00\u00A0zł");
        expect(formatCurrency(1234.56)).toBe("1234,56\u00A0zł");
        expect(formatCurrency(0)).toBe("0,00\u00A0zł");
    });

    test("formatCurrency formats EUR correctly", () => {
        expect(formatCurrency(1000, "EUR")).toBe("1000,00\u00A0€");
        expect(formatCurrency(10000, "EUR")).toBe("10\u00A0000,00\u00A0€");
        expect(formatCurrency(1234.56, "EUR")).toBe("1234,56\u00A0€");
    });

    test("formatNumber formats correctly", () => {
        expect(formatNumber(1000)).toBe("1000");
        expect(formatNumber(10000)).toBe("10\u00A0000");
        expect(formatNumber(1234.56)).toBe("1235"); // Rounds to 0 decimal places
        expect(formatNumber(0)).toBe("0");
    });
});
