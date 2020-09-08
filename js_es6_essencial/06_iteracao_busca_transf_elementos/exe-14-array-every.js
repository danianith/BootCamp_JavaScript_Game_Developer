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

//verifica se todos os alunos foram aprovados
const todosAprovados = alunos.every(aluno => aluno.nota >= 7);
console.log(todosAprovados);


