const vm = Vue.createApp({
  data() {
    return {
      newConsoleObj: {
        manufacture: '',
        name: '',
        releaseDate: 'null',
        image: '',
        collected: false
      },
      consoles: [
        {
          manufacture: 'Atari',
          name: '2600',
          releaseDate: '09/1977',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Atari-2600-Wood-4Sw-Set.jpg/320px-Atari-2600-Wood-4Sw-Set.jpg',
          generation: '2nd',
          collected: false
        }, {
          manufacture: 'Atari',
          name: '5200',
          releaseDate: '11/1982',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Atari-5200-4-Port-wController-L.jpg/320px-Atari-5200-4-Port-wController-L.jpg',
          generation: '2nd',
          collected: false
        }, {
          manufacture: 'Coleco',
          name: '(Coleco) Vision',
          releaseDate: '08/1982',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Atari-5200-4-Port-wController-L.jpg/320px-Atari-5200-4-Port-wController-L.jpg',
          generation: '2nd',
          collected: false
        }, {
          manufacture: 'Nintendo',
          name: '(Nintendo) Entertainment System',
          releaseDate: '07/1985',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/NES-Console-Set.jpg/320px-NES-Console-Set.jpg',
          generation: '3rd',
          collected: true
        }, {
          manufacture: 'Nintendo',
          name: 'Super Nintendo Entertainment System',
          releaseDate: '11/1990',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/SNES-Mod1-Console-Set.jpg/320px-SNES-Mod1-Console-Set.jpg',
          generation: '4th',
          collected: true
        }, {
          manufacture: 'Sega',
          name: 'Dreamcast',
          releaseDate: '11/1998',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Dreamcast-Console-Set.jpg/320px-Dreamcast-Console-Set.jpg',
          generation: '6th',
          collected: true
        }
      ]
    },
    {
      methods: {
        submitHandler: () => {
          console.log('submitted');
          vm.consoles = vm.consoles.concat(vm.newConsoleObj);
        },
        resetForm: () => {
          vm.newConsoleObj = {
            manufacture: '',
            name: '',
            releaseDate: 'null',
            image: '',
            collected: false
          };
        },
        deleteItem: item => {
          vm.consoles = vm.consoles.filter(console => {
            return console !== item;
          });
        }

      }
    }).mount("#app");
