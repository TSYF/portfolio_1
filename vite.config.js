import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src/", import.meta.url)),
            "@components": fileURLToPath(
                new URL("./src/components", import.meta.url)
            ),
            "@img": fileURLToPath(new URL("./src/assets/img", import.meta.url)),
            "@views": fileURLToPath(new URL("./src/views", import.meta.url)),
            "@router": fileURLToPath(new URL("./src/router", import.meta.url)),
            "@stores": fileURLToPath(new URL("./src/stores", import.meta.url)),
        },
    },
});
