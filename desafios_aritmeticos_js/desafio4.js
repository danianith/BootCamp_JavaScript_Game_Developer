/*
Desafio 4 -  Contagem de Cédulas

Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas necessárias.

Entrada - Você receberá um valor inteiro N (0 < N < 1000000).

Saída - Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha, caso contrário será apresentada a seguinte mensagem: “Presentation Error”.
 
Exemplo de Entrada: 576
Exemplo de Saída: 576
5 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
1 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
0 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00

Solução: */

let valor = parseInt(gets());

console.log(valor);

console.log(parseInt(valor/100) + " nota(s) de R$ 100,00");
valor = valor%100;

console.log(parseInt(valor/50) + " nota(s) de R$ 50,00");
valor = valor%50;

console.log(parseInt(valor/20) + " nota(s) de R$ 20,00");
valor = valor%20;

console.log(parseInt(valor/10) + " nota(s) de R$ 10,00");
valor = valor%10;

console.log(parseInt(valor/5) + " nota(s) de R$ 5,00");
valor = valor%5;

console.log(parseInt(valor/2) + " nota(s) de R$ 2,00");
valor = valor%2;

console.log(parseInt(valor/1) + " nota(s) de R$ 1,00");


