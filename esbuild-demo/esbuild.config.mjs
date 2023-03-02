import * as esbuild from "esbuild";

esbuild.build({
  entryPoints: ["src/index.js"],
  bundle: true,
  outfile: "dist/bundle.js",
  minify: true,
  sourcemap: true,
  target: ["es2015"],
  format: "esm",
  platform: "browser",
  loader: {
    ".js": "jsx",
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  plugins: [],
  watch: {
    onRebuild(error, result) {
      if (error) console.error("watch build failed:", error);
      else console.log("watch build succeeded:", result);
    },
  },
});
