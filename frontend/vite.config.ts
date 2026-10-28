/// <reference types="vitest"  />

import {defineConfig} from 'vitest/config';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    server: {
        port: 3000,
        strictPort: true,
        hmr: {
            clientPort: 3000,
        },
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
            },
        },
    },
    plugins: [
        react(),
        tailwindcss(),
        babel({ presets: [reactCompilerPreset()] }),
    ],
    build: {
        outDir: 'build',
    },
});