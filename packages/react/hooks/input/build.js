import run from "@manon/esbuild-config";
import pkg from "./package.json" assert { type: "json" };

run({
  pkg,
});
