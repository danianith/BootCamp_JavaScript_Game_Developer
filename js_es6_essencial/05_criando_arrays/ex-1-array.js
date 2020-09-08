const persons = Array.of('Saulo', 'Neemias', 'Obadias');
console.log(persons);

const numbersAndStrings = Array.of(1, 2, 'Abel', 'Jacó');
console.log(numbersAndStrings);

const arrWhit3Positions = Array(3);

const personsList = Array('João', 'Lucas', 'André');
console.log(personsList);

const frutas = ['melancia', 'banana'];

//Insere o elemento no final do array retorna seu tamanho
frutas.push('laranja');
console.log(frutas);

console.log(frutas.length);

//remove o ultimo elemento e retorna o nome do elemento removido
frutas.pop();
console.log(frutas);

//adiciona o elemento no incio do array e retorna o nome do elemento inserido
frutas.unshift('tangerina');
console.log(frutas);

//remove o primeiro elemento do array e retorna seu tamanho
frutas.shift();
console.log(frutas);

const salgados = ['coxinha', 'kibe', 'joelho'];

const alimentos = frutas.concat(salgados);
console.log('Usando concat:', alimentos);



