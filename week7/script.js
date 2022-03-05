/* let vm = new Vue({
    el: "#myApp",
    data: {
        greeting: "This is Vue 2",

    }
}); */
Vue.createApp({
    data() {
        return {
            greeting: "This is Vue 3",
            location: "there",
        }
    }
}).mount("#myApp");
Vue.createApp({
    data() {
        return {
            happyLand: "https://disney.com",
            happyTitle: "Happiest Place on Earth"
        }
    }
}).mount("#App");