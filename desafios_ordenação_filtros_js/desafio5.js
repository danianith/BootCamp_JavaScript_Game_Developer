
/* Desafio 5 - Gincana no Acampamento

Nas férias de Dezembro, várias escolas se organizam e levam seus alunos para um acampamento de férias por uma semana. Nestes acampamentos os alunos são divididos em cabanas coletivos por gênero e idade, sempre com um adulto que, além de dormir com o grupo no cabana, também são responsáveis por criar e executar várias atividades, como por exemplo jogos, excursões, Gincanas Noturnas, etc.

No primeiro dia foi realizada uma gincana em que a atividade constituia em agrupar os alunos em um círculo (organizado no sentido anti-horário) do qual seriam retiradas uma a uma até que sobrasse apenas um aluno, que seria o vencedor.

No momento em que entra no círculo, cada aluno recebe uma pequena ficha que contém um valor de 1 a 500. Depois que o círculo é formado, conta-se, iniciando no aluno que está ao lado da primeira que entrou no círculo, o número correspondente à ficha que o primeiro detém. O aluno onde o número contado cair, deve ser retirado do grupo, e a contagem inicia novamente segundo a ficha do aluno que acabou de ser eliminado. Para ficar mais interessante, quando o valor que consta na ficha é par, a contagem é feita no sentido horário e quando o valor que consta na ficha é ímpar, a contagem é feita no sentido anti-horário.

Desenvolva um programa para que no próximo evento o responsável pela brincadeira saiba previamente qual criança irá ser a vencedora de cada grupo, com base nas informações fornecidas.

Entrada: A entrada contém vários casos de teste. A primeira linha de cada caso de teste contém um inteiro N (1 ≤ N ≤ 100), indicando a quantidade de alunos que farão parte de cada círculo. Em seguida, as N linhas de cada caso de teste conterão duas informações, o Nome e o Valor (1 ≤ Valor ≤ 500) que consta na ficha de cada aluno, separados por um espaço, na ordem de entrada na formação do círculo inicial.

OBS: O Nome de cada aluno não deverá ultrapassar 30 caracteres e contém apenas letras maiúsculas e minúsculas, sem acentos, e o caractere “_”. O final da entrada é indicado pelo número zero.


Saída: Para cada caso de teste, deve-se apresentar a mensagem Vencedor(a): xxxxxx, com um espaço após o sinal ":" indicando qual é o aluno do grupo que venceu a brincadeira.
 
Exemplo de Entrada:             	Exemplo de Saída

3					Vencedor(a): Fernanda
Fernanda 7				Vencedor(a): Pedro
Fernando 9				Vencedor(a): Pedro
Gustavo 11
5
Maria 7
Pedro 9
Joao_Vitor 5
Isabel 12
Laura 8
3
Maria 4
Pedro 3
Joao 2
0
 */

let stopped = 0;

while (stopped !== 1 ) {
  
    let cases = parseInt(gets()); 
    
    if (cases === 0) {
        stopped = 1;
     } else {
  
        let students = [];

        for (let i = 0; i < cases; i++){
            let arriving = gets();
            let nameNumber = arriving.split(" ");
            let name = nameNumber[0].normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            
            if (name.length > 30) name = name.substring(0,30);
            
            let number = parseInt(nameNumber[1]);
            students.push({ name, number });   
        }
        
        let circleNumber = students[0].number;
        students.reverse();

        let target = 0;
        let rounds = 0;
    
        while (students.length !== 1)  {
        
            let newCircle = [];
            
            if (circleNumber % 2 === 0) {
                
                for (let i = 0 ; i < circleNumber; i++) {
                    
                    if (rounds === 0) target = 0;
                    if (target >= students.length) target = 0;
                    newCircle[i] = students[target];
                    rounds++;
        
                    if (i === circleNumber - 1 
                        && newCircle[newCircle.length - 1].number % 2 === 0) {
                            target;
                        } else if (i === circleNumber - 1 
                            && newCircle[newCircle.length - 1].number % 2 !== 0) {
                                target--;
                            } else {
                                target++;
                            }
                    }
                } else {
                
                for (let i = 0 ; i < circleNumber; i++) {
                    
                    if (rounds === 0) target = students.length - 2;
                    if (target < 0) target = students.length - 1;
                    newCircle[i] = students[target];
                    rounds++;
                    
                    if (i === circleNumber - 1 
                        && newCircle[newCircle.length - 1].number % 2 === 0) {
                            
                        } else {
                                target--;
                            }
                }
            }
        
            circleNumber = newCircle[newCircle.length - 1].number;
            
            let index = students.indexOf(newCircle[newCircle.length - 1]);
            students.splice(index,1);
                    
        }
        
        console.log(`Vencedor(a): ${students[students.length - 1].name}`);
        
        }
}



