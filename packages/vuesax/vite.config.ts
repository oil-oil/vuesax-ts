import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    cssCodeSplit: false,
    lib: {
      entry: "src/components/index.ts",
      formats: ["es", "cjs"],
    },
    outDir: "lib",
    rollupOptions: {
      external: ["vue"],
      output: [
        {
          format: "es",
          entryFileNames: "[name].js",
          preserveModules: true,
          dir: "es",
          preserveModulesRoot: "src",
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          preserveModules: true,
          dir: "lib",
          preserveModulesRoot: "src",
        },
      ],
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      outputDir: "es",
      tsConfigFilePath: "./tsconfig.json",
    }),
  ],
});
