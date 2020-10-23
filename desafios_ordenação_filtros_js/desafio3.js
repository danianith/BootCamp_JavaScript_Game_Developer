
/* Desafio 3 - Uniformes de final de ano

O professor Girafales organizou a confecção de um uniforme para as turmas da escola para comemorar o final do ano. Após algumas conversas, ficou decidido com os alunos que eles poderiam escolher a cor do uniforme entre branco ou vermelho. Assim sendo, Girafales precisa de sua ajuda para organizar as listas de quem quer o uniforme em cada uma das turmas, relacionando estas camisetas pela cor, tamanho (P, M ou G) e por último pelo nome.

Entrada: Cada caso de teste inicia com um valor N, (1 ≤ N ≤ 60) inteiro e positivo, que indica a quantidade de uniformes a serem feitas para aquela turma. As próximas N*2 linhas contém informações de cada um dos uniformes (serão duas linhas de informação para cada uniforme). A primeira linha irá conter o nome do estudante e a segunda linha irá conter a cor do uniforme ("branco" ou "vermelho") seguido por um espaço e pelo tamanho do uniforme "P" "M" ou "G". A entrada termina quando o valor de N for igual a zero (0) e esta valor não deverá ser processado.

Saída: Para cada caso de entrada deverão ser impressas as informações ordenadas pela cor em ordem ascendente, seguido pelos tamanhos em ordem descendente e por último por ordem ascendente de nome. */

let cases = gets(); //Recebe quantidade de casos
let students = [];

for (let i = 0; i < cases; i++){
    let name = gets();
    let uniform = gets();
    let colorSize = uniform.split(" ");
    let color = colorSize[0];
    let size = colorSize[1];

    students.push({ name, color, size });
}

students.sort((a,b) => (a.color > b.color) ? 1 :
                       (a.color === b.color) ? (a.size < b.size) ? 1 :
                       (a.color === b.color) && (a.size === b.size) ?
                       (a.name > b.name) ? 1 : -1 : -1 : -1);

students.map(student => console.log(student.color, student.size, student.name));




