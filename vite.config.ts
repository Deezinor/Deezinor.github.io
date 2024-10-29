import { resolve } from "path";
import { defineConfig } from "vite";
import sass from "sass"; // Dart Sass
import vitePluginSassDts from 'vite-plugin-sass-dts';

export default defineConfig({
  plugins: [
    vitePluginSassDts(),
  ],
  root: resolve(__dirname, "src/"),
  css: {
    postcss: "./postcss.config.cjs",
    preprocessorOptions: {
      less: {
        math: "parens-division",
      },
      scss: {
        api: "modern-compiler",
        // additionalData: '@use "./src/sass/main.scss" as *;'
      },
    },
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      // Add "*PageName*: resolve(__dirname, "src/index.html")," here to add
      // pages to build output
      input: {
        home: resolve(__dirname, "src/index.html"),
        services: resolve(__dirname, "src/services/index.html"),
        projects: resolve(__dirname, "src/projects/index.html"),
        beatbox: resolve(__dirname, "src/beatbox/index.html"),
        about: resolve(__dirname, "src/about/index.html"),
        contact: resolve(__dirname, "src/contact/index.html"),
      },
    },
  },
});
