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
                "primary-dark": "rgb(69, 44, 153)",
                "primary": "rgb(118, 73, 254)",
                "primary-light": "rgb(144, 111, 252)",
                "secondary-dark": "rgb(62, 216, 175)",
                "secondary": "rgb(73, 254, 208)",
                "secondary-light": "rgb(164, 252, 228)",
                "shadow": "rgb(17, 20, 23)",
            },
            fontSize: {
                "xxs": [ "0.625rem", "0.75rem" ],
            },
        },
    },
    plugins: [],
};
export default config;
