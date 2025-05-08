import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const path = require('path');

interface WebpackConfig {
  resolve: {
    alias: {
      [key: string]: string;
    };
  };
}

interface ModuleExports {
  webpack: (config: WebpackConfig) => WebpackConfig;
}

const moduleExports: ModuleExports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};

export default nextConfig;
