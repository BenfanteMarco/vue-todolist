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
    },
    methods:{
        toggleDone(index){
            if(this.todoList[index].done == true){
                this.todoList[index].done = false
            }
            else{
                this.todoList[index].done = true
            }
        }
    }
}).mount('#app');