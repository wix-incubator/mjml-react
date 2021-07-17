const esbuild = require("esbuild");
const { dependencies, peerDependencies } = require("./package.json");

esbuild
  .build({
    entryPoints: ["src/index.js"],
    outdir: "dist",

    bundle: true,
    sourcemap: true,
    // minify: true,
    // format: "esm",
    target: ["es6"],
    external: Object.keys(dependencies).concat(Object.keys(peerDependencies)),
    logLevel: 'verbose',
  })
  .catch(() => process.exit(1));
