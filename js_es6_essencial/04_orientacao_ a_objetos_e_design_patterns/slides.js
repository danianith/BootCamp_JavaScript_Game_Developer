'use strict';

// const myText = String('Hello prototype');
// console.log(myText.__proto__.split === String.prototype.split);

// function Pessoa(name){
//     this.name = name;
// }

// const p = new Pessoa('Pedro');
// console.log(p);

function Cachorro(){};
Cachorro.prototype.latir = function(){};
const c = new Cachorro();

console.log(c.prototype);
