// const nome = 'Diego';
// const idade = 23;
// const usuario = {  
//     nome,  
//     idade,  
//     cidade: 'Rio do Sul',
// };

// console.log(usuario);

// const usuario = 'Diego';
// const idade = 23;

// console.log(`O usuário ${usuario} possui ${idade} anos`);

// const usuario = {  
//     nome: 'Diego',  
//     idade: 23,  
//     endereco: {    
//         cidade: 'Rio do Sul',    
//         uf: 'SC',    
//         pais: 'Brasil',  
//     }
// }

// const usuario2 = {...usuario, nome: 'Gabriel'};
// const usuario3 = {...usuario, nome: 'Lontras'};

// console.log(usuario2); 
// console.log(usuario3);

// function soma(...params) {
//     return params.reduce((total, next) => total + next);
// }

// console.log(soma(1, 2, 3, 4, 5, 6)); // 21
// console.log(soma(1, 2)); // 3

// const arr = [1, 2, 3, 4, 5, 6]

// const [ x, ...y ] = arr;

// console.log(x); // 1
// console.log(y); // [2, 3, 4, 5, 6]
// function mostraInfo(usuario) {  
//     return `${usuario.nome} tem ${usuario.idade} anos.`;
// }

// function mostraInfo({ nome, idade }) {
//     return `${nome} tem ${idade} anos.`;
// }

// console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

// const empresa = {  
//     nome: 'Rocketseat',  
//     endereco: {    
//         cidade: 'Rio do Sul',    
//         estado: 'SC',  
//     }
// };

// const {
//     nome,
//     endereco: { cidade, estado }
//   } = empresa;

// console.log(nome);
// console.log(cidade);
// console.log(estado);

// 3.1

// const arr = [1, 2, 3, 4, 5];

// arr.map(function(item) {  
//     return item + 10;
// });

// console.log(arr);

// arr.map(item => item + 10);

// console.log(arr);

// 3.2
// Dica: Utilize uma constante pra function

// const usuario = { nome: 'Diego', idade: 23 };

// function mostraIdade(usuario) {  
//     return usuario.idade
// ;}

// const mostraIdade = () => usuario.idade
    
// console.log(mostraIdade(usuario));

// 3.3
// Dica: Utilize uma constante pra function
// const nome = "Diego";
// const idade = 23;

// function mostraUsuario(nome = 'Diego', idade = 18) {  
//     return { nome, idade };
// }

// const mostraUsuario = (nome = 'Diego', idade = 18) => ({nome , idade});

// console.log(mostraUsuario(nome, idade));
// console.log(mostraUsuario(nome));

// 3.4

// const promise = function() {  
//     return new Promise(function(resolve, reject) {
//         return resolve();  
//     })
// }

// const promise = () => new Promise((resolve, reject) => resolve());

// console.log(promise);

// const usuarios = [  
//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },  
//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },  
//     { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
// ];

// const filter = usuarios.filter(function(item) {
//     item.idade = item.idade * 2
//     return item.idade <= 50;
// });

// console.log(filter);

// const find = usuarios.find(function(item) {
//     return item.empresa === 'Google';
// })

// console.log(find);

// const filter = usuarios.filter(function(item) {
//     return item.idade > 18 && item.empresa === 'Rocketseat';
// });

// console.log(filter);

// const newArr = usuarios.map(usuario => usuario.idade);

// console.log(newArr);

// class Usuario {
//     constructor() {
//         this.email;
//         this.senha;
//     }

//     isAdmin() {
//         return false;
//     }
// }

// class Admin extends Usuario {
//     isAdmin() {
//         return true;
//     }
// }

// const User1 = new Usuario('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste.com', 'senha123');
// console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true