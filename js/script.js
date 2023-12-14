const {createApp} = Vue;

createApp({
    data(){
        return{
            newTask: '',
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
        },
        remove(index){ // per le confirm meglio le modali di bootstrap
            let sureCheck = confirm('Sei sicuro?')
            if(sureCheck == true){
                this.todoList.splice(index,1);
            }
        },
        add(){
            let obj = {
                text: this.newTask,
                done: false
            }
            this.todoList.push(obj);
            this.newTask = '';
        }
    }
}).mount('#app');