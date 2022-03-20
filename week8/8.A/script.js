const vm = Vue.createApp({
    data() {
        return {
            newPezObj: {
                pezFace: '',
                pezName: '',
                backingCard: false,
                madeIn: '',
                pezYear: 'null',
                pezQuantity: '',
            },
            pez: [
                {
                    pezName: "Wonder Woman",
                    pezFace: "images/wonderwoman.jpg",
                    backingCard: "Yes",
                    madeIn: "Slovenia",
                    pezYear: "1985",
                    pezQuantity: "3",
                },
                {
                    pezName: "Marge Simpson",
                    pezFace: "images/marge.jpg",
                    backingCard: "Yes",
                    madeIn: "Hungary",
                    pezYear: "unknown",
                    pezQuantity: "1",
                },
                {
                    pezName: "Darth Vader",
                    pezFace: "images/darth.jpg",
                    backingCard: "Yes",
                    madeIn: "China",
                    pezYear: "1997",
                    pezQuantity: "2",
                },
                {
                    pezName: "C-3PO",
                    pezFace: "images/c3po.jpg",
                    backingCard: "Yes",
                    madeIn: "Hungary",
                    pezYear: "1997",
                    pezQuantity: "1",
                },
                {
                    pezName: "Princess Leia",
                    pezFace: "images/leia.jpg",
                    backingCard: "No",
                    madeIn: "Hungary",
                    pezYear: "1997",
                    pezQuantity: "1",
                },
                {
                    pezName: "Yoda",
                    pezFace: "images/yoda.jpg",
                    backingCard: "No",
                    madeIn: "Slovenia",
                    pezYear: "1997",
                    pezQuantity: "1",
                },
                {
                    pezName: "Garfield",
                    pezFace: "images/garfield.jpg",
                    backingCard: "No",
                    madeIn: "China",
                    pezYear: "unknown",
                    pezQuantity: "1",
                },
                {
                    pezName: "Nermal",
                    pezFace: "images/nermal.jpg",
                    backingCard: "No",
                    madeIn: "Slovenia",
                    pezYear: "unknown",
                    pezQuantity: "1",
                },
            ]
        }
    },
    methods: {
        submitHandler: () => {
            console.log('submitted');
            vm.pez = vm.pez.concat(vm.newPezObj);
            vm.resetForm();
        },
        resetForm: () => {
            vm.newPezObj = {
                pezFace: '',
                pezName: '',
                backingCard: false,
                madeIn: '',
                pezYear: 'null',
                pezQuantity: '',
            };
        },
        deletePez: item => {
            vm.pez = vm.pez.filter(pez => {
                return pez !== item;
            })
        }
    }
}).mount("#app");