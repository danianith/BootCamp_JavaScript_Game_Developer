const students = [
    {
        nome: 'Zacarias',
        nota: 6
    },
    {
        nome: 'Elizabeth',
        nota: 8
    },
    {
        nome: 'Zacarias',
        nota: 10
    }
];

const getNome = students.reduce((estudentsList, value) => estudentsList += value.nome + '\n', '');
console.log(getNome);