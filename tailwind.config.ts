import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                screens: {
                    sm: "600px",
                    md: "728px",
                    lg: "984px",
                    xl: "1240px",
                    "2xl": "1496px",
                },
                padding: "1rem",
            },
            colors: {
                primary: "#144EE3",
                success: "#1EB036",
                warning: "#B0901E",
                danger: "#EB568E",
                grad: "#144EE3 0%,#EB568E 19%,#A353AA 64%,#144EE3 100%",
            },
        },
    },
    plugins: [],
} satisfies Config;
