module.exports = {
	roots: ["<rootDir>"],
	moduleFileExtensions: ["ts", "tsx", "js"],
	testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]", "test-utils.tsx"],
	transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
	transform: {
		"^.+\\.(ts|tsx)$": "babel-jest",
	},
	setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
