Vue.createApp({
    data() {
        return {
            greeting: "Llamas vs. Alpacas",
            baseStyle: {
                background: "red",
                border: "1px solid black",
            },
            overRideStyle: {
                background: "black",
                padding: "20px",
                margin: "40x"
            },
            llamaWiki: "https://en.wikipedia.org/wiki/Llama",
            llamaTitle: "Llamas Rule",
            alpacaWiki: "https://en.wikipedia.org/wiki/Alpaca",
            alpacaTitle: "Alpacas Drool",
            newWindow: '_blank',
        }
    }
}).mount("#myApp");