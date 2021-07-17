const esbuild = require("esbuild");
const { peerDependencies } = require("./package.json");

esbuild
  .build({
    entryPoints: ["src/index.js"],
    outdir: "dist",

    bundle: true,
    sourcemap: true,
    // minify: true,
    format: "cjs",
    target: ["es6"],
    external: Object.keys(peerDependencies),
    logLevel: 'verbose',
  })
  .catch(() => process.exit(1));
