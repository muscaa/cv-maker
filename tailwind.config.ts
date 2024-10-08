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
                "background-1": "rgb(22, 25, 28)",
                "background-2": "rgb(42, 45, 48)",
                "background-3": "rgb(62, 65, 68)",
                "background-4": "rgb(82, 85, 88)",
                "text-1": "rgb(250, 249, 246)",
                "text-2": "rgb(210, 209, 206)",
                "text-3": "rgb(173, 172, 171)",
                "text-4": "rgb(113, 112, 111)",
                "primary": "rgb(118, 73, 254)",
                "primary-light": "rgb(144, 111, 252)",
                "secondary": "rgb(73, 254, 208)",
                "secondary-light": "rgb(113, 252, 215)",
                "shadow": "rgb(17, 20, 23)",
                /*
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
                */
            },
            fontSize: {
                "xxs": [ "0.625rem", "0.75rem" ],
            },
        },
    },
    plugins: [],
};
export default config;
