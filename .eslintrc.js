module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "react"],
    extends: [
        "@react-native-community",
        "prettier/@typescript-eslint",
        "plugin:@typescript-eslint/recommended",
        "prettier/react",
        "plugin:react/recommended",
        "airbnb",
        "airbnb-typescript",
        "prettier",
    ],
};
