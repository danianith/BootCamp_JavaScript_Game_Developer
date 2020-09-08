// const arr = [1, 3, 3, 7, 4];

// //verifica se certa condição é atendida ou não e retorna boolean
// const temNumeroPar = arr.some(value => value %2 === 0);
// console.log(temNumeroPar);

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

const buscaAluno = alunos.find(aluno => aluno.nota >=7);
const buscaNota = alunos.some(aluno => aluno.nota >= 7);
const buscaPosicao = alunos.findIndex(aluno => aluno.nota >= 7);

console.log('Tem alunos com nota acima de 7:', buscaNota);
console.log('Aluno: ', buscaAluno);
console.log('Posição:', buscaPosicao);

