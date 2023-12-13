const {createApp} = Vue;

createApp({
    data(){
        return{
            todoList: [
                {
                    text: 'fare colazione',
                    done: true,
                },
                {
                    text: 'studiare',
                    done: true,
                },
                {
                    text: 'andare in palestra',
                    done: false,
                },
                {
                    text: 'esercitarsi',
                    done: false,
                },
                {
                    text: 'riposare',
                    done: false,
                }
            ]
        }
    }
}).mount('#app');