"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Todolist = /*#__PURE__*/function () {
  function Todolist() {
    _classCallCheck(this, Todolist);

    this.todos = [];
  }

  _createClass(Todolist, [{
    key: "addTodo",
    value: function addTodo() {
      this.todos.push('Novo todo');
      console.log(this.todos);
    }
  }]);

  return Todolist;
}();

var Minhalista = new Todolist();

document.getElementById('novotodo').onclick = function () {
  Minhalista.addTodo();
};

var usuario = {
  nome: 'Diego'
};
usuario.nome = 'Cleiton';

function teste(x) {
  var y = 2;
  if (x > 5) ;
  {
    console.log(x, y);
  }
}

teste(10);
var arr = [1, 3, 4, 5, 8, 9];
var newarr = arr.map(function (item) {
  return item * 2;
});
console.log(newarr);
var filter = arr.filter(function (item) {
  return item % 2 == 0;
});
console.log(filter);
var find = arr.find(function (item) {
  return item == 4;
});
console.log(find);
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);

var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(soma(1));
console.log(soma());
console.log(soma(1, 2));
var arrusuario = {
  nome: 'Diego',
  idade: 23,
  endereço: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = arrusuario.nome,
    idade = arrusuario.idade,
    _arrusuario$endereO = arrusuario.endereço,
    cidade = _arrusuario$endereO.cidade,
    estado = _arrusuario$endereO.estado;
console.log(nome);
console.log(idade);
console.log(cidade);
console.log(estado);
