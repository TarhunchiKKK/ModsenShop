import { describe, expect, test } from "@jest/globals";
import { capitalizeString } from "../../src/utils/string/capitalizeString";

describe("Capitalizeing string", () => {
    test("Should capitalize the first letter of the string", () => {
        const testValue: string = "hello world";
        const expectedValue: string = "Hello world";

        const receivedValue: string = capitalizeString(testValue);
        expect(receivedValue).toEqual(expectedValue);
    });
});
