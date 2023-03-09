export default [
  {
    input: "src/content.js",
    output: [
      {
        file: "dist/scripts/content.js",
        format: "iife",
      },
    ],
  },
  {
    input: "src/background.js",
    output: [
      {
        file: "dist/scripts/background.js",
        format: "iife",
      },
    ],
  },
];
