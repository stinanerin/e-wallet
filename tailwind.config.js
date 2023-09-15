/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                bkg: "hsl(var(--color-bg) / <alpha-value>)",
                text: "hsl(var(--color-text) / <alpha-value>)",
                text_contrast:
                    "hsl(var(--color-text-contrast) / <alpha-value>)",
                placeholder:
                    "hsl(var(--color-text-low-contrast) / <alpha-value>)",
                elem_bg: "hsl(var(--color-elem-bg) / <alpha-value>)",
                border: "hsl(var(--color-elem-border) / <alpha-value>)",
                primary: "hsl(var(--color-primary) / <alpha-value>)",
                secondary: "hsl(var(--color-secondary) / <alpha-value>)",
                warning: "hsl(var(--color-warning) / <alpha-value>)",
                // warning_contrast:
                // "hsl(var(--color-warning-contrast) / <alpha-value>)",
                danger: "hsl(var(--color-danger) / <alpha-value>)",
                grey: {
                    100: "hsl(var(--color-grey-100) / <alpha-value>)",
                    300: "hsl(var(--color-grey-300) / <alpha-value>)",
                },
            },
        },
        screens: {
            xs: "540px",
            ...defaultTheme.screens,
        },
    },
    plugins: [],
};
