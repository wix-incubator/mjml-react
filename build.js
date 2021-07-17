const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["src/index.js"],
    outdir: "dist",
    bundle: true,
    sourcemap: true,
    // minify: true,
    format: "esm",
    target: ["es6"],
  })
  .catch(() => process.exit(1));
