const esbuild = require("esbuild");
const { peerDependencies } = require("./package.json");

esbuild
  .build({
    entryPoints: ["src/index.tsx"],
    outdir: "dist",

    bundle: true,
    sourcemap: true,
    loader: { ".tsx": "tsx" },
    format: "cjs",
    target: ["es6"],
    external: Object.keys(peerDependencies),
    logLevel: "info",
  })
  .catch(() => process.exit(1));
