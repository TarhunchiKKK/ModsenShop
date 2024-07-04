import { describe, expect, test } from "@jest/globals";
import { getExtremePrices } from "../../src/utils/products/getExtremePrices";
import { mockProducts } from "../mocks";

describe("Get extreme prices", () => {
    test("Shoult return { minPrice: 15.99, maxPrice: 695 }", () => {
        const expectedValue = { minPrice: 15.99, maxPrice: 695 };
        const receivedValue = getExtremePrices(mockProducts);
        expect(expectedValue).toEqual(receivedValue);
    });
});
