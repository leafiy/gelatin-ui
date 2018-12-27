module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential", "@vue/prettier"],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-useless-escape": "off",
        "no-empty": "off",
        "vue/no-use-v-if-with-v-for": "off",
        "no-case-declarations": "off"
    },
    parserOptions: {
        parser: "babel-eslint",
        "ecmaVersion": 2017
    }
};