module.exports = {
  "*": "pretty-quick  --staged",
  "**/*.(ts)?(x)": () => `yarn type-check`,
  "**/*.(ts|js)?(x)": (filenames) => {
    const files = filenames.join(" ");
    return `yarn lint-ci ${files}`;
  },
};
