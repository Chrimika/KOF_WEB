import type { NextConfig } from "next";
import path from 'path';

// Définir la configuration Next.js
const nextConfig: NextConfig = {
  // Configuration par défaut de Next.js
  reactStrictMode: true,  // Exemple d'option, tu peux la personnaliser selon tes besoins
  webpack: (config) => {
    // Ajouter l'alias '@' pour pointer vers le répertoire 'src'
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};

export default nextConfig;
