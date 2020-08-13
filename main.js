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
const usuario = { nome: 'Diego' };

usuario.nome = 'Cleiton';

function teste(x) {
    let y = 2;

    if (x>5); {
        console.log(x,y);
    }
}
teste(10);

const arr = [1, 3, 4, 5, 8, 9];

const newarr = arr.map(item => item * 2);

console.log(newarr);

const filter = arr.filter(item => item % 2 == 0);

console.log(filter);

const find = arr.find(item => item == 4);

console.log(find);

const newArr = arr.map (item => item * 2);

console.log(newArr);

const sum = arr.reduce(function(total, next) { 
    return total + next
});

console.log(sum);

const soma = (a =3, b =6) => a + b;
console.log(soma(1));
console.log(soma());
console.log(soma(1,2));

const arrusuario = {
    nome: 'Diego',
    idade: 23,
    endereço: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    },
};

const {nome, idade, endereço: {cidade, estado}} = arrusuario;

console.log(nome);
console.log(idade);
console.log(cidade);
console.log(estado);
