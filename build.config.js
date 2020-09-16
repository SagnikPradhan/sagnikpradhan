const { configure } = require("yakshaving");

const pluginServe = require("rollup-plugin-serve");
const pluginLiveReload = require("rollup-plugin-livereload");
const pluginPostCSS = require("rollup-plugin-postcss");

configure((devMode) => ({
  projectRoot: __dirname,
  entryPoint: "source/index.tsx",
  outputDirectory: "public/dist",
  additionalPlugins: [
    pluginPostCSS({
      exec: true,
    }),
    devMode &&
      pluginServe({ contentBase: "public", historyApiFallback: "/index.html" }),
    devMode && pluginLiveReload({ watch: "public/dist" }),
  ],
}));
