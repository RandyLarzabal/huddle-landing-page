/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'green-primary': '#26BBA4',
                'blue-primary': '#6174FF',
                'light-grey': 'rgba(158,171,178,0.1)',
                'desc-gray' : '#9EABB2'

            },
            boxShadow: {
                'inner-shadow-green': '0px 10px 20px rgba(137, 229, 199, 0.503305), inset 0px -3px 0px rgba(0, 0, 0, 0.151333)',
                'inner-shadow-blue': '0px 10px 20px rgba(0, 0, 0, 0.0988035), inset 0px -3px 0px rgba(0, 0, 0, 0.151333)',
            },
        },
    },
    plugins: [],
}
