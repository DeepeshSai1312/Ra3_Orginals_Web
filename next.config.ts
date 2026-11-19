import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Builder's SDK evaluates bindings server-side with this native module.
  serverExternalPackages: ['isolated-vm'],
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.builder.io' }],
  },
  turbopack: {
    // Pin the workspace root (there is an unrelated lockfile in the home directory).
    root: process.cwd(),
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
};

export default nextConfig;
