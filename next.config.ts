import type { NextConfig } from "next";

module.exports = {
  output:"standalone",
}

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
