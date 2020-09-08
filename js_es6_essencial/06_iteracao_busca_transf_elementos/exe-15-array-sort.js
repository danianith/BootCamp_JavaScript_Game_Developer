const alunos = [
    {
        nome: 'André',
        nota: 8
    },
    {
        nome: 'João',
        nota: 6
    },
    {
        nome: 'Matias',
        nota: 5
    }

];

//ordenar ordem crescente
const ordenarAlunos = alunos.sort((current, next) => current.nota - next.nota);
console.log(ordenarAlunos);

//ordenar ordem decrescente
const ordenarAlunosDesc = alunos.sort((current, next) => next.nota - current.nota);
console.log(ordenarAlunosDesc);

