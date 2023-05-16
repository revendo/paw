import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        host: true,
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "@tailwindConfig": fileURLToPath(
                new URL("./tailwind.config.js", import.meta.url)
            ),
        },
    },
    optimizeDeps: {
        include: ["@tailwindConfig"],
    },
    build: {

        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, "index.js"),
            name: "paw",
            // the proper extensions will be added
            fileName: "paw",
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ["vue"],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
});

