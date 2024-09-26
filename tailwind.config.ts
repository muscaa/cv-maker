import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "background-1": "var(--background-1)",
                "background-2": "var(--background-2)",
                "background-3": "var(--background-3)",
                "background-4": "var(--background-4)",
                "text-1": "var(--text-1)",
                "text-2": "var(--text-2)",
                "text-3": "var(--text-3)",
                "text-4": "var(--text-4)",
                "primary": "var(--primary)",
                "primary-light": "var(--primary-light)",
                "secondary": "var(--secondary)",
                "secondary-light": "var(--secondary-light)",
                "shadow": "var(--shadow)",
            },
            fontSize: {
                "xxs": [ "0.625rem", "0.75rem" ],
            },
        },
    },
    plugins: [],
};
export default config;
