const { configure } = require("yakshaving");

const pluginServe = require("rollup-plugin-serve");

const path = require("path");

configure((devMode) => ({
  projectRoot: __dirname,
  entryPoint: "source/index.tsx",
  outputDirectory: "public/dist",

  additionalPlugins: [
    devMode &&
      pluginServe({ contentBase: "public", historyApiFallback: "/index.html" }),
  ],

  advanced: {
    rollupOptions: {
      input: { preserveEntrySignatures: false },
    },
    pluginOptions: {
      typescript: {
        tsconfig: path.join(__dirname, "tsconfig.json"),
      },
    },
  },
}));
