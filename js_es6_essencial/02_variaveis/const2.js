const name = 'Daniani';

//Não podemos alterar o valor
name = 'Daniani';

const user = {
    name: 'Daniani'
}; //vai retornar um erro.

//Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Outro nome';

//Não podemos fazer o objeto "apontar" para outro lugar
//vai retornar um erro.
user = {
    name: 'Daniani'
}; 

const persons = ['Daniani', 'Stael', 'Gisele']; //array

// Podemos adicionar novos itens
persons.push('Sabrina');
//['Daniani', 'Stael', 'Gisele' 'Sabrina']

// Podemos remover algum item
persons.shift();
//['Stael', 'Gisele' 'Sabrina']

// Podemos alterar diretamente
persons[1] = 'Suzan';
//['Stael', 'Suzan' 'Sabrina']

console.log('\nArray após as alterações: ', persons);