module.exports = {
    extends: [
        "react-app",
        "react-app/jest",
        "plugin:@typescript-eslint/recommended"
    ],
    rules: {
        "quotes": [2, "double"],
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-empty-function": 0
    },
};
