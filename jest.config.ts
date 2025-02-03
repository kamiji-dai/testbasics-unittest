export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  testEnvironment: "jest-environment-jsdom",
  transform: { "^.+\\.(ts|tsx)$": ["esbuild-jest", { sourcemap: true }] },
  setupFilesAfterEnv: ["./jest.setup.ts"],
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "./coverage/html-report",
        filename: "report.html",
        openReport: true,
      },
    ],
  ],
};
