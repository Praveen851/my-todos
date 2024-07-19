module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
    transformIgnorePatterns: [
        "/node_modules/(?!react-native-toast-message|other-modules-to-transform).+\\.js$",
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less)$": "identity-obj-proxy",
    },
};
