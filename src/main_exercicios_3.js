import axios from 'axios';

const buscaUsuario = async usuario => {  
    try{
        const response = await axios.get(`https://api.github.com/users/${usuario}`);    
        console.log(response.data);    
    }
    catch (err){
        console.log('Usuário não existe');    
    }     
};

buscaUsuario('diego3g');

// import axios from 'axios';

// class Api {
//     static async getRepositories(repo) {
//         try{
//             const response = await axios.get(`https://api.github.com/repos/${repo}`);
//             console.log(response);
//         } catch (err) {
//             console.warn('Erro na Api');
//         }          
//     }
// }

// class Github {  
//     static getRepositories(repo) {    
//         axios.get(`https://api.github.com/repos/${repo}`)      
//         .then(response => {        
//             console.log(response.data);      
//         })      
//         .catch(err => {        
//             console.log('Repositório não existe');
//         })  
//     }
// }

// Api.getRepositories('rocketseat/rocketseat.com.br');
// Api.getRepositories('rocketseat/dslkvmskv');

// import axios from 'axios';

// function getUserFromGithub(user) {  
//     axios.get(`https://api.github.com/users/${user}`)    
//         .then(response => {      
//             console.log(response.data);    
//         })    
//         .catch(err => {      
//             console.log('Usuário não existe');    
//         })
// }

// async function getUserFromGithub(username) {
//     try{
//         const response = await axios.get(`https://api.github.com/users/${username}`);
//         console.log(response);
//     } catch (err) {
//         console.warn('Erro na Api')
//     }          
// }
        
// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');

// Funão delay aciona o .then após 1s
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// function umPorSegundo() {  
//     delay().then(() => {    
//         console.log('1s');    
//         delay().then(() => {      
//             console.log('2s');      
//             delay().then(() => {        
//                 console.log('3s');      
//             });    
//         })  
//     })
// ;}

// const umPorSegundo = async() => {
//     await delay();
//     console.log('1s');    
//     await delay();
//     console.log('2s');    
//     await delay();
//     console.log('3s');    
// }

// umPorSegundo();