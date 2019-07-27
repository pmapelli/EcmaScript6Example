// const nome = 'Pedro';
// const idade = 28;

// const usuario = {
//     nome,
//     idade,
//     empresa: 'Nutriex',
// };

// const nome = 'Pedro';
// const idade = 28;

// console.log(`Meu nome é ${nome} e tenha ${idade} anos.`);

// SPREAD

// const usuario1 = {
//     nome: 'Pedro',
//     idade: 28,
//     empresa: 'Nutriex'
// };

// const usuario2 = {...usuario1, nome: 'Tiago'};

// const arr1 = [1, 2, 3];
// const arr2 = [3, 4, 5];

// const arr3 = [...arr1, ...arr2];

// SPREAD

//REST
// function soma(...params) {
//     return params.reduce((total, next) => total + next);
// }

// console.log(soma(1, 2));

// const arr = [1, 3, 4, 5, 6];

// const [ a, b, ...c ] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

// const usuario = {
//     nome: 'Pedro',
//     idade: 28,
//     empresa: 'Nutriex'
// };

// const { nome, ...resto} = usuario;

// console.log(nome);
// console.log(resto);

//REST

// const usuario = {
//     nome: 'Pedro',
//     idade: 28,
//     endereco: {
//         cidade: 'Goiania',
//         estado: 'GO',
//     },
// };

// const {nome, idade, endereco: { cidade }} = usuario;


// function mostraNome({ nome, idade }) {
//     console.log(nome, idade);
// }

// console.log(usuario);
// const  soma = (a = 3,b = 6) => a + b;

// console.log(soma(1));

// console.log(soma());

// const arr = [1, 3, 4, 5, 6];

// const newArr = arr.map(item => item * 2);

// const newArr = arr.map((item) => {
//     return item * 2;
// });

// console.log(newArr);

// const teste = () => ({ nome: 'Pedro'});

// const teste = () => {
//  return 'teste';   
// }

// console.log(teste());

// const arr = [1, 3, 4, 5, 8, 10];

// const newArr = arr.map(function(item, index) {
//     return item + index;
// });

// console.log(newArr);

// const sum = arr.reduce(function(total, next) {
//     return total + next;
// });

// console.log(sum);

// const filter = arr.filter(function(item) {
//     return item % 2 === 0;
// });

// console.log(filter);

// const find = arr.find(function(item) {
//     return item === 2;
// })

// class Matematica {
//     static soma(a, b) {
//         return a + b;
//     }
// }

// console.log(Matematica.soma(1, 2));

// class List  {
//     constructor() {
//         this.data = [];
//     }

//     add(data) {
//         this.data.push(data);
//         console.log(this.data);
//     }
// }

// class TodoList extends List{
//     constructor() {
//         super();

//         this.usuario = 'Pedro';
//     }

//     mostraUsuario() {
//         console.log(this.usuario);
//     }
// }

// const MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function() {
//     MinhaLista.add('Novo todo');
// }

// MinhaLista.mostraUsuario();