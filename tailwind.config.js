/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'jade-green': '#20bf55',
                'yale-blue': '#0b4f6c',
                'bright-sky': '#01baef',
                'ghost-white': '#fbfbff',
                'grey': '#757575',
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
