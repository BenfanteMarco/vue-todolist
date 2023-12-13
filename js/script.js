const {createApp} = Vue;

createApp({
    data(){
        return{
            todoList: [
                {
                    text: 'fare colazione'
                },
                {
                    text: 'studiare'
                },
                {
                    text: 'andare in palestra'
                },
                {
                    text: 'esercitarsi'
                },
                {
                    text: 'riposare'
                }
            ]
        }
    }
}).mount('#app');