function Pessoa(){
    if(!Pessoa.instance){
        Pessoa.instance = this;
    }
    return Pessoa.instance;
}

const p = Pessoa.call({name: 'Samara'});
const p2 = Pessoa.call({name: 'Fabiana Souza'});

console.log(p);
console.log(p2);