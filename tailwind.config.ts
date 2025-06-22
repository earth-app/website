import type { Config } from "tailwindcss";
import motion from "tailwindcss-motion";

const config: Config = {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.{vue,js,ts}',
        './pages/**/*.{vue,js,ts}',
        './app.vue'
    ],
    darkMode: 'class',
    plugins: [motion]
}

export default config;