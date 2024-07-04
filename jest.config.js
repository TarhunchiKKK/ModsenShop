/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: "ts-jest",
    testEnvironment: "node",
    // modulePaths: ["src"],
    moduleNameMapper: {
        "@/types": "<rootDir>/src/types",
    },
};
