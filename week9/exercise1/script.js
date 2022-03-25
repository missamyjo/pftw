const myVue = Vue.createApp({
    data() {
        return {
            firstName: "",
            lastName: "",
        }
    },
    methods: {
        newNow() {
            console.log("firing new now");
            return Date.now();
        }
    },
    computed: {
        fullName() {
            console.log("firing full name");
            return this.firstName + " " + this.lastName
        },
        now() {
            console.log("firing now");
            return Date.now();
        }
    }
}).mount("#app");