/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Open Sans", "sans-serif"],
            },
            colors: {
                white: "#ffffff",
                colorPrimaryDefault: "#009de0",
                colorPrimaryHover: "#1fa9e4",
                shadowColor: "#009de0",
            },
            boxShadow: {
                primaryShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
            },
            spacing: {},
        },
        plugins: [],
    },
};

/* TODO: Burada tailwind ucun sirf bu proyekt'de 
bizim isimize yaraya bilecek utilities'ler configure 
elemek lazimdi, Vaxt tapan kimi nezer yetirecem 

Niye? : meselen diger bir proyektde yeniden yazmaqa 
ehtiyacimiz olanda burdan import elemek olar hemde daha az
kod yazmis olariq */
