//Exemplo factory - sem instanciar - new

// function Pessoa(){
//     return{
//         name: 'Ricardo',
//         lastName: 'Brandão Jr.'
//     }
// }

// const p = Pessoa();
// console.log(p);

// function Pessoa(name){
//     return{
//         name,
//         lastName: 'Brandão Jr.'
//     }
// }

// const p = Pessoa('Roberto');
// console.log(p);

function Pessoa(customProperties){
    return{
        name: 'Fábio',
        lastName: 'Brandão Jr.',
        ...customProperties
    }
}

const p = Pessoa({name: 'Aline', age: 25});
console.log(p);

