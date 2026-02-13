import type { NextConfig } from "next";

module.exports = {
  output:"standalone",
  turbo: {
    root: "/home/roach/Projects/sites/jaco-botha"
  },
}

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
