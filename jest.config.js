module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    // Pattern to find test files
    testMatch: [
        "**/src/**/*.spec.ts",
        "**/src/**/*.test.ts",
        // Include the line below if you have tests outside of the src directory
        // "**/*.spec.ts",
        // "**/*.test.ts"
    ],
    // Module file extensions for importing
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    // Use transform to configure ts-jest with the path to your TypeScript config file
    transform: {
        '^.+\\.ts$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
    },
    // Optional: Collect coverage from your TypeScript files
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.{ts,js}",
        "!src/**/*.d.ts"
    ],
};
