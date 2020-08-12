class Todolist {
    constructor() {
        this.todos = [];
    }
    addTodo(){
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}
const Minhalista = new Todolist();
document.getElementById('novotodo').onclick = function(){
    Minhalista.addTodo();
}