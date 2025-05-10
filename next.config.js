/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

let config
if (process.env.SKIP_ENV_VALIDATION) {
  // FIXME: When building, NextJS is checking for prisma/seed.ts type validity.
  // Also, if you build an object the usual way, it will complain about invalid
  // keys, WTF?
  let config = {}
  config["output"] = "standalone";
  config["typescript"] = { ignoreBuildErrors: true };
  config["eslint"] = { ignoreDuringBuilds: true };
} else {
  /** @type {import("next").NextConfig} */
  const _config = {
    output: "standalone",
  };
  config = _config;
}

export default config;
