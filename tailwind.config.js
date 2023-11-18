/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                '3xl': '1px -1px 24px 11px rgba(130,252,255,0.40)',
            },
        },
    },
    plugins: [],
};
