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
                background: "#0B0B0B",
                surface: "#111111",
                border: "rgba(255, 255, 255, 0.10)",
                glass: "rgba(255, 255, 255, 0.06)",
                "text-muted": "#9CA3AF",
                accent: "#4F46E5",
            },
            fontFamily: {
                heading: ["var(--font-space-grotesk)", "sans-serif"],
                body: ["var(--font-inter)", "sans-serif"],
                script: ["var(--font-dancing-script)", "cursive"],
            },
            borderRadius: {
                DEFAULT: "14px",
            },
            boxShadow: {
                glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
                glow: "0 0 20px rgba(79, 70, 229, 0.2)",
            },
        },
    },
    plugins: [],
};
export default config;
