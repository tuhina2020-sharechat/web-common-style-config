// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: "babel-eslint",
	parserOptions: {
		sourceType: "module"
	},
	env: {
		browser: true
	},
	// https://github.com/standard/standard/blob/master/docs/RULES-en.md
	extends: ["standard", "prettier", "prettier/standard"],
	// required to lint *.vue files
	plugins: ["html"],
	// add your custom rules here
	rules: {
		"no-debugger": process.env.NODE_ENV === "production" ? 2 : 0
	}
}
