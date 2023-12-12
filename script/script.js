// Descrizione:
// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const { createApp } = Vue;

createApp({
    data() {
        return {
            emailsList: [],
        }
    },
    methods: {
        emailsListGen(){

            // funzione che fa chiamate

            for(let i = 0; i < 11; i++) {

                // chiede email ad axios
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(
                    (response) => {
                        const result = response.data.response;
                        // JSON.parse(JSON.stringify(item))
                        // JSON.parse(result)
                        this.emailsList.push(result);
                        console.log(this.emailsList);
                });
            }
        }
    },

    created() {
        this.emailsListGen();
    },
}).mount('#app');

