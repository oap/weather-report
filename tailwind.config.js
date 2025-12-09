/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#1392ec",
                "background-light": "#f6f7f8",
                "background-dark": "#101a22",
            },
            fontFamily: {
                display: ["Inter"],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
                lg: "1rem",
                xl: "1.5rem",
                full: "9999px",
            },
            keyframes: {
                "fade-in-up": {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
            animation: {
                "fade-in-up": "fade-in-up 600ms ease-out both",
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
}
