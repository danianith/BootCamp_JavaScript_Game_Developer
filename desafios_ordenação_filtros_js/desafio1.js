
/*  Desafio 1 - Ordenando Números Pares e Ímpares

Crie um programa onde você receberá valores inteiros não negativos como entrada. 
Ordene estes valores de acordo com o seguinte critério:

    Primeiro os Pares
    Depois os Ímpares

Você deve exibir os pares em ordem crescente e na sequência os ímpares em ordem decrescente.

Entrada: A primeira linha de entrada contém um único inteiro positivo N (1 < N < 105) Este é o número de linhas de entrada que vem logo a seguir. As próximas N linhas terão, cada uma delas, um valor inteiro não negativo.

Saída: Exiba todos os valores lidos na entrada segundo a ordem apresentada acima. Cada número deve ser impresso em uma linha, conforme exemplo de saída abaixo:
 
Exemplo de Entrada:	                   Exemplo de Saída:

10					   4
4					   32
32					   34
34					   98
543					   654
3456					   3456
654					   6789
567					   567
87					   543
6789					   87
98
*/

let val = [];
let n = parseInt(gets());

for (i=1; i <= n; i++) {
  val.push(parseInt(gets()));
}

let pares = val.filter((num) => {
  return (num % 2 == 0);
});

let impares = val.filter((num) => {
  return (num % 2 != 0);
});

function cpares(a, b) {
  return a-b;
}

function cimpares(a, b) {
  return b-a;
}

pares.sort(cpares);
impares.sort(cimpares);

for (i=0; i < pares.length; i++) {
  console.log(pares[i]);
}

for (i=0; i < impares.length; i++) {
  console.log(impares[i]);
}

