
/* Desafio 1 - Ordenação de palavras por tamanho

Crie um algoritmo para ordenar um conjunto de palavras pelo seu tamanho. Seu programa deve receber um conjunto de palavras e retornar este mesmo conjunto ordenado pelo tamanho das palavras decrescente, se o tamanho das palavras for igual, deve-se ordernar por ordem alfabética.

Entrada: A primeira linha da entrada possui um único inteiro N, que indica o número de casos de teste. Cada caso de teste poderá conter de 1 a 50 palavras inclusive, e cada uma das palavras poderá conter entre 1 e 50 caracteres inclusive. Os caracteres poderão ser espaços, letras, ou números.


Saída: A saída deve conter o conjunto de palavras da entrada ordenado pelo tamanho das palavras e caso o tamanho das palavras for igual, deve-se ordernar por ordem alfabética.. Um espaço em branco deve ser impresso entre duas palavras.
 
Exemplo de Entrada:                     	Exemplo de Saída:

2						midnight three four
One three four					mond One at
mond at midnight				three five one
one three five
*/


let cases = parseInt(gets()); // Receiving amount cases
let arrivingSeparated = []; 

for (let i = 0; i < cases; i++) {
    arrivingSeparated[i] = gets() // Receiving cases
            .split(' ') // Separating words
            .sort((a, b) => (b.length > a.length) ? 1 : // Order by length
                (b.length === a.length)  ? (a > b) -1 : -1) // Order by ASC
            .toString()
            .replace(/,/gi, " ")
}
for (sentence in arrivingSeparated) console.log(arrivingSeparated[sentence]);
