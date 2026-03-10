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
                background: "var(--background)",
                foreground: "var(--foreground)",
                surface: "var(--surface)",
                border: "var(--border)",
                glass: "var(--glass-bg)",
                "text-muted": "var(--text-muted)",
                accent: "var(--accent)",
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
